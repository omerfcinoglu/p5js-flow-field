class Particle {
    constructor(c, m) {
        this.x = random(width);
        this.y = random(height);
        this.size = 4;
        this.speed = random(2, 6);
        this.col = c;
        this.multiplier = m;
    }

    move() {
        let n = noise(this.x * 0.003, this.y * 0.003);
        this.x += sin(n * this.multiplier * PI) * this.speed;
        this.y += cos(n * this.multiplier * PI) * this.speed;
    }

    display() {
        stroke(this.col);
        strokeWeight(this.size);
        point(this.x, this.y);
    }
}
