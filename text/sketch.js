var font;
var vehicles = [];
let words = [];
let text = false;
let textSize = 190;
let moveSpeed = 0.10;
let sizeChange = 1;
let nexting = false;
let strings = [
  'Code',
  '{Central}',
  'Student',
  'Showcase',
  'Jan 12',
  '/Switch/'
]

$(document).ready(function() {
  document.getElementById("sizeInput").value = textSize
  document.getElementById("MoveSpeed").value = moveSpeed
});

function setAnimation(x) {
  if (x == "Letter") {
    animationOpt = 1
  } else if (x == "Word") {
    animationOpt = 2
  } else if (x == "None") {
    animationOpt = 3
  }
}

function setDot(x) {
  if (x == "Full") {
    dotOpt = 1
  } else if (x == "Half") {
    dotOpt = 2
  } else if (x == "Vertical") {
    dotOpt = 3
  } else if (x == "Hide") {
    dotOpt = 4
  }
}

function runScript(e) {
  if (e.keyCode == 13) {
    var t = document.getElementById("sizeInput");
    redo(t.value);
  }
}

function setMoveSpeed(e) {
  if (e.keyCode == 13) {
    moveSpeed = document.getElementById("MoveSpeed").value;
  }
}

function textShow() {
  text = !text;
}

function preload() {
  font = loadFont('text/AvenirNextLTPro-Demi.otf');
}
let dotOpt = 2;

function setup() {
  swapingCirclesInt = setInterval(next, 5000);
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvasContainer")

  for (var i = 0; i < strings.length; i++) {
    words.push(font.textToPoints(strings[i], (windowWidth / 2) + 10, 500, textSize, {
      sampleFactor: 0.1
    }))
  }

  // words.push(font.textToPoints('Code', 10, 500, textSize, {
  //   sampleFactor: 0.1
  // }))
  // words.push(font.textToPoints('{Central}', 10, 500, textSize, {
  //   sampleFactor: 0.1
  // }))
  // words.push(font.textToPoints('Student', 10, 500, textSize, {
  //   sampleFactor: 0.1
  // }))
  // words.push(font.textToPoints('Showcase', 10, 500, textSize - 25, {
  //   sampleFactor: 0.1
  // }))
  // words.push(font.textToPoints('Jan 12', 10, 500, textSize, {
  //   sampleFactor: 0.1
  // }))
  // words.push(font.textToPoints('/Switch/', 10, 500, textSize, {
  //   sampleFactor: 0.1
  // }))

  for (var i = 0; i < words[0].length; i++) {
    var pt = words[0][i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }
  for (var i = 0; i < words.length; i++) {
    if (vehicles.length < words[i].length) {
      let count = words[i].length - vehicles.length;
      for (var j = 0; j < count; j++) {
        let tempx = 0;
        let tempy = 0;
        if (dotOpt == 1) {
          tempx = random(width / 2, width)
        } else if (!dotOpt) {
          tempx = random(width)
        }
        tempy = random(500 + 100, height - 25)
        var vehicle = new Vehicle(tempx, tempy);
        vehicles.push(vehicle);
      }
    }
  }

}

let index = 0;
let animationOpt = 1;

function draw() {
  colorMode(RGB)
  background(47, 54, 64);
  clear();
  if (text) {
    if (animationOpt == 1) {
      if (random(1) < moveSpeed) moveLetter();
    } else if (animationOpt == 2) {
      if (random(1) < moveSpeed) moveWord();
    } else if (animationOpt == 3) {

    }
    for (var i = 0; i < vehicles.length; i++) {
      var v = vehicles[i];
      v.behaviors();
      v.update();
      v.show();
    }
  }
}

function mousePressed() {
  next();
}

function next() {
  index++;
  let lx = 0;
  let ly = 0;
  for (var i = 0; i < words[index % words.length].length; i++) {
    vehicles[i].target.x = words[index % words.length][i].x
    vehicles[i].target.y = words[index % words.length][i].y
    lx = vehicles[i].target.x
    ly = vehicles[i].target.y
  }

  if (words[index % words.length].length < words[(index - 1) % words.length].length) {
    for (var i = words[index % words.length].length; i < words[(index - 1) % words.length].length; i++) {
      switch (dotOpt) {
        case 1:
          vehicles[i].target.x = random(width)
          vehicles[i].target.y = random(500 + 100, height - 25)
          break;
        case 2:
          vehicles[i].target.x = random(width / 2, width)
          vehicles[i].target.y = random(500 + 100, height - 25)
          break;
        case 3:
          vehicles[i].target.y = random(500 + 100, height - 25)
          break;
        case 4:
          vehicles[i].target.x = lx
          vehicles[i].target.y = ly
          break;
        default:
          console.log("Error");
      }
      // if (opt == 0) {
      //   vehicles[i].target.x = random(width)
      //   vehicles[i].target.y = random(500 + 100, height - 25)
      // } else if (opt == 1) {
      //   vehicles[i].target.x = random(width / 2, width)
      //   vehicles[i].target.y = random(500 + 100, height - 25)
      // } else if (opt == 2) {
      //   vehicles[i].target.y = random(500 + 100, height - 25)
      // } else if (opt == 3) {
      //   vehicles[i].target.x = lx
      //   vehicles[i].target.y = ly
      // }
    }
  }
}

function redo(x, e) {
  if (e) {
    e.preventDefault();
  }
  // console.log(x);
  textSize = x;
  words = [];
  for (var i = 0; i < strings.length; i++) {
    words.push(font.textToPoints(strings[i], (windowWidth / 2) + 10, 500, textSize, {
      sampleFactor: 0.1
    }))
  }
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
  document.getElementById("sizeInput").value = textSize
}

function moveWord() {
  let temp = vehicles[0].target
  for (var j = 0; j < words[index % words.length].length - 1; j++) {
    vehicles[j].target = vehicles[j + 1].target;
  }
  vehicles[words[index % words.length].length - 1].target = temp
}

function moveLetter() {
  let currentWord = strings[index % strings.length];
  let currentWordArray = words[index % words.length].length;
  let count = 0;
  for (var i = 0; i < currentWord.length; i++) {
    let currentLetter = (font.textToPoints(currentWord[i], 0, 0, textSize, {
      sampleFactor: 0.1
    }))
    if (currentLetter.length != 0) {
      let temp = vehicles[count].target
      for (var j = count; j < count + currentLetter.length - 1; j++) {
        vehicles[j].target = vehicles[j + 1].target;
      }
      vehicles[count + currentLetter.length - 1].target = temp
      count += currentLetter.length;
    }

  }
  // let currentLetter = (font.textToPoints(currentWord[0], 10, 500, textSize, {
  //   sampleFactor: 0.1
  // }))
  // let temp = vehicles[0].target
  // for (var j = 0; j < currentLetter.length - 1; j++) {
  //   vehicles[j].target = vehicles[j + 1].target;
  // }
  // vehicles[currentLetter.length - 1].target = temp
}