var maxScroll = 0;
var currScroll = 0;

function popluateCodeInput() {
  // $("#codeInput").val(defaultCode);
  $("#codeScroll").html($("#codeInput").val());
}

function go() {
  if ($("#codeInput").val() == "") {
    $("#codeInput").val(defaultCode);
  }
  $("#codeScroll").html($("#codeInput").val());
  $(".wrapper").css("display", "block");
  $(".startScreen").css("display", "none");
  prettyPrint();
}

function clearText() {
  $("#codeInput").val("")
}

function resetText() {
  $("#codeInput").val(defaultCode);
}

function pageScroll() {
  currScroll = $(document).scrollTop();
  maxScroll = document.body.scrollHeight - window.innerHeight;
  if (currScroll > maxScroll - 10) {
    $(window).scrollTop(0);
  }
  window.scrollBy(0, 1);
  scrolldelay = setTimeout(pageScroll, 10);
}


$(document).ready(function() {
  maxScroll = document.body.scrollHeight - window.innerHeight;
  currScroll = $(document).scrollTop();
  pageScroll();
  popluateCodeInput();
});

var defaultCode = `// This is a circle object
// It takes an x and a y for its location
function Circle(x, y) {
  // this.pos is a vector with the obejct's pos(x,y)
  this.pos = createVector(random(width), random(height));
  // this.pos = createVector(x,y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.target = createVector(x, y)

  // this.r is the circle's radius
  // this.growrate is how fast the cirlce grows
  // Amount each frame
  // this.growing is a bool var for it the circle should grow or not
  // this.buffer is how much black space should be allowed between circles
  this.r = 1;
  this.growRate = 1.5;
  this.growing = true;
  this.buffer = 5;

  // how the cirlces move.
  // MaxSpeed is how long a vector can possibly be (Top left to bottom right)
  // How much do we slow down
  // this.maxSpeed = sqrt(width * width + width * width);
  this.maxSpeed = 5;
  this.maxForce = 0.3;
  this.fleeRange = 125;
  this.fleeSpeed = 7;

  // var middle = createVector(width/2,height/2);
  // var d = dist(middle.x, middle.y, this.target.x, this.target.y)
  // var c = map(d,0,width/2,0,255)

  // this.color is the color of the circle
  // this.color = color(random(360),255,255)
  // this.color = color(c,255,255)

  // Apply a force to acc (Takes a vector)
  this.applyForce = function(f) {
    this.acc.add(f)
  }

  // This function will update the color of the circle
  this.updateColor = function() {
    var middle = createVector(width / 2, height / 2);
    var d = dist(middle.x, middle.y, this.pos.x, this.pos.y);
    var c = map(d, 0, width / 2, 0, 255);
    this.color = color(c, 255, 255);
  }

  // updates color, vel, pos, acc, and calls the arrive function.
  this.update = function() {
    this.updateColor();
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.arrive(this.target);
    var d = dist(this.pos.x, this.pos.y, mouseX, mouseY)
    var mouseV = createVector(mouseX, mouseY);
    if (d < this.fleeRange) {
      this.applyForce(this.run(mouseV));
    }
  }

  this.run = function(target) {
    var fleeingTarget = createVector(target.x, target.y);
    var fleeDir = p5.Vector.sub(this.pos, fleeingTarget)
    fleeDir.setMag(this.fleeSpeed)
    return p5.Vector.sub(fleeDir, this.vel);
  }

  // This arive is a function that moves a agent (circle)
  // towards a target based on how far away from target it is
  // Think of this as stoping at a stop sign
  // We want to go max speed until we are close to the sign
  // As we get closer we want to slow down
  // Once we arive we want to stop
  this.arrive = function(target) {
    // Get the direction
    var desired = p5.Vector.sub(target, this.pos)
    // See how long this vector is
    var d = desired.mag();
    // Get the max speed
    var speed = this.maxSpeed;
    // This is the "Slow down as we get close" part of the alg
    if (d < 10 * this.maxSpeed) {
      speed = map(d, 0, 10 * this.maxSpeed, 0, this.maxSpeed)
    }
    // Resize the vector
    desired.setMag(speed)
    // "steer"
    var steer = p5.Vector.sub(desired, this.vel)
    // Apply the force
    steer.limit(this.maxForce)
    this.applyForce(steer)
  }

  // This.show draws the circle to the screen
  this.show = function() {
    // Color mode Hue, sat, brightness
    // No stroke around the circle
    // Fill the circle with it's color
    // Draw the ellipse
    // NOTE: this.r is the radius so we must mult it by 2 for the with and height
    colorMode(HSB);
    noStroke();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
  }

  // This.grow will inc this.r by this.growRate if the circle is still growing
  this.grow = function() {
    if (!this.bounds()) {
      this.growing = false;
    }
    // If the circle is still growing and this.r < the MAXSIZE ->
    if (this.growing && this.r < MAXSIZE) {
      // this.r = this.r + this.growRate
      this.r += this.growRate;
    }
  }

  // this function will return false if the circle is touching another circle or a wall
  this.bounds = function() {
    // Check to see if the circle is touching a wall
    var tempX = this.target.x + this.r + this.buffer;
    var tempY = this.target.y + this.r + this.buffer;
    if (tempX > width || tempY > height) return false;
    var tempX = this.target.x - this.r - this.buffer;
    var tempY = this.target.y - this.r - this.buffer;
    if (tempX < 0 || tempY < 0) return false;

    // Check to see if 'this' is touching any other circle
    for (var i = 0; i < circles.length; i++) {
      // Check circle at i
      // Get the distance between 'this' and circle c
      var c = circles[i];
      var d = dist(this.target.x, this.target.y, c.target.x, c.target.y)
      // IF D > 1 // NOTE: 'this' is in the circle array so it will
      // check itself so the distance from itself to itself will be 0
      // thus will stop growing
      if (d > 1) {
        // if the distance is less than both radius + the buffer then return false
        if (d < this.r + c.r + this.buffer) {
          return false;
        }
      }
    }
    return true;
  }
}

function addCircle() {
  var x = random(width);
  var y = random(height);

  var valid = true;
  for (var i = 0; i < circles.length; i++) {
    var c = circles[i];
    var d = dist(x, y, c.target.x, c.target.y)
    if (d - c.buffer < c.r) {
      valid = false;
    }
  }

  if (valid) {
    circles.push(new Circle(x, y))
  }

  return valid;
}

// Mikian Musser
// Code Central
// Sprint: Advanced Programing Topics with P5.js
// https://www.youtube.com/watch?v=QHEQuoIKgNE
// https://p5js.org/reference/

// MAXSIZE => The max radius of a circle
// CIRCLESEACHFRAME => The numbers of circles that are spawned each frame
// ATTEMPTS => The nuber of tries to spawn a circle each frame.
// MAX => Max number of circles possible
var MAXSIZE = 50;
var CIRCLESEACHFRAME = 10;
var ATTEMPTS = CIRCLESEACHFRAME * 10;
var MAX = 1000;

// circle => Array to hold the cirlces
// Finished => Var to tell if we have finished packing the space yet
var circles = [];
var finished = false;

// Create the canvas
function setup() {
  createCanvas(500, 500);
}

function draw() {
  // Draw the background
  background(0, 0, 0)
  addCircles();

  // For each circle update, grow, and show.
  for (var i = 0; i < circles.length; i++) {
    circles[i].update();
    circles[i].grow();
    circles[i].show();
  }
}

function addCircles() {
  // circlesThisFrame keeps track of how many circles have sucessfully been spwaned this frame.
  // attemptsToAddCircle keepts track of how many attempts to add a circle have been made.
  var circlesThisFrame = 0;
  var attemptsToAddCircle = 0;
  // If the number of cirlcs is less than the max and we are not finished then ->
  if (circles.length < MAX && !finished) {
    // While the # of circles this frame < CIRCLESEACHFRAME
    while (circlesThisFrame < CIRCLESEACHFRAME) {
      // inc attempts
      attemptsToAddCircle++;
      // If we sucessfully add a circle then inc circlesThisFrame
      if (addCircle()) {
        circlesThisFrame++;
      }
      // If we try too many times (attemptsToAddCircle > ATTEMPTS)
      // Then we are done trying to pack circles
      if (attemptsToAddCircle > ATTEMPTS) {
        finished = true;
        // Break from while loop
        break;
      }
    }
  }
}

// Mikian Musser
// Code Central
// Sprint: Advanced Programing Topics with P5.js
// https://www.youtube.com/watch?v=CKeyIbT3vXI

// 1. This is a firework object
// It takes in -
// x
// y
// size
// color

// Vars
// 2. vector pos
// 3. size
// 4. color
// 5. vector vel
// 6. vector acc
// 7. vector g
// 8. pcount
// 9. array partical
// 10. bool exploded
// 11. bool del

// Functions
// 12. Apply force
// 13. Update
// 14. explode
// 15. show

function Firework(x_, y_, size_, color_) { // 1

  // Vars
  // 2. Create a vector with x and y as the passed values.
  // 3. set size to the passed value
  // 4. set the color to the passed value
  this.pos = createVector(x_, y_) // 2
  this.size = size_; // 3
  this.color = color_; // 4

  // 5. create a vector for the velocity
  // 6. create a vector for the acceleration
  // 7. create a vector for the force of gravity
  this.vel = createVector(0, 0); // 5
  this.acc = createVector(0, 0); // 6
  this.g = createVector(0, 0.1); // 7

  // 8. pCount is the number of particles the fire makes when it explodes
  // 9. particles is the array for storing all of the particles made when it explodes
  this.pCount = floor(size_ * 5); // 8
  this.particles = []; // 9

  // 10. exploded is a bool to check is the firework has been exploded yet. Starts as false
  // 11. del is a bool to see if the firework can be deleted from the array.
  this.exploded = false; // 10
  this.del = false; // 11

  // 12. Apply force
  // Apply force takes in a vector and adds it to the acceleration
  // a. Add the force to acc vector
  this.applyForce = function(f) { // 12
    this.acc.add(f); // 12.a
  }

  // 13. Update
  // a > Add acc to vel
  // b > Add g to vel
  // c > Add pos to vel
  // d > 0 out acc
  // e > If the vel is negitive (Firework is falling)
  // f > then explode the firework
  // g > If the firework has exploded and there are no particles in the air
  // h > Mark the firework for deletion
  this.update = function() { // 13
    this.vel.add(this.acc); // 13.a
    this.vel.add(this.g) // 13.b
    this.pos.add(this.vel); // 13.c
    this.acc.mult(0); // 13.d

    if (this.vel.y > 0) { // 13.e
      this.explode(); // 13.f
    }

    if (this.exploded && this.particles.length == 0) { // 13.g
      this.del = true; // 13.h
    }
  }

  // 14. explode
  // a > if this firework has not exploded yet (We dont want to do this more than once)
  // b > do the following pCount times
  // c > Create a force that will send the partical flying out
  // d > create a particle
  // > this.pos so that the particles can start where the firework ended.
  // > this.size/2 is the new size of the partical
  // > the new random force we made
  // > this.color so that we know what color to draw the particals
  // e > apply that random for the particle
  // f > add that partical to the array list
  // g > set exploded to true (so that we dont do all of that again)
  this.explode = function() { // 14
    if (!this.exploded) { // a
      for (var i = 0; i < this.pCount; i++) { // b
        var force = createVector(random(-2, 2), random(-2, 2)); // c
        var particle = new Particle(this.pos, this.size / 2, this.color); // d
        particle.applyForce(force); // e
        this.particles[i] = particle; // f
      }
    }
    this.exploded = true; // g
  }

  // 15. show
  // > this function will draw the firework and it's particles
  // a > set the color mode to HSB (Hue, saturation, brightness)
  // > this makes our colors really saturated and bright
  // b > check to see if the firework has been exploded
  // > if the fire work has exploded then dont show it
  // c > noStroke removes black lines around our firework
  // d > fill our circle with the color
  // e > draw the firework at x,y,size,size
  // f > For every partical (Loop through this array backwards)
  // > Update the partical's location
  // > show the partical
  // > if the partical is marked for deletion
  // > Delete that partical
  this.show = function() { // 15
    colorMode(HSB); // a

    if (!this.exploded) { // b
      noStroke(); // c
      fill(this.color, 255, 255); // d
      ellipse(this.pos.x, this.pos.y, this.size, this.size); // e
    }

    for (var i = this.particles.length - 1; i >= 0; i--) { // f
      this.particles[i].update();
      this.particles[i].show();
      if (this.particles[i].del) {
        this.particles.splice(i, 1)
      }
    }
  }
}

// Mikian Musser
// Code Central
// Sprint: Advanced Programing Topics with P5.js
// https://www.youtube.com/watch?v=CKeyIbT3vXI

// 1. this is a partical object
// > it takes in a parent firework
// > posistion
// > size
// > color

// Vars
// 2. vector pos
// 3. size
// 4. color
// 5. vector vel
// 6. vector acc
// 7. vector g
// 8. bool del
// 9. life
// 10. lifeSpan

// Functions
// 11. Apply force
// 12. Update
// 13. show

function Particle(pos_, size_, color_) { // 1

  // Vars
  // 2. Create a vector with x and y as the passed values.
  // 3. set size to the passed value
  // 4. set the color to the passed value
  this.pos = createVector(pos_.x, pos_.y); // 2
  this.size = size_; // 3
  this.color = color_; // 4

  // 5. create a vector for the velocity
  // 6. create a vector for the acceleration
  // 7. create a vector for the force of gravity
  this.vel = createVector(0, 0); // 5
  this.acc = createVector(0, 0); // 6
  this.g = createVector(0, 0.01); // 7

  // 8. del is a bool to see if the partical can be deleted from the array.
  this.del = false; // 8

  // 9. this.life is how many frames this partical has been alive
  // 10. this.lifeSpan is how many frames this partical is allowed to live
  this.life = 0; // 9
  this.lifeSpan = 40; // 10

  // 11. Apply force
  // Apply force takes in a vector and adds it to the acceleration
  // a. Add the force to acc vector
  this.applyForce = function(f) { // 11
    this.acc.add(f); // a
  }

  // 12. Update
  // a > Add acc to vel
  // b > Add g to vel
  // c > Add pos to vel
  // d > 0 out acc
  // e > inc the life count
  // f > if this.life > this.lifeSpan then
  // g > set del for true
  this.update = function() { // 12
    this.vel.add(this.acc); // a
    this.vel.add(this.g); // b
    this.pos.add(this.vel); // c
    this.acc.mult(0); // d
    this.life++; // e
    if (this.life > this.lifeSpan) { // f
      this.del = true; // g
    }
  }

  // 13. Show
  // > this function will draw the partical
  // a > set the color mode to HSB (Hue, saturation, brightness)
  // b > get the alpha value using the map function (Make it look like they are fading)
  // c > fill with color and alpha
  // d > draw the partical
  this.show = function() { // 13
    colorMode(HSB) // a
    var alpha = map(this.life, 0, this.lifeSpan, 255, 50) // b
    fill(this.color, alpha, alpha) // c
    ellipse(this.pos.x, this.pos.y, this.size, this.size) // d
  }
}

// Mikian Musser
// Code Central
// Sprint: Advanced Programing Topics with P5.js
// https://www.youtube.com/watch?v=CKeyIbT3vXI
// https://p5js.org/reference/

// Purple Rain topics
// > Map function
// > Floor function
// > Applying force function
// > Acc, vel, pos vectors
// > Color Modes
// > Vectors
// > OOP
// > Arrays
// > Push and splice
// > Random
// > Update/Show functions
// > P5.js basics

// 1. Array to hold our fireworks
// 2. How many fireworks on the screen
// 3. On average, how big should this firework be?
var fireworks = []; // 1
var count = 50; // 2
var baseSize = 6; // 3

// 1. Setup runs before the draw loop starts
// 2. Make a canvas to draw on.
// 3. Create 'count' number of fireworks
// 4. Get a random color.
// 5. Get a random size based on the 'baseSize'
// 6. Create a new firework with the following arguments
//    x, y, size, color
//    x is random
//    y is just off the screen
//    size is the new random size
//    color is random
// 7. create a vector pointing up
//    the vector is at a random length (speed)
// 8. for each firework, apply that 'random' force
// 9. draw the starting background
function setup() { // 1
  createCanvas(500, 500); // 2

  for (var i = 0; i < count; i++) { // 3
    var color = random(255); // 4
    var newSize = random(baseSize - 2, baseSize + 2); // 5
    fireworks[i] = new Firework(random(width), height - newSize, newSize, color); // 6
    var force = createVector(0, random(-9, -5)); // 7
    fireworks[i].applyForce(force); // 8
  }

  background(25); // 9
}

// 1. Draw loop runs once each frame (30 times a second)
// 2. colorMode is set to take in RGB values (this is the normal setting)
// 3. Draw a black backgroun with alot of alpha. (this makes the trails)
//    Try using other alpha values and see what happens
//    Alpha - 255 = opaque, 0 = transparent
// 4. For each firework, do the follwing -
// a. Update the firework
// b. Show the firework
// 5. For each firework, do the following
// a. Check to see if the firework can be deleted
// b. if so, splice it from the array
// 6. if the number of fireworks is less than the 'count'
//    aka. some have been deleted -> Then we should make some new ones
// 7. Get a random color.
// 8. Get a random size based on the 'baseSize'
// 9. Create a new firework with the following arguments
//    x, y, size, color
//    x is random
//    y is just off the screen
//    size is the new random size
//    color is random
// 10. create a vector pointing up
//    the vector is at a random length (speed)
// 11. for each firework, apply that 'random' force
// 12. push that new firework to the array

function draw() { // 1
  colorMode(RGB) // 2
  background(0, 25); // 3

  for (var i = 0; i < fireworks.length; i++) { // 4
    fireworks[i].update(); // a
    fireworks[i].show(); // b
  }

  for (var i = 0; i < fireworks.length; i++) { // 5
    if (fireworks[i].del) { // a
      fireworks.splice(i, 1) // b
    }
  }

  if (fireworks.length < count) { // 6
    var color = random(255); // 7
    var newSize = random(baseSize - 2, baseSize + 2); // 8
    var fw = new Firework(random(width), height - newSize, newSize, color); // 9
    var force = createVector(0, random(-9, -5)); // 10
    fw.applyForce(force); // 11
    fireworks.push(fw) // 12
  }
}

// NeuralNetwork visualizer

const LEVELS = 3;

class nnv {
  constructor(brain){
    this.inputSize = brain.input_nodes;
    this.hiddenSize = brain.hidden_nodes;
    this.outputSize = brain.output_nodes;
    this.IH_weights = brain.weights_ih.data
    this.HO_weights = brain.weights_ho.data
    this.hidden_Bias = brain.bias_h.data
    this.output_Bias = brain.bias_o.data
    this.hidden_values = brain.HiddenValues.data
    this.output_values = brain.OuputValues.data
    this.input_values = brain.InputValues;
    this.NodeSizeBias = 24;
    this.SizeMax = 50;
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.x = 0;
    this.y = 0;
    this.xSize = 0;
    this.ySize = 0;
    this.YIntervalI = 0;
    this.YIntervalH = 0;
    this.YIntervalO = 0;
    this.XInterval = 0;
    this.YOffset = 0;
    this.XOffset = 0;
  }

  setValues(x, y, xSize, ySize, XOffset, YOffset){
    this.x = x;
    this.y = y;
    this.xSize = xSize;
    this.ySize = ySize;
    this.XOffset = XOffset;
    this.YOffset = YOffset;
    this.XInterval = this.CalcuateXInterval(this.xSize, LEVELS);
    this.YIntervalI = this.CalcuateYInterval(this.ySize, this.inputSize);
    this.YIntervalH = this.CalcuateYInterval(this.ySize, this.hiddenSize);
    this.YIntervalO = this.CalcuateYInterval(this.ySize, this.outputSize);
  }

  draw(){
    if(this.input_values){
      noStroke();
      fill(200);
      rectMode(CENTER);
      rect(this.x,this.y,this.xSize,this.ySize);
      this.drawNodes();
      this.drawLinks();
    }
  }

  drawNodes(){
    let size = this.NodeSizeBias;
    for(let i = 0; i < this.inputSize; i++){
      this.color = this.getColor(this.input_values[i],false);
      fill(this.color);
      let xValue = this.x - this.xSize/2 + 0 * this.XInterval + this.XInterval/2 + this.XOffset;
      let yValue = this.YOffset + i * this.YIntervalI + this.YIntervalI/2;
      ellipse(xValue, yValue, size, size);
    }
    for(let i = 0; i < this.hiddenSize; i++){
      this.color = this.getColor(this.hidden_values[i],false);
      fill(this.color);
      size = this.getSize(this.hidden_Bias[i][0]);
      let xValue = this.x - this.xSize/2 + 1 * this.XInterval + this.XInterval/2 + this.XOffset;
      let yValue = this.YOffset + i * this.YIntervalH + this.YIntervalH/2;
      ellipse(xValue, yValue, size, size);
    }
    for(let i = 0; i < this.outputSize; i++){
      this.color = this.getColor(this.output_values[i],true);
      fill(this.color);
      size = this.getSize(this.output_Bias[i][0]);
      let xValue = this.x - this.xSize/2 + 2 * this.XInterval + this.XInterval/2 + this.XOffset;
      let yValue = this.YOffset + i * this.YIntervalO + this.YIntervalO/2;
      ellipse(xValue, yValue, size, size);
    }
  }

  drawLinks(){
    for(let i = 0; i < this.hiddenSize; i++){
      for(let j = 0; j < this.inputSize; j++){
        let x = this.input_values[i];
        let weight = this.IH_weights[i][j];
        let pSum = x * weight;
        if(abs(pSum) >= 1/this.inputSize){
          this.drawConnection(i,j,1,2,this.IH_weights);
        }
      }
    }

    for(let i = 0; i < this.outputSize; i++){
      for(let j = 0; j < this.hiddenSize; j++){
        let x = this.hidden_values[i];
        let weight = this.HO_weights[i][j];
        let pSum = x * weight;
        if(abs(pSum) >= 1/(this.hiddenSize+1)){
          this.drawConnection(i,j,2,3,this.HO_weights);
        }
      }
    }
  }

  drawConnection(i,j,layerX,layerY,weights){
    let x1 = 0;
    let y1 = 0;
    let x2 = 0;
    let y2 = 0;

    if(layerX == 1){
      x1 = this.x - this.xSize/2 + 0 * this.XInterval + this.XInterval/2 + this.XOffset;
      y1 = this.YOffset + j * this.YIntervalI + this.YIntervalI/2;
    }
    if(layerX == 2){
      x1 = this.x - this.xSize/2 + 1 * this.XInterval + this.XInterval/2 + this.XOffset;
      y1 = this.YOffset + j * this.YIntervalH + this.YIntervalH/2;
    }
    if(layerX == 3){
      x1 = this.x - this.xSize/2 + 2 * this.XInterval + this.XInterval/2 + this.XOffset;
      y1 = this.YOffset + j * this.YIntervalO + this.YIntervalO/2;
    }
    if(layerY == 1){
      x2 = this.x - this.xSize/2 + 0 * this.XInterval + this.XInterval/2 + this.XOffset;
      y2 = this.YOffset + i * this.YIntervalI + this.YIntervalI/2;
    }
    if(layerY == 2){
      x2 = this.x - this.xSize/2 + 1 * this.XInterval + this.XInterval/2 + this.XOffset;
      y2 = this.YOffset + i * this.YIntervalH + this.YIntervalH/2;
    }
    if(layerY == 3){
      x2 = this.x - this.xSize/2 + 2 * this.XInterval + this.XInterval/2 + this.XOffset;
      y2 = this.YOffset + i * this.YIntervalO + this.YIntervalO/2;
    }

    stroke(0);
    strokeWeight(abs(weights[i][j]) * 2);
    line(x1,y1,x2,y2);
  }

  getColor(val, output){
    let r = 0;
    let g = 0;
    let b = 0;
    if(output){
      let max = this.getHighestOutput();
      if(val == max){
        r = 0;
        g = 255;
        b = 0;
      } else {
        r = 255;
        g = 0;
        b = 0;
      }
    } else {
      if(val <= .5){
        r = 255;
        g = val * 2 * 255;
        b = 0;
      } else {
        r = (val - .5) * 2 * 255;
        g = 255;
        b = 0;
      }
    }
    let color = [3]
    color[0] = r;
    color[1] = g;
    color[2] = b;
    return color;
  }

  CalcuateYInterval(Height, Size){
    let UsableSpace = Height - 2 * this.YOffset;
    let Interval = UsableSpace / Size;
    return floor(Interval);
  }

  CalcuateXInterval(Width, Size){
    let UsableSpace = Width - 2 * this.XOffset;
    let Interval = UsableSpace / Size;
    return floor(Interval);
  }

  getSize(value){
    value = value * this.SizeMax;
    if(value <= 10) value = this.NodeSizeBias;
    return value;
  }

  getHighestOutput(){
    let max = 0;
    for(let j = 0; j < this.outputSize; j++){
      if(this.output_values[j] >= this.output_values[max]) max = j;
    }
    return this.output_values[max];
  }
}
// let m = new Matrix(3,2);


class Matrix {
constructor(rows, cols) {
  this.rows = rows;
  this.cols = cols;
  this.data = Array(this.rows).fill().map(() => Array(this.cols).fill(0));
}

copy() {
  let m = new Matrix(this.rows, this.cols);
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      m.data[i][j] = this.data[i][j];
    }
  }
  return m;
}

static fromArray(arr) {
  return new Matrix(arr.length, 1).map((e, i) => arr[i]);
}

static subtract(a, b) {
  if (a.rows !== b.rows || a.cols !== b.cols) {
    console.log('Columns and Rows of A must match Columns and Rows of B.');
    return;
  }

  // Return a new Matrix a-b
  return new Matrix(a.rows, a.cols)
    .map((_, i, j) => a.data[i][j] - b.data[i][j]);
}

toArray() {
  let arr = [];
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      arr.push(this.data[i][j]);
    }
  }
  return arr;
}

randomize() {
  return this.map(e => Math.random() * 2 - 1);
}

add(n) {
  if (n instanceof Matrix) {
    if (this.rows !== n.rows || this.cols !== n.cols) {
      console.log('Columns and Rows of A must match Columns and Rows of B.');
      return;
    }
    return this.map((e, i, j) => e + n.data[i][j]);
  } else {
    return this.map(e => e + n);
  }
}

static transpose(matrix) {
  return new Matrix(matrix.cols, matrix.rows)
    .map((_, i, j) => matrix.data[j][i]);
}

static multiply(a, b) {
  // Matrix product
  if (a.cols !== b.rows) {
    console.log('Columns of A must match rows of B.')
    return;
  }

  return new Matrix(a.rows, b.cols)
    .map((e, i, j) => {
      // Dot product of values in col
      let sum = 0;
      for (let k = 0; k < a.cols; k++) {
        sum += a.data[i][k] * b.data[k][j];
      }
      return sum;
    });
}

multiply(n) {
  if (n instanceof Matrix) {
    if (this.rows !== n.rows || this.cols !== n.cols) {
      console.log('Columns and Rows of A must match Columns and Rows of B.');
      return;
    }

    // hadamard product
    return this.map((e, i, j) => e * n.data[i][j]);
  } else {
    // Scalar product
    return this.map(e => e * n);
  }
}

map(func) {
  // Apply a function to every element of matrix
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      let val = this.data[i][j];
      this.data[i][j] = func(val, i, j);
    }
  }
  return this;
}

static map(matrix, func) {
  // Apply a function to every element of matrix
  return new Matrix(matrix.rows, matrix.cols)
    .map((e, i, j) => func(matrix.data[i][j], i, j));
}

print() {
  console.table(this.data);
  return this;
}

serialize() {
  return JSON.stringify(this);
}

static deserialize(data) {
  if (typeof data == 'string') {
    data = JSON.parse(data);
  }
  let matrix = new Matrix(data.rows, data.cols);
  matrix.data = data.data;
  return matrix;
}
}

if (typeof module !== 'undefined') {
module.exports = Matrix;
}
`