const COLOR_GROUND = "#7CAB6D";

let currentFont;
let canvasScaleRatio;

function preload() {
  currentFont = loadFont("assets/Quicksand-Bold.ttf");
}

function setup() {
  createCanvas(1280, 720, WEBGL);
  textFont(currentFont);
}


function draw() {
  canvasScaleRatio = (windowHeight - 100) / 720;
  scale(canvasScaleRatio);
  translate(-width / 2, -height / 2);
  background(COLOR_GROUND);
  fill(255);
  rect(mouseX, mouseY, 200, 100);
  text("(" + (mouseX * canvasScaleRatio) + ", " + (mouseY * canvasScaleRatio) + ")",
    mouseX, mouseY);

  if (mouseX > width - 200) {
    textAlign(RIGHT);
  } else {
    textAlign(LEFT);
  }

  canvasResponsive();
}

function canvasResponsive() {
  let canvasWidthNew = windowWidth * (windowHeight - 100) / 720;
  resizeCanvas(canvasWidthNew, windowHeight - 100);
}
