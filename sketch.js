const canvasWidth = 550;
const canvasHeight = 600;
const gridSize = 10;
const shipCoords = [[3,5], [6,7], [8,8], [4,5], [1,9], [3,6]];
const colorFills = [];

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    textSize(18);
    background(245,245,220);
    for(var i = 0; i < gridSize; i++) {
        var newColumn = [];
        for (var j = 0; j < gridSize; j++) {
            newColumn[j] = "white";
        }
        colorFills.push(newColumn);
    }
  }
   
function draw() {
    strokeWeight(1)
    stroke(0,0,255);
    for(i = 0; i < gridSize; i++) {
        for(j = 0; j < gridSize; j++) {
            
            rect((i*canvasWidth/gridSize), (j*canvasHeight/gridSize), 50, 50);
      }
    }
}

function mouseClicked() {
    let x = Math.floor(mouseX/(canvasWidth/gridSize));
    let y = Math.floor(mouseY/(canvasWidth/gridSize));
    for (let i = 0; i < shipCoords.length; i++) {
        if (colorFills[x][y] == "white") {
            colorFills[x][y] = "black";
            rect((x*canvasWidth/gridSize), (y*canvasHeight/gridSize), 50,50);
        }
        else if (colorFills[x][y] == "black") {
            colorFills[x][y] = "white";
            rect((x*canvasWidth/gridSize), (y*canvasHeight/gridSize), 50, 50);
        }
    }
}