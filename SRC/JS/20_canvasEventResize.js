
// Fonction de redimensionnement du canevas
const resizeCanvas = () => {
    resize_canvas();
};
// Initialisation du redimensionnement
resizeCanvas();
window.addEventListener('resize', resizeCanvas);



//
// TODO redimensionement à faire 
//
function resize_canvas() {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    canvasDrawing.width = newWidth;
    canvasDrawing.height = newHeight;
    canvasImage.width = newWidth;
    canvasImage.height = newHeight;
}

    