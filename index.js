// ive got color output and its numerical value
// a grid and its range value
// a switch to randomized colors
// selective eraser
// eraser that wipes the whole grid

// So I need to have in mind the following: setting the color, setting the mode and making the colors random, setting the size of grid
// Later on I need to have in mind: deleting squares on click and deleting the whole grid.


const rangeSlider = document.querySelector ('#range');
const gridContainer = document.querySelector('.gridContainer');

const colorButton = document.getElementById('color');
const rainbowButton = document.getElementById('rainbow');

const toggleGrid = document.querySelector('input[type=checkbox]');

const eraserButton = document.getElementById('eraser');
const nukeButton = document.getElementById('total_erase');

const textSizePanel = document.querySelector('.textSizePanel');

gridContainer.addEventListener('mousedown', () => {      
    colorTrigger = true;  
});   

gridContainer.addEventListener('mouseup', () => {      
    colorTrigger = false;  
});


function draw(color){                                           //draw function with current color
    let coloredRowElements = document.querySelectorAll('.row'); //Create list of grid elements
    
    for (let coloredRowElement of coloredRowElements){
        
        coloredRowElement.addEventListener('mousedown', () => {
            coloredRowElement.style.backgroundColor = color;             
        })  
        
        coloredRowElement.addEventListener('mousemove', () => {
            if (colorTrigger)
            coloredRowElement.style.backgroundColor = color;                 
        })
    }            
}


function drawGrid(flag){                                         //switch grid function  
    let rowElements = document.querySelectorAll('.row'); //Create list of grid elements
    
    for (let rowElement of rowElements){
            rowElement.style.borderWidth = flag;                       
    }            
}

let size;
let sizePrev;

function drawSquare(){                  // draw grid function(column-direction flexbox of row-direction flexboxes) 
    size = Number(document.getElementById("range").value);
    sizePrev = size;                    // Value for field cleaner
    
    for (let j=1; j <= size; j++){
        const column = document.createElement('div');
        column.classList.add('column');
        gridContainer.appendChild(column);   
        
        for (let i=1; i <= size ; i++) {
            const rowElement = document.createElement('div');
            rowElement.classList.toggle('row');  
            column.appendChild(rowElement);
        }
    }
    colorButton = document.getElementById("color").value;
    draw(color);
}

// drawSquare() 


let flag;

toggleGrid.addEventListener('change', function (e) {            //switch grid button
    localStorage.status = e.target.checked ? flag = "0.1px" : flag = "0";
    drawGrid(flag);
  });

function clearField(){
    for (let j=1; j <= sizePrev; j++){
        const column = document.querySelector('.column')
        gridContainer.removeChild(column);
    }
}

nukeButton.addEventListener('click', () => {             //field clear button
    clearField();
    drawSquare();
    drawGrid(flag);    
});  




rangeSlider.addEventListener('change', () => {              //change grid size range
    let sizeVal = document.getElementById("range").value;
    textSizePanel.textContent = sizeVal + '  x  ' + sizeVal;
    size = Number(document.getElementById("range").value);
    clearField();
    drawSquare();
    drawGrid(flag);   
});





colorButton.addEventListener('change', () => {    //change color picker
    color = document.getElementById('color').value;     
    draw(color);
    gridContainer.style.boxShadow =`0 0 30px ${color}`;
    gridContainer.style.borderColor = color;  
} )





















// let rainbowPen = false;
// let eraser = false;
// let grid = false;

// let mouseDown = false;
// gridContainer.onmousedown = () =>mouseDown = true;
// document.onmouseup = () => mouseDown = false;


// rainbowButton.onclick  = () => {
//     if (!rainbowPen){
//         rainbowPen = true
//         eraser = false
//         // rainbowButton.classList.add('btnOn')
//         // eraserButton.classList.add('btnOn')
//     }else {
//         rainbowPen = false
//         // rainbowButton.classList.remove('btnOn')

//     };
// };


// eraserButton.onclick  = () => {
//     if (!eraser){
//         eraser = true
//         rainbowPen = false
//         // rainbowButton.classList.add('btnOn')
//         // eraserButton.classList.add('btnOn')
//     }else {
//         eraser = false
//         // rainbowButton.classList.remove('btnOn')

//     };
// };

// eraserButton.onclick = () => {
//     deleteGrid()
//     createGrid(gridSize)

// };


// toggleGrid.onclick = ()=>{
//     const cells = Array.from(document.getElementsByClassName('cell'))

//     cells.forEach(cell =>{
//         cell.classList.toggle('CellGrid')
//     });
    
//     if (Grid) Grid=false
//     else Grid=true

// };

// function createGrid (size){
//     gridContainer.style.gridTemplateColumns= `repeat(${size}, 1fr)`
//     gridContainer.style.gridTemplateRows= `repeat(${size}, 1fr)`

//     for (let i=0; i< size*size; i++){
//         const cell = document.createElement('div');
//         cell.classList.add('cell','clean');
//         if (Grid) cell.classList.add('CellGrid')
//         cell.addEventListener('mouseover' , changeCellColour);//so you can drag mouse across grid
//         cell.addEventListener('click' , changeCellColour); //so you can click on one square
//         cell.style.background = `${CellBackgroundColour}`
//         cell.style.border = 1

//         gridContainer.appendChild(cell)
//     };
// };


























































// setGrid ()
// let divSquares = document.querySelectorAll('.square')

// function setGrid () {
//     createGrid(gridSize)
//     displayGridSize()


//     colorButton.classList.add('active')
//     nukeButton.addEventListener('click', clearGrid)
//     gridSwitch.addEventListener('change', toggleGridLines)
//     rangeSlider.addEventListener('input', displayGridSize)
//     rangeSlider.addEventListener('change', changeGridSize)
// }


// function createGrid(size) {
//     document.documentElement.style.setProperty('--grid-size', size)

//     grid.addEventLIstener('mousedown', function (e) {
//         e.preventDefault()
// })



// for (let i = 0; i < size * size; i++) {
//     const square = document.createElement('div')
//     square.classList.add('square')
//     grid.appendChild(square)

//     square.addEventListener('mouseover', changeColor)
//     square.addEventListener('mousedown', changeColor)

//     if (gridLines) {
//         square.classList.add('grid-lines')
//     }
// }
// }


// function changeGridSize() {
//     for (let square of divSquares) {
//         square.remove()
//     }
//     gridSize = rangeSlider.value
//     createGrid(gridSize)
//     divSquares = document.querySelectorAll('.square')
// }

// function displayGridSize() {
//     const gridSizeDisplay = document.querySelector('input [type ="range"]')
//     gridSizeDisplay.textContent = `Grid Size: ${rangeSlider.value} x ${rangeSlider.value}`
// }






















































































// let gridSize = 16;

// function createGrid(size) {
//   for (let i = 1; i <= size * size; i++) {
//     const cell = document.createElement("div");
//     cell.classList.add("cell");
//     cell.style.width = `calc(100% / ${size})`;
//     cell.style.height = `calc(100% / ${size})`;
//     cell.style.border = "1px solid #e2e2e2";

//     board.appendChild(cell);
//   }
// }





 

// const changeRange = document.getElementById('range');
// const textInsidePanel = document.querySelector('.textInsidePanel');

// changeRange.addEventListener('change', () => {              //change grid size range
//     let sizeVal = document.getElementById("range").value;
//     textInsidePanel.textContent = sizeVal + '  x  ' + sizeVal;
//     size = Number(document.getElementById("range").value);
//     // clearField();
//     // drawSquare();
//     // drawGrid(flag);   
// });












// checkBox.addEventListener('change', function (e) {            //switch grid button
//   localStorage.status = e.target.checked ? flag = "0.1px" : flag = "0";
//   drawGrid(flag);
// });


// const clearButton = document.querySelector('.button_clear');


// const checkBox = document.querySelector('input[type=checkbox]'); 

// const grid_size_numbers = document.getElementById('textInsidePanel')
// const grid_range_slider = document.getElementById('range')


// const grid_size_numbers = document.getElementById('textInsidePanel')
// const grid_range_slider = document.getElementById('range')
// const color_button = document.getElementById('color')
// const rainbow_switch = document.getElementById('myCheckbox')
// const eraser_button = document.getElementById('eraser')
// const nuke_button = document.getElementById('total_erase')
// const grid = document.getElementById('grid')


// const DEFAULT_COLOR = '#333333'
// const DEFAULT_MODE = 'color'
// const DEFAULT_SIZE = 16

// let currentColor = DEFAULT_COLOR
// let currentMode = DEFAULT_MODE
// let currentSize = DEFAULT_SIZE

// function setCurrentColor(newColor) {
//     currentColor = newColor
//   }
  
//   function setCurrentMode(newMode) {
//     activateButton(newMode)
//     currentMode = newMode
//   }
  
//   function setCurrentSize(newSize) {
//     currentSize = newSize
//   }

//   color_button.oninput = (e) => setCurrentColor(e.target.value)
//   rainbow_switch.onclick = () => setCurrentMode('rainbow')
//   eraser_button.onclick = () => setCurrentMode('eraser')
//   nuke_button.onclick = () => reloadGrid()
//   grid_size_numbers.onmousemove = (e) => updateSizeValue(e.target.value)
//   grid_range_slider.onchange = (e) => changeSize(e.target.value)


//   function changeSize(value) {
//     setCurrentSize(value)
//     updateSizeValue(value)
//     reloadGrid()
//   }
  
//   function updateSizeValue(value) {
//     sizeValue.innerHTML = `${value} x ${value}`
//   }
  
//   function reloadGrid() {
//     clearGrid()
//     setupGrid(currentSize)
//   }
  
//   function clearGrid() {
//     grid.innerHTML = ''
//   }


//   function setupGrid(size) {
//     grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
//     grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  
//     for (let i = 0; i < size * size; i++) {
//       const gridElement = document.createElement('div')
//       gridElement.classList.add('grid-element')
//       gridElement.addEventListener('mouseover', changeColor)
//       gridElement.addEventListener('mousedown', changeColor)
//       grid.appendChild(gridElement)
//     }
//   }



//   function changeColor(e) {
//     if (e.type === 'mouseover' && !mouseDown) return
//     if (currentMode === 'rainbow') {
//       const randomR = Math.floor(Math.random() * 256)
//       const randomG = Math.floor(Math.random() * 256)
//       const randomB = Math.floor(Math.random() * 256)
//       e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
//     } else if (currentMode === 'color') {
//       e.target.style.backgroundColor = currentColor
//     } else if (currentMode === 'eraser') {
//       e.target.style.backgroundColor = '#fefefe'
//     }
//   }



// function activateButton(newMode) {
//   if (currentMode === 'rainbow') {
//     rainbowBtn.classList.remove('active')
//   } else if (currentMode === 'color') {
//     colorBtn.classList.remove('active')
//   } else if (currentMode === 'eraser') {
//     eraserBtn.classList.remove('active')
//   }

//   if (newMode === 'rainbow') {
//     rainbowBtn.classList.add('active')
//   } else if (newMode === 'color') {
//     colorBtn.classList.add('active')
//   } else if (newMode === 'eraser') {
//     eraserBtn.classList.add('active')
//   }
// }

// window.onload = () => {
//   setupGrid(DEFAULT_SIZE)
//   activateButton(DEFAULT_MODE)
// }