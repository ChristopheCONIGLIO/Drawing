class doNothing {
    constructor() {
    }
    point(x, y) {
    }
    draw(lastX,lastY,x,y){
    }
}
class FullBrush {
    constructor($dim) {
        this.dim = $dim
    }
    point(x, y) {
        ctx.lineWidth = this.dim;
        const hex = brushColor;
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 1)`;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.arc(x, y, this.dim / 2, 0, Math.PI * 2);
        ctx.fill();
    }
    
    draw(lastX,lastY,x,y){
        ctx.lineWidth = this.dim;
        const hex = brushColor;
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 1)`;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x , y );
        ctx.stroke();
    }
}
class Gomme {
    constructor($dim) {
        this.dim = $dim
    }
    point(x, y) {
        ctx.lineWidth = this.dim;
        ctx.globalCompositeOperation = "destination-out"; 
        ctx.beginPath();
        ctx.arc(x, y, this.dim / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = "source-over"; 
    } 
    
    draw(lastX, lastY, x, y) {
        ctx.lineWidth = this.dim;
        ctx.globalCompositeOperation = "destination-out";
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.globalCompositeOperation = "source-over";
    }
    
}