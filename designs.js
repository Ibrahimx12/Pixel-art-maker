var sizePicker = document.getElementById('sizePicker');
// Making a grid with "Grid Height" and "Grid Width" inputs!
sizePicker.addEventListener('submit', function respondToSubmit(event) {
  var height;
  var width;
  // Preventing the default action from occurring!
  event.preventDefault();
  height = document.getElementById('inputHeight').value;
  width = document.getElementById('inputWidth').value;
  makeGrid(height, width);
});

// A function for making a grid!
function makeGrid(rows, cells) {
  const pixelCanvas = document.getElementById('pixelCanvas');
  // Getting rid of previous tables!
  while (pixelCanvas.firstChild) {
    pixelCanvas.removeChild(pixelCanvas.firstChild);
  }
  var row;
  var cell;
   // Making rows!
   for (var i = 0; i < rows; i++) {
     row = pixelCanvas.insertRow(i);
     // Making cells!
     for (var j = 0; j < cells; j++) {
       cell = row.insertCell(j);
     }
   }
   // To color or remove color!
   pixelsAddEventListener();
}

// Click To Color, Double click to remove color!
function pixelsAddEventListener() {
  const colorPicker = document.getElementById('colorPicker');
  var pixels = document.getElementsByTagName('td');
  for (var i = 0; i < pixels.length; i++) {
    // Click to color!
    pixels[i].addEventListener("click", function (event) {
			var clickPixel = event.target;
			clickPixel.style.backgroundColor = colorPicker.value;
		});
    // Double click to remove color!
    pixels[i].addEventListener("dblclick", function (event) {
			var dblClickPixel = event.target;
			dblClickPixel.style.backgroundColor = "";
		});
  }
}
// Made in SaudiArabia!
