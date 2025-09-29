class SceneManager {
    constructor({
        sceneDuration = 10000,
        fadeSpeed = 5,
        fadeColor = [0, 0, 0],
        backgroundColor = [14, 0.05],
    } = {}) {
        this.state = "idle"; // idle | fadeOut | fadeIn
        this.opacity = 0;
        this.sceneDuration = sceneDuration;
        this.fadeSpeed = fadeSpeed;
        this.fadeColor = fadeColor;
        this.backgroundColor = backgroundColor;
        this.lastSceneTime = millis();
    }

    shouldStartFadeOut() {
        return millis() - this.lastSceneTime > this.sceneDuration;
    }

    startFadeOut() {
        this.state = "fadeOut";
        this.opacity = 0;
    }

    startFadeIn() {
        this.state = "fadeIn";
        this.opacity = 255;
        this.lastSceneTime = millis();
    }

    update() {
        if (this.state === "fadeOut") {
            this.opacity += this.fadeSpeed;
            if (this.opacity >= 255) {
                this.opacity = 255;
                return "fadeOutComplete";
            }
        } else if (this.state === "fadeIn") {
            this.opacity -= this.fadeSpeed;
            if (this.opacity <= 0) {
                this.opacity = 0;
                this.state = "idle";
                return "fadeInComplete";
            }
        }
        return null;
    }

    display() {
        if (this.state !== "idle") {
            noStroke();
            fill(this.fadeColor[0], this.fadeColor[1], this.fadeColor[2], this.opacity / 255);
            rect(0, 0, width, height);
        }
    }

    clearBackground() {
        background(this.backgroundColor[0], this.backgroundColor[1]);
    }
}
