

var particleSize = 4;
var particleCount = 1200;

var visible = true;
var gui, gui2;



function keyPressed() {
  switch (key) {
    case 'p':
      visible = !visible;
      if (visible) gui.show(); else gui.hide();
      break;
  }
}


let particles = [];
let currentColor;
let manager;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 1);

  gui = createGui("Settings ( 'p' to hide / show )");
  gui.addGlobals('particleSize');

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
  if (manager.state === "idle") {
    for (let p of particles) {
      p.move();
      p.display(particleSize);
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
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle(currentColor, particleSize));
  }
}
