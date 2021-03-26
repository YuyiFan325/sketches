// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/QHEQuoIKgNE

function Circle(x, y) {
  this.x = x;
  this.y = y;
  this.r = 5;
  this.growing = true;

  this.grow = function() {
    if (this.growing) {
    this.r += 5;
    }
  };

  this.show = function() {
    stroke(0);
    noFill();

    strokeWeight(3);
    rect(this.x, this.y, sin(this.r * 2), tan(this.r * 2));
  };

  this.edges = function() {
    return (
      this.x + this.r >= width ||
      this.x - this.r <= 0 ||
      this.y + this.r >= height ||
      this.y - this.r <= 0
      );
    };
}