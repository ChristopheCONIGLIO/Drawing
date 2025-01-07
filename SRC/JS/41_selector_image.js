



 function applyImage(item){
    const imageUrl = item.getAttribute('src');
    applyImageSRC(imageUrl);
 }
 function applyImageSRC(imageUrl){
   const targetDiv = canvasImage; 
   targetDiv.style.backgroundImage = `url(${imageUrl})`;
   targetDiv.style.backgroundSize = 'contain'; 
   targetDiv.style.backgroundPosition = 'center'; 
   targetDiv.style.backgroundRepeat = 'no-repeat';
   ctx.clearRect(0, 0, canvasDrawing.width, canvasDrawing.height);
}
const randomNum = Math.floor(Math.random() * 9) + 1;  
applyImageSRC(`./SRC/DESSIN/00${randomNum}.png`);  
