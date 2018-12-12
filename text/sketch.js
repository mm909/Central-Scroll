var font;
var vehicles = [];
let words = [];
let text = false;
let textSize = 225;
let sizeChange = 1;

function runScript(e) {
    if (e.keyCode == 13) {
        var tb = document.getElementById("sizeInput");
        redo(tb.value);
    }
}

function textShow() {
  text = !text;
}

function preload() {
  font = loadFont('text/AvenirNextLTPro-Demi.otf');
}

function setup() {
  console.log("Setting up");
  swapingCirclesInt = setInterval(next, 3000);
  var canvas = createCanvas(windowWidth / 2, windowHeight);
  canvas.parent("canvasContainer")

  words.push(font.textToPoints('Code', 10, 500, textSize, {
    sampleFactor: 0.1
  }))
  words.push(font.textToPoints('{Central}', 10, 500, textSize, {
    sampleFactor: 0.1
  }))
  words.push(font.textToPoints('Student', 10, 500, textSize, {
    sampleFactor: 0.1
  }))
  words.push(font.textToPoints('Showcase', 10, 500, textSize-25, {
    sampleFactor: 0.1
  }))
  words.push(font.textToPoints('Jan 12', 10, 500, textSize, {
    sampleFactor: 0.1
  }))
  words.push(font.textToPoints('/Switch/', 10, 500, textSize, {
    sampleFactor: 0.1
  }))

  for (var i = 0; i < words[0].length; i++) {
    var pt = words[0][i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }
  for (var i = 0; i < words.length; i++) {
    if (vehicles.length < words[i].length) {
      let count = words[i].length - vehicles.length;
      for (var j = 0; j < count; j++) {
        var vehicle = new Vehicle(random(width), random(500 + 100, height - 25));
        vehicles.push(vehicle);
      }
    }
  }

}

let index = 0;

function draw() {
  colorMode(RGB)
  background(47, 54, 64);
  clear();
  if (text)
    for (var i = 0; i < vehicles.length; i++) {
      var v = vehicles[i];
      v.behaviors();
      v.update();
      v.show();
    }
}

function mousePressed() {
  next();
}

function next() {
  index++;
  for (var i = 0; i < words[index % words.length].length; i++) {
    vehicles[i].target.x = words[index % words.length][i].x
    vehicles[i].target.y = words[index % words.length][i].y
  }

  if (words[index % words.length].length < words[(index - 1) % words.length].length) {
    console.log(words[index % words.length].length);
    console.log(words[(index - 1) % words.length].length);
    for (var i = words[index % words.length].length; i < words[(index - 1) % words.length].length; i++) {
      vehicles[i].target.x = random(width)
      vehicles[i].target.y = random(500 + 100, height - 25)
    }
  }

}

function redo(x) {
  textSize += (x * sizeChange)
  words = [];
  words.push(font.textToPoints('Code', 10, 500, textSize, {
    sampleFactor: 0.1
  }))
  words.push(font.textToPoints('{Central}', 10, 500, textSize, {
    sampleFactor: 0.1
  }))
  words.push(font.textToPoints('Student', 10, 500, textSize, {
    sampleFactor: 0.1
  }))
  words.push(font.textToPoints('Showcase', 10, 500, textSize-25, {
    sampleFactor: 0.1
  }))
  words.push(font.textToPoints('Jan 12', 10, 500, textSize, {
    sampleFactor: 0.1
  }))
  words.push(font.textToPoints('/Switch/', 10, 500, textSize, {
    sampleFactor: 0.1
  }))
  vehicles = [];
  for (var i = 0; i < words[0].length; i++) {
    var pt = words[0][i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }
  for (var i = 0; i < words.length; i++) {
    if (vehicles.length < words[i].length) {
      let count = words[i].length - vehicles.length;
      for (var j = 0; j < count; j++) {
        var vehicle = new Vehicle(random(width), random(500 + 100, height - 25));
        vehicles.push(vehicle);
      }
    }
  }
}
