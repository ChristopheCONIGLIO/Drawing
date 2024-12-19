class Tampon_Heart {
    constructor() {
        this.dim = 100;
    }

    point(x, y) {
        const scale = this.dim / 100;
        ctx.beginPath();
        ctx.moveTo(x, y - 30 * scale);
        ctx.bezierCurveTo(x - 50 * scale, y - 80 * scale, x - 50 * scale, y + 10 * scale, x, y + 40 * scale);
        ctx.bezierCurveTo(x + 50 * scale, y + 10 * scale, x + 50 * scale, y - 80 * scale, x, y - 30 * scale);
        ctx.closePath();
        ctx.fillStyle = this.getStrokeStyle();
        ctx.fill();
    }

    draw(lastX, lastY, x, y) {}

    getStrokeStyle() {
        return brushColor || "red";
    }
}
class Tampon_Star {
    constructor() {
        this.dim = 100;
        this.branches = 5;
    }

    point(x, y) {
        const outerRadius = this.dim / 2;
        const innerRadius = outerRadius / 2;
        const angleStep = Math.PI / this.branches;
        ctx.beginPath();
        for (let i = 0; i < this.branches * 2; i++) {
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const angle = i * angleStep;
            const px = x + radius * Math.cos(angle);
            const py = y + radius * Math.sin(angle);
            i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fillStyle = this.getStrokeStyle();
        ctx.fill();
    }

    draw(lastX, lastY, x, y) {}

    getStrokeStyle() {
        return brushColor;
    }
}
class Tampon_Rainbow {
    constructor(dim,border,petal) {
        this.dim = dim; // 30 10Diamètre du demi-cercle
        this.borderWidth = border; // 15 5
        this.petalCount = petal; // 6 9
    }

    point(x, y) {
        const radius = this.dim / 2;

        for (let i = 0; i < this.petalCount; i++) {
            const alpha = 1 - (i / (this.petalCount - 1));
            ctx.beginPath();
            ctx.arc(x, y, radius + (i * 15), Math.PI, 0, false);
            ctx.lineWidth = this.borderWidth;
            ctx.strokeStyle = this.getStrokeStyle(i, alpha);
            ctx.lineJoin = 'round'; // Jointures pointues
            ctx.lineCap = 'butt'; 
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(x, y, radius + (i * 15) - this.borderWidth, Math.PI, 0, false);
            ctx.globalCompositeOperation = "destination-out";
            ctx.lineWidth = this.borderWidth;
            ctx.stroke();
            ctx.globalCompositeOperation = "source-over";
        }
    }

    draw(lastX, lastY, x, y) {}

    getStrokeStyle(index, alpha) {
        const rgb = this.hexToRgb(brushColor);
        return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
    }
    
    hexToRgb(hex) {
        // Supprimer le # si présent
        hex = hex.replace(/^#/, '');
    
        // Gestion des formats courts (#RGB)
        if (hex.length === 3) {
            hex = hex.split('').map(char => char + char).join('');
        }
    
        // Convertir en valeurs RGB
        const bigint = parseInt(hex, 16);
        return {
            r: (bigint >> 16) & 255, // Rouge
            g: (bigint >> 8) & 255,  // Vert
            b: bigint & 255          // Bleu
        };
    }

    
}
class Tampon_Rainbow2 {
    constructor(dim, border, petal) {
        this.dim = dim; // 30 Diamètre du demi-cercle
        this.borderWidth = border; // 15
        this.petalCount = petal; // 6
        this.rainbowColors = [
            '#FF0000', // Rouge
            '#FF7F00', // Orange
            '#FFFF00', // Jaune
            '#00FF00', // Vert
            '#0000FF', // Bleu
            '#4B0082', // Indigo
            '#9400D3'  // Violet
        ];
    }

    point(x, y) {
        const radius = this.dim / 2;

        for (let i = 0; i < this.petalCount; i++) {
            const alpha = 1 - (i / (this.petalCount - 1));
            ctx.beginPath();
            ctx.arc(x, y, radius + (i * 15), Math.PI, 0, false);
            ctx.lineWidth = this.borderWidth;
            ctx.strokeStyle = this.getStrokeStyle(i, alpha);
            ctx.lineJoin = 'round'; // Jointures pointues
            ctx.lineCap = 'butt'; 
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(x, y, radius + (i * 15) - this.borderWidth, Math.PI, 0, false);
            ctx.globalCompositeOperation = "destination-out";
            ctx.lineWidth = this.borderWidth;
            ctx.stroke();
            ctx.globalCompositeOperation = "source-over";
        }
    }

    draw(lastX, lastY, x, y) {}

    getStrokeStyle(index, alpha) {
        // Cycle dans la palette d'arc-en-ciel
        const colorIndex = index % this.rainbowColors.length;
        const rgb = this.hexToRgb(this.rainbowColors[colorIndex]);
        return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
    }
    
    hexToRgb(hex) {
        // Supprimer le # si présent
        hex = hex.replace(/^#/, '');
    
        // Gestion des formats courts (#RGB)
        if (hex.length === 3) {
            hex = hex.split('').map(char => char + char).join('');
        }
    
        // Convertir en valeurs RGB
        const bigint = parseInt(hex, 16);
        return {
            r: (bigint >> 16) & 255, // Rouge
            g: (bigint >> 8) & 255,  // Vert
            b: bigint & 255          // Bleu
        };
    }
}






class Tampon_Crescent {
    constructor() {
        this.dim = 100;
    }

    point(x, y) {
        ctx.beginPath();
        ctx.arc(x, y, this.dim / 2, 0.2 * Math.PI, 1.8 * Math.PI, false);
        ctx.arc(x - this.dim / 4, y, this.dim / 2, 1.8 * Math.PI, 0.2 * Math.PI, true);
        ctx.closePath();
        ctx.fillStyle = this.getStrokeStyle();
        ctx.fill();
    }

    draw(lastX, lastY, x, y) {}

    getStrokeStyle() {
        return brushColor || "yellow";
    }
}
class Tampon_Sunburst {
    constructor() {
        this.dim = 100;
        this.rays = 12;
    }

    point(x, y) {
        const outerRadius = this.dim / 2;
        const innerRadius = outerRadius / 2;
        const angleStep = (Math.PI * 2) / this.rays;

        ctx.beginPath();
        for (let i = 0; i < this.rays; i++) {
            const angle = i * angleStep;
            const px1 = x + outerRadius * Math.cos(angle);
            const py1 = y + outerRadius * Math.sin(angle);
            const px2 = x + innerRadius * Math.cos(angle + angleStep / 2);
            const py2 = y + innerRadius * Math.sin(angle + angleStep / 2);
            ctx.lineTo(px1, py1);
            ctx.lineTo(px2, py2);
        }
        ctx.closePath();
        ctx.fillStyle = this.getStrokeStyle();
        ctx.fill();
    }

    draw(lastX, lastY, x, y) {}

    getStrokeStyle() {
        return brushColor || "orange";
    }
}
class Tampon_Wave {
    constructor() {
        this.dim = 100;
        this.peaks = 4; // Nombre de crêtes
    }

    point(x, y) {
        const amplitude = this.dim / 4;
        const wavelength = this.dim / this.peaks;

        ctx.beginPath();
        ctx.moveTo(x - this.dim / 2, y);
        for (let i = 0; i <= this.peaks; i++) {
            const peakX = x - this.dim / 2 + i * wavelength;
            const peakY = y + (i % 2 === 0 ? -amplitude : amplitude);
            ctx.quadraticCurveTo(peakX, peakY, peakX + wavelength / 2, y);
        }
        ctx.strokeStyle = this.getStrokeStyle();
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    draw(lastX, lastY, x, y) {}

    getStrokeStyle() {
        return brushColor || "blue";
    }
}
class Tampon_Clover {
    constructor() {
        this.dim = 100;
    }

    point(x, y) {
        const radius = this.dim / 4;

        ctx.beginPath();
        for (let i = 0; i < 4; i++) {
            const angle = (i * Math.PI) / 2;
            const px = x + radius * Math.cos(angle);
            const py = y + radius * Math.sin(angle);
            ctx.arc(px, py, radius / 2, 0, Math.PI * 2);
        }
        ctx.closePath();
        ctx.fillStyle = this.getStrokeStyle();
        ctx.fill();
    }

    draw(lastX, lastY, x, y) {}

    getStrokeStyle() {
        return brushColor || "green";
    }
}
class Tampon_Arrow {
    constructor() {
        this.dim = 100;
    }

    point(x, y) {
        const width = this.dim / 4;
        const height = this.dim / 2;

        ctx.beginPath();
        ctx.moveTo(x, y - height / 2);
        ctx.lineTo(x + width, y);
        ctx.lineTo(x, y + height / 2);
        ctx.lineTo(x - width, y);
        ctx.closePath();
        ctx.fillStyle = this.getStrokeStyle();
        ctx.fill();
    }

    draw(lastX, lastY, x, y) {}

    getStrokeStyle() {
        return brushColor || "red";
    }
}
class Tampon_Butterfly {
    constructor() {
        this.dim = 100;
    }

    point(x, y) {
        const wingRadius = this.dim / 3;

        ctx.beginPath();
        ctx.arc(x - wingRadius, y, wingRadius, Math.PI / 2, -Math.PI / 2, true);
        ctx.arc(x + wingRadius, y, wingRadius, -Math.PI / 2, Math.PI / 2, true);
        ctx.fillStyle = this.getStrokeStyle();
        ctx.fill();
    }

    draw(lastX, lastY, x, y) {}

    getStrokeStyle() {
        return brushColor || "pink";
    }
}


