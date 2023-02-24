// The line below adds autocompletion for p5.js canvasHeightich is very Helpful
/// <reference path="./p5.d.ts" />

// HELP: https://repl.it/@vogelino/P5js-Arrays-and-Objects

// Here are the docs for P5.js: https://p5js.org/reference/

const ticTacToeContainer = document.getElementById('ticTacToeSketch')

function ticTacToeSketch(sketch) {

       
    let strokeW;

    //ARRAYS
    let imgArray = [];
    let rArray = [0];
    let iR;

    let clickedArray = [0];
    let clickedArrayIndex = 0;

    let imageInstance = [];

    let gridAmount = 3;
    let divider;


    sketch.preload = function () {
        for (let iC = 0; iC < 6; iC++) {
            imgArray.push(sketch.loadImage(`image-folder/image_${iC + 1}.jpeg`))
        }
    }


    sketch.setup = function () {
        const containerSize = ticTacToeContainer.getBoundingClientRect();
        const canvs = sketch.createCanvas(containerSize.width, containerSize.height);
        canvs.mouseOver(() => sketch.loop())
        canvs.mouseOut(() => sketch.noLoop())

        strokeW = (2 / 600) * sketch.width;
        divider = sketch.width / gridAmount;
        


        sketch.frameRate(6);
        sketch.colorMode(sketch.HSB);
    };

    sketch.draw = function () {
        iR = sketch.round(sketch.random(0, 5));
        rArray.splice(rArray.length - 2)
        rArray.push(iR);

        sketch.drawGrid();
        for (let i = 0; i < imageInstance.length; i++) {
            imageInstance[i].display();
        }
        sketch.imageCursor(imgArray[rArray[0]]);
        console.log(imageInstance);
    };

    //draws background grid
    sketch.drawGrid = function (grid) {
        sketch.fill("white");
        sketch.stroke("black");
        sketch.strokeWeight(strokeW);
        for (let i = 0; i <= 3; i++) {
            for (let h = 0; h <= 3; h++) {
                sketch.rect(i * sketch.width / 3, h * sketch.width / 3, sketch.width / 3, sketch.width / 3);
            }
        }
    }

    sketch.mouseClicked = function () {
        clickedArray.push(iR)
        clickedArrayIndex = clickedArrayIndex + 1;

        //// first row
        //1x1
        if ((sketch.mouseX <= divider) && (sketch.mouseY <= divider)) {
            imageInstance.push(new placedImage(imgArray[clickedArray[clickedArrayIndex]], divider * 0, divider * 0));
        }
        //1x2
        else if ((sketch.mouseX >= divider) && (sketch.mouseX <= divider * 2) && (sketch.mouseY <= divider)) {
            imageInstance.push(new placedImage(imgArray[clickedArray[clickedArrayIndex]], divider * 1, divider * 0));
        }
        //1x3
        else if ((sketch.mouseX >= divider * 2) && (sketch.mouseY <= divider)) {
            imageInstance.push(new placedImage(imgArray[clickedArray[clickedArrayIndex]], divider * 2, divider * 0));
        }

        //// second row
        //2x1
        if ((sketch.mouseX <= divider) && (sketch.mouseY >= divider) && (sketch.mouseY <= divider * 2)) {
            imageInstance.push(new placedImage(imgArray[clickedArray[clickedArrayIndex]], divider * 0, divider * 1));
        }
        //2x2
        else if ((sketch.mouseX >= divider) && (sketch.mouseX <= divider * 2) && (sketch.mouseY >= divider) && (sketch.mouseY <= divider * 2)) {
            imageInstance.push(new placedImage(imgArray[clickedArray[clickedArrayIndex]], divider * 1, divider * 1));
        }
        //2x3
        else if ((sketch.mouseX >= divider * 2) && (sketch.mouseY >= divider) && (sketch.mouseY <= divider * 2)) {
            imageInstance.push(new placedImage(imgArray[clickedArray[clickedArrayIndex]], divider * 2, divider * 1));
        }

        //// third row
        //3x1
        if ((sketch.mouseX <= divider) && (sketch.mouseY >= divider * 2) && (sketch.mouseY <= divider * 3)) {
            imageInstance.push(new placedImage(imgArray[clickedArray[clickedArrayIndex]], divider * 0, divider * 2));
        }
        //3x2
        else if ((sketch.mouseX >= divider) && (sketch.mouseX <= divider * 2) && (sketch.mouseY >= divider * 2) && (sketch.mouseY <= divider * 3)) {
            imageInstance.push(new placedImage(imgArray[clickedArray[clickedArrayIndex]], divider * 1, divider * 2));
        }
        //3x3
        else if ((sketch.mouseX >= divider * 2) && (sketch.mouseY >= divider * 2) && (sketch.mouseY <= divider * 3)) {
            imageInstance.push(new placedImage(imgArray[clickedArray[clickedArrayIndex]], divider * 2, divider * 2));
        }
    }

    //mouse cursor with random image
    sketch.imageCursor = function (img) {
        sketch.image(img, sketch.mouseX - sketch.width / 6, sketch.mouseY - sketch.width / 6, sketch.width / 3, sketch.width / 3);
    }

    class placedImage {
        constructor(imageSource, x, y) {
            this.imageSource = imageSource,
                this.x = x,
                this.y = y,
                this.w = (sketch.width / 3),
                this.h = (sketch.width / 3)
        }

        display() {
            sketch.image(this.imageSource, this.x, this.y, this.w, this.h)
        }
    }

    sketch.windowResized = function () {

        const containerSize = ticTacToeContainer.getBoundingClientRect();
        sketch.resizeCanvas(containerSize.width, containerSize.height)


        
        strokeW = (2 / 600) * sketch.width;
        divider = sketch.width / gridAmount;

        
    }

    return sketch;
}

new p5(ticTacToeSketch, ticTacToeContainer)



















    



  





