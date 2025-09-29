class Particle {
    constructor(c, size = 4) {
        this.x = random(width);
        this.y = random(height);
        this.size = size;
        this.speed = 2;
        this.col = c;
    }

    move() {
        let n = noise(this.x * 0.003, this.y * 0.003);
        this.x += sin(n * 4 * PI) * this.speed;
        this.y += cos(n * 4 * PI) * this.speed;
    }

    display(size) {
        stroke(this.col);
        strokeWeight(size);
        point(this.x, this.y);
    }
}
