// The line below adds autocompletion for p5.js which is very Helpful
/// <reference path="./p5.d.ts" />

// HELP: https://repl.it/@vogelino/P5js-Arrays-and-Objects

// Here are the docs for P5.js: https://p5js.org/reference/

const eyeSketchContainer = document.getElementById('eyeSketch')

function eyeSketch(sketch) {

    let cBlack = "#161616";
    let radius, eyeRadius, angle, x2, y2;

    let eyeRadiusValue = 4.5;
    let strokeWeightValue = 3.25;
    let radiusValue = 6;

    sketch.setup = function () {
        const containerSize = eyeSketchContainer.getBoundingClientRect();
        const canvs = sketch.createCanvas(containerSize.width, containerSize.height);
        canvs.mouseOver(() => sketch.loop())
        canvs.mouseOut(() => sketch.noLoop())
    };

    sketch.draw = function () {
        sketch.background(255);

        sketch.translate(0.15 * sketch.width, 0.15 * sketch.width);
        //dimensions
        radius = radiusValue /  100 * sketch.width;
        eyeRadius = eyeRadiusValue /  100 * sketch.width;
        sketch.strokeWeight(strokeWeightValue /  100 * sketch.width)

        angle = sketch.atan2(sketch.mouseY - (26 + radius) /  100 * sketch.width, sketch.mouseX - (33 + radius) /  100 * sketch.width);
        x2 = 26 /  100 * sketch.width + radius + radius * sketch.cos(angle);
        y2 = 33 /  100 * sketch.width + radius + radius * sketch.sin(angle);
        
        sketch.fill(cBlack);
        sketch.ellipse(x2, y2, eyeRadius);
        
        sketch.noFill();
        sketch.stroke(cBlack)
        sketch.strokeCap(sketch.ROUND);

        sketch.beginShape();
        sketch.vertex(
            32.0686 /  100 * sketch.width,
            5.36884 /  100 * sketch.width
        );

        sketch.vertex(
            32.0686 /  100 * sketch.width,
            16.066 /  100 * sketch.width
        );
        sketch.endShape()


        sketch.beginShape();


        sketch.vertex(
            31.0629 /  100 * sketch.width,
            55.1974 /  100 * sketch.width
        );

        sketch.vertex(
            5.6 /  100 * sketch.width,
            40.5689 /  100 * sketch.width
        );

        sketch.bezierVertex(
            4.22857 /  100 * sketch.width,
            39.7917 /  100 * sketch.width,
            4.22857 /  100 * sketch.width,
            37.7803 /  100 * sketch.width,
            5.6 /  100 * sketch.width,
            37.0031 /  100 * sketch.width
        );

        sketch.vertex(
            31.0629 /  100 * sketch.width,
            22.3746 /  100 * sketch.width
        );

        sketch.bezierVertex(
            31.7029 /  100 * sketch.width,
            22.0089 /  100 * sketch.width,
            32.48 /  100 * sketch.width,
            22.0089 /  100 * sketch.width,
            33.12 /  100 * sketch.width,
            22.3746 /  100 * sketch.width
        );

        sketch.vertex(
            58.5829 /  100 * sketch.width,
            37.0031 /  100 * sketch.width
        );

        sketch.bezierVertex(
            59.9543 /  100 * sketch.width,
            37.7803 /  100 * sketch.width,
            59.9543 /  100 * sketch.width,
            39.7917 /  100 * sketch.width,
            58.5829 /  100 * sketch.width,
            40.5689 /  100 * sketch.width
        );

        sketch.vertex(
            33.12 /  100 * sketch.width,
            55.1974 /  100 * sketch.width
        );
        sketch.bezierVertex(
            32.48 /  100 * sketch.width,
            55.5631 /  100 * sketch.width,
            31.7029 /  100 * sketch.width,
            55.5631 /  100 * sketch.width,
            31.0629 /  100 * sketch.width,
            55.1974 /  100 * sketch.width
        );

        sketch.vertex(
            31.0629 /  100 * sketch.width,
            55.1974 /  100 * sketch.width
        );
        sketch.endShape();


        sketch.beginShape();
        sketch.vertex(
            55.0171 /  100 * sketch.width,
            15.8831 /  100 * sketch.width
        );
        sketch.vertex(
            49.12 /  100 * sketch.width,
            24.8431 /  100 * sketch.width
        );
        sketch.endShape()

        //left eyelid
        sketch.beginShape();
        sketch.vertex(
            15.0628 /  100 * sketch.width,
            24.8431 /  100 * sketch.width
        );
        sketch.vertex(
            9.1657 /  100 * sketch.width,
            15.8831 /  100 * sketch.width
        );
        sketch.endShape()
    };

    sketch.windowResized = function () {

        const containerSize = eyeSketchContainer.getBoundingClientRect();
        sketch.resizeCanvas(containerSize.width, containerSize.height)

         //dimensions
         radius = radiusValue /  100 * sketch.width;
         eyeRadius = eyeRadiusValue /  100 * sketch.width;
         sketch.strokeWeight(strokeWeightValue /  100 * sketch.width)
 
         angle = sketch.atan2(sketch.mouseY - (26 + radius) /  100 * sketch.width, sketch.mouseX - (33 + radius) /  100 * sketch.width);
         x2 = 26 /  100 * sketch.width + radius + radius * sketch.cos(angle);
         y2 = 33 /  100 * sketch.width + radius + radius * sketch.sin(angle);
    }

    return sketch;
}

new p5(eyeSketch, eyeSketchContainer)






