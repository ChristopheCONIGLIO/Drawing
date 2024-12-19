/**
 * Ce script gère l'ouverture et la fermeture du popup info
 * 
 */


  function openPopup() {
    document.querySelector('.popup-overlay').style.display = 'flex';
  }
  
  // Fonction pour fermer la popup
  document.querySelector('.popup-close').addEventListener('click', function() {
    document.querySelector('.popup-overlay').style.display = 'none';
  });
  
  window.onload = openPopup;
  
  
  
