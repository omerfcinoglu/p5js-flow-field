let particles = [];
let particleCount = 4000;
let currentColor;
let manager;
const MAX_PARTICLES = 9000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 1);

  manager = new SceneManager({
    sceneDuration: 10000,
    fadeSpeed: 12,
    fadeColor: [0, 0, 0],
    backgroundColor: [0, 0.05],
  });

  for (let i = 0; i < MAX_PARTICLES; i++) {
    particles.push(new Particle());
  }

  manager.clearBackground();
  initParticles();
  background(0);
}

function draw() {
  filter(BLUR, 3);

  if (manager.state === "idle") {
    for (let p of particles) {
      p.move();
      p.display();
    }

    if (manager.shouldStartFadeOut()) {
      manager.startFadeOut();
    }
  }

  let result = manager.update();

  if (result === "fadeOutComplete") {
    manager.clearBackground();
    initParticles();
    manager.startFadeIn();
  }

  manager.display();
}

function initParticles() {
  for (let p of particles) {
    p.active = false;
  }

  particleCount = int(random(2000, MAX_PARTICLES));
  let multp = random(1, 4);

  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  currentColor = color(r, g, b, 0.02);

  for (let i = 0; i < particleCount; i++) {
    particles[i].reset(currentColor, multp);
  }
}
