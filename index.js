let grid = createGrid();
let palette = document.getElementsByClassName('colour');
let currentColor = 'white';
for (let color of palette) {
  color.addEventListener('click', function() {
    currentColor = color.style.backgroundColor;
  });
}

grid.addEventListener('mousedown', createEvents);
grid.addEventListener('mouseup', deleteEvents);

function createPixels(){
  let pixels = document.getElementsByClassName('box');
  for (let pix of pixels){
    pix.style.width = screen.width/56;
    pix.style.height = screen.height/30;
  }
}
function createGrid(){
  const gridRoot = document.getElementById('grid');

  for (let i = 0; i < screen.width/64; i++) {

    var lines = document.createElement('div');
    lines.className += 'line';
    gridRoot.appendChild(lines);

    for (let j = 0; j < screen.height/56; j++) {

      var box = document.createElement('div');
      box.className += 'box';
      lines.appendChild(box);
    }
  }
  return gridRoot;
}

createPixels();

function createEvents(){
  let pixels = document.getElementsByClassName('box');
  for (let pix of pixels){
    pix.addEventListener('mouseenter',changeColor);
    pix.addEventListener('mousedown',changeColor)
  }
}

function deleteEvents(){
  let pixels = document.getElementsByClassName('box');
  for(let pix of pixels){
    pix.removeEventListener('mouseenter',changeColor);
  }
}

function changeColor(){
  this.style.backgroundColor = currentColor;
}

