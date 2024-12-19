
const buttons = {
    buttonList1: document.getElementById('buttonList1'),
    buttonList2: document.getElementById('buttonList2'),
    buttonList3: document.getElementById('buttonList3'),
    buttonList4: document.getElementById('buttonList4')
  };

  const lists = {
    list1: document.getElementById('list1'),
    list2: document.getElementById('list2'),
    list3: document.getElementById('list3'),
    list4: document.getElementById('list4')
  };

  function showList(listId) {
    Object.values(lists).forEach(list => list.classList.add('hidden'));
    lists[listId].classList.remove('hidden');
  }

  function updateButton(button, item) {
    if (item.style.backgroundColor) {
      button.style.backgroundColor = item.style.backgroundColor;
      button.innerHTML = '';
    } else if (item.tagName === 'IMG') {
      button.style.backgroundColor = '';
      button.innerHTML = `<img src="${item.src}" alt="Selected" style="width: 40px; height: 40px; object-fit: contain; object-position: center;">`;
    }
  }

  function hideLists() {
    Object.values(lists).forEach(list => list.classList.add('hidden'));
  }

  Object.keys(buttons).forEach(key => {
    buttons[key].addEventListener('click', (e) => {
      e.stopPropagation();
      showList(key.replace('button', '').toLowerCase());
    });
  });

  document.querySelectorAll('.list-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const altValue = item.getAttribute('alt');
      if (altValue === 'brush') {
            applyBrush(item);
            updateButton(buttons[`buttonList${item.closest('.list-overlay').id.replace('list', '')}`], item);
      } 
      if (altValue === 'image') {
            applyImage(item);
            updateButton(buttons[`buttonList${item.closest('.list-overlay').id.replace('list', '')}`], item);
        }
        if (altValue === 'option') {
          applyOption(item);
      }
      hideLists();
    });
  });
  
  document.querySelectorAll('.list-itemColor').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const altValue = item.getAttribute('alt');
      if (altValue === 'color') {
            applyColor(item);
      } 
      updateButton(buttons[`buttonList${item.closest('.list-overlay').id.replace('list', '')}`], item);
      hideLists();
    });
  });

  document.body.addEventListener('click', () => {
    hideLists();
  });

