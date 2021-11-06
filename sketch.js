let particle;

function setup() {
  createCanvas(400, 400);
  particle = new Particle(200,200);
}

function draw() {
  background(0);

  let gravity = createVector(0, 0.2);
  particle.applyForce(gravity);

  particle.update();
  particle.edges();
  particle.show();
}
