let particles = [];
let particleCount = 4000;
let currentColor;
let manager;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 1);

  manager = new SceneManager({
    sceneDuration: 10000,
    fadeSpeed: 12,
    fadeColor: [0, 0, 0],
    backgroundColor: [0, 0.05],
  });

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
  particles = [];
  let hueVal = random(0, 360);
  currentColor = color(hueVal, 80, 100, 0.02);
  particleCount = int(random(2000, 9000));
  let multp = random(1, 4);
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle(currentColor, multp));
  }
}
