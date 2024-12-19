

function applyOption(item){

    if( item.getAttribute('data-id') == "NEW") {
        ctx.clearRect(0, 0, canvasDrawing.width, canvasDrawing.height);
    }
    if( item.getAttribute('data-id') == "INFO") {
        openPopup();
    }
    if (item.getAttribute('data-id') === "UPLOAD") {
        //  
        // Code un peu complexe pour construire l'image complète  
        //  
        // !!! Ce code ne fonctionne pas en local !!!  
        // <<<Cependant>>> la solution est simple, mais un peu fastidieuse : il faudrait convertir  
        // toutes les images en base64 et les charger dans un fichier JavaScript.  
        //  
        const canvasDrawing = document.getElementById('drawingCanvas');
        const ctxDrawing = canvasDrawing.getContext('2d');
        const canvasImage = document.getElementById('imageCanvas');
        const ctxImage = canvasImage.getContext('2d');
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        tempCanvas.width = canvasImage.width;
        tempCanvas.height = canvasImage.height;
        tempCtx.fillStyle = 'white';
        tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
        const backgroundImage = new Image();
        backgroundImage.src = window.getComputedStyle(canvasImage).backgroundImage.slice(5, -2); 
        backgroundImage.onload = () => {
            tempCtx.drawImage(canvasDrawing, 0, 0);
            tempCtx.drawImage(backgroundImage, 0, 0, canvasImage.width, canvasImage.height);
            tempCanvas.toBlob(blob => {
                const a = document.createElement('a');
                a.href = URL.createObjectURL(blob);
                a.download = 'drawing.png';
                a.click();
                URL.revokeObjectURL(a.href);
            });
        };
    }   
}
