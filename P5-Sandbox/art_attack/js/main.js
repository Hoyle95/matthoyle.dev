let img, painters = [];

class Painter {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.color = {r:random(40,250), g:random(40,250), b:random(40,250)}
        this.size = random(2,8);
    }
    paint() {
        const xv = random(-1,1);
        const yv = random(-1,1);
        this.x += xv*random(1,4);
        this.y += yv*random(1,4);
        this.x = constrain(this.x, 0, width - this.size/2);
        this.y = constrain(this.y, 0, height - this.size/2);
        stroke(this.color.r,this.color.g,this.color.b);
        fill(this.color.r,this.color.g,this.color.b);
        circle(this.x, this.y, this.size);
    }
}

function preload() {
    img = loadImage("./img/art_attack.png"); // Replace with your image file path or URL
  }

function setup() {
    createCanvas(500, 500);
    background(255);
    for(let i=0;i<500;i++) {
        painters.push(new Painter(floor(random(0,width)),floor(random(0,height))));
    }
}

function draw() {
    painters.forEach(painter => {
        painter.paint();
    });
    image(img, 60, 180, img.width/2, img.height/2);
}