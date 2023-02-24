const sketchContainer = document.getElementById('sketchAscii')

function sketchAscii(sketch) {
  
 
  let textColor = 0;
  let tSize;
  let tSpacing;
  let rBall;
  

  let textColors = [
    //white
    sketch.color('#F8F8F2'),

    //purple
    sketch.color('#AE81FF'),

    //orange
    sketch.color('#FD971F'),

    //blue
    sketch.color('#66D9EF'),

    //pink
    sketch.color('#F92672'),

    //green
    sketch.color('#A6E22E'),

    //yellow
    sketch.color('#A6E22E'),    
  ];

  let backgroundColor = sketch.color('#272822');

  let amountOfBackgroundCharacters = 14;

  

  //array of objects
  let BackgroundDigits = [];
  //array of characters
  let BackgroundDigitsCharacters = [
    //background characters
    '=',
    '#',
    '+',
    '*',
    '.',
    ':',
    ';',
    '/',
    '}',
    '{',
    '?',
    '!',
    '',
    '',
    '',


    //ball characters
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '',
    '',
    '',
  ]

  let Balls = [];

  let BallsAmount = 1;
  let offsetIncrease = 0.005;
  let frameRateSpeed = 10;
  let ball;

  let sketchWidthDimension;



  sketch.setup = function() {
    const containerSize = sketchContainer.getBoundingClientRect();
    const canvs = sketch.createCanvas(containerSize.width, containerSize.height);
    sketch.frameRate(frameRateSpeed);
    canvs.mouseOver(() => sketch.loop())
    canvs.mouseOut(() => sketch.noLoop())

    sketchWidthDimension = sketch.width
    tSize = sketch.width / 50;
    tSpacing = tSize * 0.95;

    rBall = sketchWidthDimension / 6;

    
    ball = new Ball(0, 1, rBall);

    //grid of digit-objects
    for (let x = 0; x < sketch.width; x += tSpacing){
        for (let y = 0; y < sketch.height; y += tSpacing){
            BackgroundDigits.push(new BackgroundDigit(x, y, tSize));
        }
    }
  };


  sketch.draw = function() {
    
    sketch.background(backgroundColor);
    ball.display(offsetIncrease);

    //displaying digit-objects
    for (let aIndex = 0; aIndex < BackgroundDigits.length; aIndex ++){
        BackgroundDigits[aIndex].checkCollision();
        BackgroundDigits[aIndex].display();
    }
  };


  class BackgroundDigit  {
    constructor(x, y, rDigit) {
        this.x = x;
        this.y = y;
        this.rDigit = rDigit;
        this.doesCollide = false;
    }
    checkCollision () {
        let d = sketch.dist(
            this.x + tSize / 2.5,
            this.y - tSize / 2,
            ball.xBall,
            ball.yBall
        );
      
      if (d < ball.rBall) {
            this.doesCollide = true;
          } else {
            this.doesCollide = false;
          }  
    }
    display () {
        sketch.strokeWeight(0.05);
        sketch.textSize(tSize);
        let colorIndex = sketch.floor(sketch.random(0,5));
        sketch.fill (textColors[0]);
      
        //declaring characters used
        
        let randomHoverIndex = sketch.floor(sketch.random(amountOfBackgroundCharacters, BackgroundDigitsCharacters.length));
        let randomBackgroundIndex = sketch.floor(sketch.random(0, amountOfBackgroundCharacters)); //0
        
        let characterIndex = !this.doesCollide ? randomBackgroundIndex : randomHoverIndex
        sketch.fill (textColors[1]);
        sketch.text (
            BackgroundDigitsCharacters[characterIndex],
            this.x + tSize / 4,
            this.y - tSize / 10
        );
    }
  }

  class Ball {

    constructor (xnBall, ynBall, rBall) {
        this.xnBall = xnBall;
        this.ynBall = ynBall
        this.rBall = rBall;
        this.fillColor = 0;

        this.xBall = sketch.noise(this.xnBall) * sketch.width;
        this.yBall = sketch.noise(this.ynBall) * sketch.height; 
    }

    display (offsetIncrease) {
        this.xBall = sketch.noise(this.xnBall) * sketch.width;
        this.yBall = sketch.noise(this.ynBall) * sketch.height;  
        //fill (this.fillColor);
        sketch.noFill();
        sketch.stroke(backgroundColor);
        sketch.strokeWeight(0);
        sketch.ellipse(this.xBall, this.yBall, this.rBall)
        sketch.stroke(0);

        this.xnBall += offsetIncrease;
        this.ynBall += offsetIncrease;
    }
}
  

  sketch.windowResized = function() {

    const containerSize = sketchContainer.getBoundingClientRect();
    sketch.resizeCanvas(containerSize.width, containerSize.height)
  }

  return sketch;
}

new p5(sketchAscii, sketchContainer)