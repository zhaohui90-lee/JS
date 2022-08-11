const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

const score = document.querySelector('p');

// 设置变量
function random(min, max) {
  return Math.random(Math.floor() * (max - min)) + min;
}

function randomColor() {
  return `rbg(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
}

// 建立小球模型
function Shape(x, y, velX, velY, color, size, exits) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
  this.exits = exits;
}

function Ball(x, y, velX, velY, color, size, exits) {
  Shape.call(this, x, y, velX, velY, exits);

  this.color = color;
  this.size = size;
}

Ball.prototype = Object.create(Shape.prototype);
Ball.prototype.constructor = Ball;

// 绘制小球
Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}

// 更新小球的数据
Ball.prototype.update = function() {
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
}

// 让球动起来
let balls = [];

while (balls.length < 25) {
  let size = random(10, 20);
  let ball = new Ball(
    // 为避免绘制错误 球至少离画布边缘本身一倍宽度的距离
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomColor(),
    size,
    true
  );
  balls.push(ball)
}

function loop() {
  ctx.fillStyle = `rbga(0, 0, 0, 0.25)`;
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < balls.length; i++) {
    if (balls[i].exits != false) {
      balls[i].draw();
      balls[i].update();
    }
  }
  requestAnimationFrame(loop);
}

loop();