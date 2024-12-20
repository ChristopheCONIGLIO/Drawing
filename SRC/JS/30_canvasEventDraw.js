

let drawing = false;
let lastX = 0, lastY = 0;
var brushSelected;

    



canvasDrawing.addEventListener('mouseup', () => drawing = false);
canvasDrawing.addEventListener('mouseout', () => drawing = false);
canvasImage.addEventListener('mouseup', () => drawing = false);
canvasImage.addEventListener('mouseout', () => drawing = false);

    // Touch events for iPad
function startDrawing(e) {
      drawing = true;
      const rect = canvasDrawing.getBoundingClientRect();
      const x = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
      const y = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY;
      brushSelected.point(x- rect.left,y- rect.top);
      [lastX, lastY] = [x , y ];
      e.preventDefault();
  }
  
canvasDrawing.addEventListener('mousedown', startDrawing);
canvasDrawing.addEventListener('touchstart', (e) => {
    startDrawing(e);
    e.preventDefault();
});
canvasImage.addEventListener('mousedown', startDrawing);
canvasImage.addEventListener('touchstart', (e) => {
    startDrawing(e);
    e.preventDefault();
});



function draw(e) {
    if (!drawing) return;

    const rect = canvasDrawing.getBoundingClientRect();
    const x = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const y = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY;

    brushSelected.draw(lastX- rect.left,lastY- rect.top,x- rect.left,y- rect.top);

    [lastX, lastY] = [x, y];
}

canvasDrawing.addEventListener('mousemove', draw);
canvasDrawing.addEventListener('touchmove', (e) => {
draw(e);
e.preventDefault();
});

canvasImage.addEventListener('mousemove', draw);
canvasImage.addEventListener('touchmove', (e) => {
draw(e);
e.preventDefault();
});





