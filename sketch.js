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
//load fonts
let font1;
let font2;
let font3;
let font4;
let font5;
let font6;
let font7;
let font8;
let font9;

function preload() {
    font1 = loadFont('fonts/Poppins-Thin.ttf');
    font2 = loadFont('fonts/Poppins-ExtraLight.ttf');
    font3 = loadFont('fonts/Poppins-Light.ttf');
    font4 = loadFont('fonts/Poppins-Regular.ttf');
    font5 = loadFont('fonts/Poppins-Medium.ttf');
    font6 = loadFont('fonts/Poppins-SemiBold.ttf');
    font7 = loadFont('fonts/Poppins-Bold.ttf');
    font8 = loadFont('fonts/Poppins-ExtraBold.ttf');
    font9 = loadFont('fonts/Poppins-Black.ttf');
}

//text
var letter = 'weeee';


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    fill(0);

    textFont(font4);
    textAlign(CENTER, CENTER);

    colorMode(HSB, 360, 100, 100);

}

function mouseMoved() {
    clear();
    textSize((mouseX - width / 2) * 3 + 1);
    text(letter, mouseX, mouseY);
    // fill(360 - mouseY / 2, 100, 100);
}

function mouseDragged() {

    textSize((mouseX - width / 2) * 3 + 1);
    text(letter, mouseX, mouseY);
    fill(360 - mouseY / 2, 100, 100);

}

function keyReleased() {
    if (keyCode == CONTROL) saveCanvas(gd.timestamp(), 'png');
    if (key == '1') textFont(font1);
    if (key == '2') textFont(font2);
    if (key == '3') textFont(font3);
    if (key == '4') textFont(font4);
    if (key == '5') textFont(font5);
    if (key == '6') textFont(font6);
    if (key == '7') textFont(font7);
    if (key == '8') textFont(font8);
    if (key == '9') textFont(font9);


}

// function keyTyped() {
//     letter = key;
// }


// window.addEventListener("scroll", function(e) {
//     const maxGravity = 1000;
//     const minGravity = 0;
//     const posTop = 0;
//     const posBottom = 300;





//     var scrollPosition = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
//     console.log(scrollPosition);
//     const percent = scrollPosition / 0.99;
//     const gravityScale = percent * maxGravity - minGravity;
//     const positionScale = percent * posBottom + posTop;

//     const newGravityValue =
//         scrollPosition > 0.99 ?
//         maxGravity :
//         gravityScale;


//     if (scrollPosition >= 0.99) {
//         text.style.setProperty("--gravity", maxGravity);
//         // text.style.setProperty("--pos", posBottom + '%');
//     } else {
//         text.style.setProperty("--gravity", newGravityValue);
//         // text.style.setProperty("--pos", positionScale + '%');
//     }






// });