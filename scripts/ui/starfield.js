/**
 * Starfield background animation
 */

class Star {
    constructor(canvas) {
        this.canvas = canvas;
        this.reset();
    }

    reset() {
        this.x = Math.random() * this.canvas.width - this.canvas.width / 2;
        this.y = Math.random() * this.canvas.height - this.canvas.height / 2;
        this.z = Math.random() * this.canvas.width;
    }

    update() {
        this.z -= APP_CONFIG.STAR_SPEED;
        if (this.z <= 0) {
            this.reset();
        }
    }

    draw(ctx) {
        const x = (this.x / this.z) * this.canvas.width + this.canvas.width / 2;
        const y = (this.y / this.z) * this.canvas.height + this.canvas.height / 2;
        const size = Math.max(0, (1 - this.z / this.canvas.width) * 2);

        if (size > 0) {
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}

class Starfield {
    constructor(canvasId, numStars = 200) {
        this.canvas = DOMUtils.getById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.numStars = numStars;
        this.stars = [];

        this.init();
        this.setupResizeHandler();
    }

    init() {
        this.resizeCanvas();
        this.createStars();
        this.animate();
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createStars() {
        this.stars = [];
        for (let i = 0; i < this.numStars; i++) {
            this.stars.push(new Star(this.canvas));
        }
    }

    animate() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.stars.forEach(star => {
            star.update();
            star.draw(this.ctx);
        });

        requestAnimationFrame(() => this.animate());
    }

    setupResizeHandler() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
        });
    }
}
