

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
        const canvasImage = document.getElementById('imageCanvas');
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        tempCanvas.width = canvasDrawing.width;
        tempCanvas.height = canvasDrawing.height;
        tempCtx.fillStyle = 'white';
        tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height); // doublon pas vu ou le fond est effacé !
        const backgroundImage = new Image();
        backgroundImage.src = window.getComputedStyle(canvasImage).backgroundImage.slice(5, -2); 
        backgroundImage.onload = () => {
            const canvasWidth = canvasDrawing.width;
            const canvasHeight = canvasDrawing.height;
            const imageAspectRatio = backgroundImage.width / backgroundImage.height;
            const canvasAspectRatio = canvasWidth / canvasHeight;
            let drawWidth, drawHeight, offsetX, offsetY;
            if (imageAspectRatio > canvasAspectRatio) {
                drawWidth = canvasWidth;
                drawHeight = canvasWidth / imageAspectRatio;
                offsetX = 0;
                offsetY = (canvasHeight - drawHeight) / 2;
            } else {
                drawHeight = canvasHeight;
                drawWidth = canvasHeight * imageAspectRatio;
                offsetX = (canvasWidth - drawWidth) / 2;
                offsetY = 0;
            }
            tempCanvas.width = canvasWidth;
            tempCanvas.height = canvasHeight;
            tempCtx.fillStyle = 'white';
            tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
            tempCtx.drawImage(canvasDrawing, 0, 0);
            tempCtx.drawImage(backgroundImage, offsetX, offsetY, drawWidth, drawHeight);
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
