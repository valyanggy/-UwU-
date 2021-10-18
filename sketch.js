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

var font = 'ruddy, sans-serif';
var letter = 'weeee';

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    fill(0);

    textFont(font);
    textAlign(CENTER, CENTER);

    colorMode(HSB, 360, 100, 100);
}

function mouseMoved() {
    clear();
    textSize((mouseX - width / 2) * 5 + 1);
    text(letter, mouseX, mouseY);
    fill(360 - mouseY / 2, 100, 100);


}

function mouseDragged() {
    textSize((mouseX - width / 2) * 5 + 1);
    text(letter, mouseX, mouseY);
    fill(360 - mouseY / 2, 100, 100);
}

function keyReleased() {
    if (keyCode == CONTROL) saveCanvas(gd.timestamp(), 'png');
}

function keyTyped() {
    letter = key;
}