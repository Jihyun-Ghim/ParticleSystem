class Particle extends p5.Vector {
  constructor(x, y) {
    super(x, y); //x, y에 p5벡터 만들기
    // this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(0.5, 2));
    this.acc = createVector(0, 0);
    this.r = random(1,3);
    this.lifetime = 255;
  }

  finished() {
    return this.lifetime < 0;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.add(this.vel);
    this.acc.set(0, 0);

    this.lifetime -= 5;
  }

  show() {
    noStroke();
    // stroke(255, this.lifetime);
    // strokeWeight(2);
    fill(0 , 0, random(100, 255) , this.lifetime);

    ellipse(this.x, this.y, this.r * 2);
  }
}
