function updateStrings() {
  let text = document.getElementById("textContents").value

  text = text.split('\n')
  for (var i = 0; i < text.length; i++) {
    if (text[i] == "") text.splice(i, 1)
  }

  words = []; // Replace with function
  for (var i = 0; i < text.length; i++) {
    words.push(font.textToPoints(text[i], (windowWidth / 2) + 10, 500, textSize, {
      sampleFactor: 0.1
    }))
  }

  vehicles = [] // Replace with function
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

        if (dotOpt == 2) {
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


$(document).ready(function() {
  let t = document.getElementById("textContents").value
  t = t.split('\n')
  console.log(t);
  strings = t
  for (var i = 0; i < strings.length; i++) {
    if (strings[i] == "") strings.splice(i, 1)
  }

  document.getElementById("sizeInput").value = textSize
  document.getElementById("MoveSpeed").value = moveSpeed
});