let img, painters = [];

const neilMotivationalQuotes = [
    "You don’t need to be an expert!",
    "Don’t worry if it’s a bit messy.",
    "It’s great fun and anyone can do it.",
    "Just be creative with it!",
    "Give it a go!",
    "Try it yourself!",
    "See what you can come up with!",
    "You can use whatever you’ve got lying around the house.",
    "You don’t have to use exactly the same materials.",
    "All you need is a bit of imagination.",
    "There’s no right or wrong way to do it.",
    "It doesn’t have to be perfect – it just has to be yours.",
    "Art is all about expressing yourself.",
    "You’d be surprised what you can do!",
    "Have a go – you might just surprise yourself!",
    "Use your imagination and have fun!",
    "Mistakes are part of the fun.",
    "Everyone sees art differently – that’s what makes it special.",
    "The important thing is to enjoy yourself while doing it.",
    "Don’t be afraid to try something new.",
    "It’s not about getting it right – it’s about getting stuck in!",
    "Every artist starts somewhere – why not start today?",
    "If it looks different from mine, that’s a good thing!",
    "Be bold, be brave, be creative!",
    "Even a simple idea can turn into something amazing.",
    "There’s no such thing as a silly idea in art.",
    "You never know what you’re capable of until you try.",
    "Add your own twist – make it yours!",
    "The more you do, the better you’ll get.",
    "Creativity is like a muscle – the more you use it, the stronger it gets!",
    "Get stuck in and make something brilliant!"
];

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

function loadQuote() {
    const randomQuote = neilMotivationalQuotes[Math.floor(Math.random() * neilMotivationalQuotes.length)];
    const p = document.createElement("p");
    p.innerHTML = `"${randomQuote}" <br> - <a href="https://en.wikipedia.org/wiki/Neil_Buchanan">Neil Buchanan</a>`;
    const mainElement = document.querySelector("main");
    mainElement.appendChild(p);
}

function preload() {
    img = loadImage("./img/art_attack.png");
  }

function setup() {
    createCanvas(500, 500);
    background(255);
    for(let i=0;i<500;i++) {
        painters.push(new Painter(floor(random(0,width)),floor(random(0,height))));
    }
    loadQuote();
}

function draw() {
    painters.forEach(painter => {
        painter.paint();
    });
    image(img, 60, 180, img.width/2, img.height/2);
}