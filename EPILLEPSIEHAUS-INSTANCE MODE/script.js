// The line below adds autocompletion for p5.js which is very Helpful
/// <reference path="./p5.d.ts" />

// HELP: https://repl.it/@vogelino/P5js-Arrays-and-Objects

// Here are the docs for P5.js: https://p5js.org/reference/




const houseContainer = document.getElementById('houseSketch')

function houseSketch(sketch) {



let spacingX, spacingY, Wwidth, Wheight, windows;







  sketch.setup = function() {
    const containerSize = houseContainer.getBoundingClientRect();
    const canvs = sketch.createCanvas(containerSize.width, containerSize.height);
    canvs.mouseOver(() => sketch.loop())
    canvs.mouseOut(() => sketch.noLoop())

    spacingX = (15 / 600) * sketch.width;
    spacingY = (20 / 600) * sketch.height;

    Wwidth = (40 / 600) * sketch.width;
    Wheight = (40 / 600) * sketch.height; 

    let xRow = (180 / 600) * sketch.width;
    let yRow = (140 / 600) * sketch.width;

    windows = [

      //first row
      {
        x: xRow,
        y: yRow,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 1,
        y: yRow,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 2,
        y: yRow,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 3,
        y: yRow,
        w: Wwidth,
        h: Wheight
      },
    
      //second row
      {
        x: xRow,
        y: yRow + (Wwidth + spacingX) * 1,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 1,
        y: yRow + (Wheight + spacingY) * 1,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 2,
        y: yRow + (Wheight + spacingY) * 1,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 3,
        y: yRow + (Wheight + spacingY) * 1,
        w: Wwidth,
        h: Wheight
      },
    
      //third row
    
      {
        x: xRow + (Wwidth + spacingX) * 0,
        y: yRow + (Wheight + spacingY) * 2,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 1,
        y: yRow + (Wheight + spacingY) * 2,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 2,
        y: yRow + (Wheight + spacingY) * 2,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 3,
        y: yRow + (Wwidth + spacingY) * 2,
        w: Wwidth,
        h: Wheight
      },
    
      //4th row
      {
        x: xRow + (Wwidth + spacingX) * 0,
        y: yRow + (Wwidth + spacingY) * 3,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 1,
        y: yRow + (Wwidth + spacingY) * 3,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 2,
        y: yRow + (Wwidth + spacingY) * 3,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 3,
        y: yRow + (Wwidth + spacingY) * 3,
        w: Wwidth,
        h: Wheight
      },
    
      //5th row (big window)
    
      {
        x: xRow + (Wwidth + spacingX) * 0,
        y: yRow + (Wwidth + spacingY) * 4,
        w: Wwidth + (165 / 600) * sketch.width,
        h: Wheight
      },
    
      //6th row
      {
        x: xRow + (Wwidth + spacingX) * 0,
        y: yRow + (Wwidth + spacingY) * 5,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 1,
        y: yRow + (Wwidth + spacingY) * 5,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 2,
        y: yRow + (Wwidth + spacingY) * 5,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 3,
        y: yRow + (Wwidth + spacingY) * 5,
        w: Wwidth,
        h: Wheight
      },
    
      //7th row
      {
        x: xRow + (Wwidth + spacingX) * 0,
        y: yRow + (Wwidth + spacingY) * 6,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 1,
        y: yRow + (Wwidth + spacingY) * 6,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 2,
        y: yRow + (Wwidth + spacingY) * 6,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 3,
        y: yRow + (Wwidth + spacingY) * 6,
        w: Wwidth,
        h: Wheight
      },
    
      //big window vertical
      {
        x: xRow + (Wwidth + spacingX) * 4,
        y: yRow + (Wwidth + spacingY) * 0,
        w: Wwidth - (20 / 600) * sketch.width,
        h: Wheight + (360 / 600) * sketch.height
      },
    
    
    
      // ...
    ];
  };

  sketch.draw = function() {
    // sketch.translate(0.175 * sketch.width, 1);
    sketch.background(125);
    sketch.drawHouse();
    for (let windowPizza of windows) {
      sketch.drawFrame(windowPizza)
    }
  };

  sketch.drawHouse = function() {
    let house = {
      w: (300 / 600) * sketch.width, //300
      h: (550 / 600) * sketch.height, //500
      x: (150 / 600) * sketch.width, //50
      y: (100 / 600) * sketch.height //100
    }
  
    sketch.fill(200);
    sketch.noStroke();
    sketch.rect(house.x, house.y, house.w, house.h)
    sketch.fill(150, 100, 20);
    sketch.triangle(house.x, house.y, house.x + house.w / 2, 0, house.x + house.w, house.y);
  };

  sketch.drawFrame = function(pizzaWindow) {
    r = sketch.random(0, 255)
    g = sketch.random(0, 255)
    b = sketch.random(0, 255)
  
    sketch.fill(r, g, b);
    sketch.rect(pizzaWindow.x, pizzaWindow.y, pizzaWindow.w,
      pizzaWindow.h);
  };


  sketch.windowResized = function() {

    const containerSize = houseContainer.getBoundingClientRect();
    sketch.resizeCanvas(containerSize.width, containerSize.height)

    spacingX = (15 / 600) * sketch.width;
    spacingY = (20 / 600) * sketch.height;

    Wwidth = (40 / 600) * sketch.width;
    Wheight = (40 / 600) * sketch.height; 

    let xRow = (180 / 600) * sketch.width;
    let yRow = (140 / 600) * sketch.width;

    windows = [

      //first row
      {
        x: xRow,
        y: yRow,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 1,
        y: yRow,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 2,
        y: yRow,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 3,
        y: yRow,
        w: Wwidth,
        h: Wheight
      },
    
      //second row
      {
        x: xRow,
        y: yRow + (Wwidth + spacingX) * 1,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 1,
        y: yRow + (Wheight + spacingY) * 1,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 2,
        y: yRow + (Wheight + spacingY) * 1,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 3,
        y: yRow + (Wheight + spacingY) * 1,
        w: Wwidth,
        h: Wheight
      },
    
      //third row
    
      {
        x: xRow + (Wwidth + spacingX) * 0,
        y: yRow + (Wheight + spacingY) * 2,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 1,
        y: yRow + (Wheight + spacingY) * 2,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 2,
        y: yRow + (Wheight + spacingY) * 2,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 3,
        y: yRow + (Wwidth + spacingY) * 2,
        w: Wwidth,
        h: Wheight
      },
    
      //4th row
      {
        x: xRow + (Wwidth + spacingX) * 0,
        y: yRow + (Wwidth + spacingY) * 3,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 1,
        y: yRow + (Wwidth + spacingY) * 3,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 2,
        y: yRow + (Wwidth + spacingY) * 3,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 3,
        y: yRow + (Wwidth + spacingY) * 3,
        w: Wwidth,
        h: Wheight
      },
    
      //5th row (big window)
    
      {
        x: xRow + (Wwidth + spacingX) * 0,
        y: yRow + (Wwidth + spacingY) * 4,
        w: Wwidth + (165 / 600) * sketch.width,
        h: Wheight
      },
    
      //6th row
      {
        x: xRow + (Wwidth + spacingX) * 0,
        y: yRow + (Wwidth + spacingY) * 5,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 1,
        y: yRow + (Wwidth + spacingY) * 5,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 2,
        y: yRow + (Wwidth + spacingY) * 5,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 3,
        y: yRow + (Wwidth + spacingY) * 5,
        w: Wwidth,
        h: Wheight
      },
    
      //7th row
      {
        x: xRow + (Wwidth + spacingX) * 0,
        y: yRow + (Wwidth + spacingY) * 6,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 1,
        y: yRow + (Wwidth + spacingY) * 6,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 2,
        y: yRow + (Wwidth + spacingY) * 6,
        w: Wwidth,
        h: Wheight
      },
    
      {
        x: xRow + (Wwidth + spacingX) * 3,
        y: yRow + (Wwidth + spacingY) * 6,
        w: Wwidth,
        h: Wheight
      },
    
      //big window vertical
      {
        x: xRow + (Wwidth + spacingX) * 4,
        y: yRow + (Wwidth + spacingY) * 0,
        w: Wwidth - (20 / 600) * sketch.width,
        h: Wheight + (360 / 600) * sketch.height
      },
    
    
    
      // ...
    ];
  }

  return sketch;
}

new p5(houseSketch, houseContainer)