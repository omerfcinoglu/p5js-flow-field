class Particle {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.size = 4;
        this.speed = random(2, 6);
        this.multiplier = random(1, 4);
        this.col = color(255);
        this.active = false;
    }

    reset(c, m) {
        this.x = random(width);
        this.y = random(height);
        this.size = 4;
        this.speed = random(2, 6);
        this.multiplier = m;
        this.col = c;
        this.active = true;
    }

    move() {
        if (!this.active) return;
        let n = noise(this.x * 0.003, this.y * 0.003);
        this.x += sin(n * this.multiplier * PI) * this.speed;
        this.y += cos(n * this.multiplier * PI) * this.speed;
    }

    display() {
        if (!this.active) return;
        stroke(this.col);
        strokeWeight(this.size);
        point(this.x, this.y);
    }
}
