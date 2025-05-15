let player, rocks = [], apple, score = 0;

function preload() {}

function setup() {
    createCanvas(800, 600);
    player = new Player(width/2,height/2);
    for(let i = 0;i<100;i++) {
        rocks.push(new Rock());
    }
    apple = new Apple();
}

function draw() {
    fill(120,60,10);
    noStroke();
    rect(0,0,width,height);
    rocks.forEach(rock => {
        rock.draw();
    })
    apple.draw();
    player.draw();
    fill(255);
    textSize(50);
    text(`${score}`,10,50)
}

class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 50;
        this.speed = 3;
    }

    draw() {
        this.x = constrain(this.x, 0 + (this.size / 2), width - this.size / 2);
        this.y = constrain(this.y, 0 + (this.size / 2), height - this.size / 2);

        fill(255,205,0);
        circle(this.x, this.y, this.size);

        if (keyDown.w || keyDown.up) {
            this.y -= this.speed;
        }

        if (keyDown.s || keyDown.down) {
            this.y += this.speed;
        }

        if (keyDown.a || keyDown.left) {
            this.x -= this.speed;
        }

        if (keyDown.d || keyDown.right) {
            this.x += this.speed;
        }
    }
}

class Rock {
    constructor() {
        this.size = random(10,60);
        this.x = random(0 + (this.size / 2), width - this.size / 2);
        this.y = random(0 + (this.size / 2), height - this.size / 2);
        this.color = random (100,200)
    }

    draw() {
        fill(this.color);
        circle(this.x, this.y, this.size);
    }
}

class Apple {
    constructor() {
        this.size = random(20,30);
        this.x = random(0 + (this.size / 2), width - this.size / 2);
        this.y = random(0 + (this.size / 2), height - this.size / 2);
    }

    draw() {
        fill(255,0,0);
        circle(this.x, this.y, this.size);
        if (dist(player.x,player.y,this.x,this.y) < player.size/2 + this.size/2) {
            this.size = random(20,30);
            this.x = random(0 + (this.size / 2), width - this.size / 2);
            this.y = random(0 + (this.size / 2), height - this.size / 2);
            score++;
        }
    }
}

const keyDown = {}

function keyState(e, state) {
  switch(e.code) {
    case "KeyW":
        keyDown.w = state;
        break;
    case "KeyA":
        keyDown.a = state;
        break;
    case "KeyS":
        keyDown.s = state;
        break;
    case "KeyD":
        keyDown.d = state;
        break;
    case "ArrowUp":
        keyDown.up = state;
        break;
    case "ArrowDown":
        keyDown.down = state;
        break;
    case "ArrowLeft":
        keyDown.left = state;
        break;
    case "ArrowRight":
        keyDown.right = state;
        break;

  }
}

addEventListener("keydown", (e) => {
  keyState(e, true);
});

addEventListener("keyup", (e) => {
  keyState(e, false);
});