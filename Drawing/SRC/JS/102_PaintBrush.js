class PaintBrush {
    constructor($dim) {
        this.dim = $dim;
    }

    point(x, y) {}

    draw(lastX, lastY, x, y) {
        const distance = Math.sqrt((x - lastX) ** 2 + (y - lastY) ** 2);
        const adjustedDim = Math.max(this.dim * 0.5, Math.min(this.dim * 1.5, this.dim * (distance / 50)));
        const minAlpha = 0.05, maxAlpha = 0.4;
        const adjustedAlpha = Math.min(maxAlpha, Math.max(minAlpha, distance / 100));
        const steps = (distance / (adjustedDim / 2)) * 60;
        const deltaX = (x - lastX) / steps, deltaY = (y - lastY) / steps;

        for (let i = 0; i < steps; i++) {
            const currentX = lastX + deltaX * i + this.randomOffset();
            const currentY = lastY + deltaY * i + this.randomOffset();
            ctx.fillStyle = this.getStrokeStyle(adjustedAlpha, adjustedAlpha);
            ctx.beginPath();
            ctx.arc(currentX, currentY, adjustedDim / 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    getStrokeStyle(minAlpha, maxAlpha) {
        const hex = brushColor;
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, 0.01)`;
    }

    randomOffset() {
        return (Math.random() - 0.5) * this.dim * 0.5;
    }
}
