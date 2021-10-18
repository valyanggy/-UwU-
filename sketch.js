// P_1_0_01
//
// Generative Gestaltung – Creative Coding im Web
// ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
// Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// with contributions by Joey Lee and Niels Poldervaart
// Copyright 2018
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * changing colors and size by moving the mouse
 *
 * MOUSE
 * position x          : size
 * position y          : color
 *
 * KEYS
 * s                   : save png
 */
'use strict';

var count = 0;
var tileCountX = 1;
var tileCountY = 1;
var tileWidth = 0;
var tileHeight = 0;

var colorStep = 15;

var circleCount = 0;
var endSize = 0;
var endOffset = 0;

var actRandomSeed = 0;



function setup() {
    createCanvas(1000, 1000);
    noCursor();

    colorMode(HSB, 360, 100, 100);
    rectMode(CENTER);
    noStroke();
    tileWidth = width / tileCountX;
    tileHeight = height / tileCountY;
    noFill();
    stroke(0, 128);
}

function draw() {
    background(mouseY / 2, 100, 100);
    fill(360 - mouseY / 2, 100, 100);
    // ellipse(360, 360, mouseX + 4, mouseX + 4);

    randomSeed(actRandomSeed);

    translate(tileWidth / 2, tileHeight / 2);

    circleCount = mouseX / 50 + 1;
    endSize = map(mouseX, 0, max(width, mouseX), tileWidth / 2, 0);
    endOffset = map(mouseY, 0, max(height, mouseY), 0, (tileWidth - endSize) / 2);
    //  

    for (var gridY = 0; gridY <= tileCountY; gridY++) {
        for (var gridX = 0; gridX <= tileCountX; gridX++) {
            push();
            translate(tileWidth * gridX, tileHeight * gridY);
            scale(1, tileHeight / tileWidth);

            // var toggle = int(random(0, 4));
            // if (toggle == 0) rotate(-HALF_PI);
            // if (toggle == 1) rotate(0);
            // if (toggle == 2) rotate(HALF_PI);
            // if (toggle == 3) rotate(PI);

            // draw module
            for (var i = 0; i < circleCount; i++) {
                var diameter = map(i, 0, circleCount, tileWidth, endSize);
                var offset = map(i, 0, circleCount, 0, endOffset);
                ellipse(offset, 0, diameter, diameter);
            }
            pop();
        }
    }


}

function mousePressed() {
    actRandomSeed = random(100000);
}

function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}