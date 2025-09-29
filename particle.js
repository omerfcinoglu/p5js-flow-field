class Particle {
    constructor(c) {
        this.x = random(width);
        this.y = random(height);
        this.size = 4;
        this.speed = 2;
        this.col = c;
    }

    move() {
        let n = noise(this.x * 0.003, this.y * 0.003);
        this.x += sin(n * 4 * PI) * this.speed;
        this.y += cos(n * 4 * PI) * this.speed;
    }

    display() {
        stroke(this.col);
        strokeWeight(this.size);
        point(this.x, this.y);
    }
}
