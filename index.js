// ive got color output and its numerical value
// a grid and its range value
// a switch to randomized colors
// selective eraser
// eraser that wipes the whole grid

// So I need to have in mind the following: setting the color, setting the mode and making the colors random, setting the size of grid
// Later on I need to have in mind: deleting squares on click and deleting the whole grid.





const container = document.getElementById("grid-container");




























































































































// const MODE = {
//     DEFAULT: 'default',
//     RAINBOW: 'rainbow',
//     ERASER: 'eraser'
// };

// const COLOUR = {
//     DEFAULT: '#1f1f1f',
//     ERASER: '#eaeaea'
// };

// const DEFAULT_COLOUR = COLOUR.DEFAULT;
// const DEFAULT_MODE = MODE.DEFAULT;
// const DEFAULT_GRID_SIZE = 16;

// const grid = document.querySelector('.grid');
// const color = document.getElementById('color');
// const colorActivate = document.getElementById('colorActivate');
// const rainbow = document.getElementById('rainbow');
// const eraser = document.getElementById('eraser');
// const totalErase = document.getElementById('totalErase');
// const textSizePanel = document.getElementById('textSizePanel');
// const slider = document.getElementById('slider');
// const toggleGrid = document.querySelector('input[type=checkbox]');


// let selectedColour = DEFAULT_COLOUR;
// let selectedMode = DEFAULT_MODE;
// let gridSize = DEFAULT_GRID_SIZE;
// let mousePressed = false;

// // Main Execution
// defaultSetup();

// // Functions
// function defaultSetup() {
//     updateSizeTxt(DEFAULT_GRID_SIZE);
//     populateGrid(DEFAULT_GRID_SIZE);
//     setMode(DEFAULT_MODE);
// }

// function randColourChannel() {
//     return Math.floor((Math.random() * 256));
// }

// function populateGrid(gridSize) {
//     // Both Rows and Columns size set at once
//     grid.style.gridTemplate = `repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr)`;

//     for (let i = 0; i < gridSize * gridSize; i++)
//         grid.appendChild(createGridElement());
// }

// function createGridElement() {
//     const gridElement = document.createElement('div');
//     gridElement.classList.toggle('gridElement');
//     gridElement.addEventListener('mouseover', colourElement);

//     // To Ensure the starting element being pressed is coloured before dragging around
//     gridElement.addEventListener('mousedown', colourElement);
//     return gridElement;
// }

// function drawGrid(flag){                                         
//     let gridElement = document.querySelectorAll('.div'); 
    
//     for (let gridElement of gridELements){
//             gridElement.style.borderWidth = flag;                       
//     }            
// }

// let flag;
// toggleGrid.addEventListener('change', function (e) {            //switch grid button
//     localStorage.status = e.target.checked ? flag = "0.1px" : flag = "0";
//     drawGrid(flag);
//   });

// //   This code listens for changes to the checkbox (toggleGrid), and when the checkbox is changed,
// //   it updates the localStorage.status value and the flag variable 
// //   based on whether the checkbox is checked or not. 
// //   Then, it calls the drawGrid function with the appropriate grid width value (flag).

// // the function above is the toggle on and off grid lines and the toggleGrid.addEventListener
// // is the actual toggle button doing the toggling



// function setMode(mode) {
//     deactivateActiveButton();
//     setActiveButton(mode);
//     setColour(mode);

//     selectedMode = mode;
// }

// function deactivateActiveButton() {
//     switch (selectedMode) {
//         case MODE.RAINBOW:
//             rainbow.classList.toggle('active');
//             break;
//         case MODE.ERASER:
//             eraser.classList.toggle('active');
//             break;
//         default:
//             color.classList.toggle('active');
//             break;
//     }
// }

// function setActiveButton(mode) {
//     switch (mode) {
//         case MODE.RAINBOW:
//             rainbow.classList.toggle('active');
//             break;
//         case MODE.ERASER:
//             eraser.classList.toggle('active');
//             break;
//         default:
//             color.classList.toggle('active');
//             break;
//     }
// }

// function setColour(mode) {
//     switch (mode) {
//         case MODE.RAINBOW:
//             break;
//         case MODE.ERASER:
//             selectedColour = COLOUR.ERASER;
//             break;
//         default:
//             selectedColour = pickerColour.value;
//             break;
//     }
// }

// function changeSelectedColour(colour) {
//     selectedColour = colour;
// }

// function resetGrid() {
//     gridContainer.innerHTML = '';
//     populateGrid(gridSize);
// }

// function updateSizeTxt(size) {
//     textSizePanel.textContent = `${size} x ${size}`;
// }

// function changeSize(size) {
//     updateSizeTxt(size);
//     gridSize = size;

//     // Reset the grid to the new grid size
//     resetGrid(gridSize);
// }

// // Event Listeners
// document.body.onmousedown = () => (mousePressed = true);
// document.body.onmouseup = () => (mousePressed = false);

// slider.addEventListener('mousemove', (evt) => {
//     updateSizeTxt(evt.target.value);
// });
// slider.addEventListener('change', (evt) => {
//     changeSize(evt.target.value);
// });
// color.addEventListener('input', (evt) => {
//     changeSelectedColour(evt.target.value);
// });
// colorActivate.addEventListener('click', () => {
//     setMode(MODE.DEFAULT);
// });
// rainbow.addEventListener('click', () => {
//     setMode(MODE.RAINBOW);
// });
// eraser.addEventListener('click', () => {
//     setMode(MODE.ERASER);
// });
// totalErase.addEventListener('click', resetGrid);

















// let isDrawing = false;
// let rainbowMode = false;
// let eraser = false;
// let coloredRowElements;

// container.addEventListener('mousedown', () => {      
//     isDrawing = true;  
// });   

// container.addEventListener('mouseup', () => {      
//     isDrawing = false;  
// });




// const gridContainer = document.querySelector('.gridContainer');
// const toggleGrid = document.querySelector('input[type=checkbox]');
// const rangeSlider = document.querySelector ('#range');


// const colorButton = document.getElementById('color');
// const rainbowButton = document.getElementById('rainbow');

// const eraserButton = document.getElementById('eraser');
// const nukeButton = document.getElementById('total_erase');

// const textSizePanel = document.querySelector('.textSizePanel');

// let activeBrush = null;

// function changeWhite(event) {
//     event.target.style.backgroundColor = '#ffffff';
// }


// function changeCustomColor(event) {
//     event.target.style.backgroundColor = customColor.value;
// }

// function applyBrush(row) {
//     row.addEventListener('mouseover', function(event) {
//         if (event.buttons === 1) {

//             }if (activeBrush === 'eraser') {
//                 changeWhite(event);
//             } else if (activeBrush === 'custom') {
//                 changeCustomColor(event);
     
//             }
//         });
//     }


// function removeBrush (row) {
    
//         row.removeEventListener('mouseover', changeWhite);
//         row.removeEventListener('mouseover', changeCustomColor);
    
// }

// coloredRowElements.forEach(function(row) {
//     cell.addEventListener('mousedown', function(event) {
//         applyBrush(row, event);
//     });
//     row.addEventListener('mouseup', function() {
//         removeBrush(row);
//     });
// });


// // Event listeners that apply the selected brush to activeBrush when you click the buttons 
// // and also removes the other previously selected brush


// eraserButton.addEventListener('click', function() {
// activeBrush = 'eraser';
//    coloredRowElements.forEach(removeBrush);
//    coloredRowElements.forEach(applyBrush);
// });

// colorButton.addEventListener('input', function() {
//     activeBrush = 'custom';
//     coloredRowElements.forEach(removeBrush);
//     coloredRowElements.forEach(applyBrush);
// });







// function draw(color){                                           
//     coloredRowElements = document.querySelectorAll('.row'); 
    
//     for (const coloredRowElement of coloredRowElements){
        
//         coloredRowElement.addEventListener('mousedown', () => {
//             coloredRowElement.style.backgroundColor = color;             
//         });  
        
//         coloredRowElement.addEventListener('mousemove', () => {
//             if (isDrawing) {
//             coloredRowElement.style.backgroundColor = color;                 
//         }
//     });           
// }
// }

// colorButton.addEventListener('input', () => {
//     const selectedColor = colorButton.value;
//     draw(selectedColor);
// });

// // colorButton.addEventListener('change', () => {    //change color picker
// //     color = document.getElementById("color").value;     
// //     draw(color); 
// // } )



// // this is the drawing function


// function drawGrid(flag){                                         
//     let rowElements = document.querySelectorAll('.row'); 
    
//     for (let rowElement of rowElements){
//             rowElement.style.borderWidth = flag;                       
//     }            
// }

// let flag;
// toggleGrid.addEventListener('change', function (e) {            //switch grid button
//     localStorage.status = e.target.checked ? flag = "0.1px" : flag = "0";
//     drawGrid(flag);
//   });

// //   This code listens for changes to the checkbox (toggleGrid), and when the checkbox is changed,
// //   it updates the localStorage.status value and the flag variable 
// //   based on whether the checkbox is checked or not. 
// //   Then, it calls the drawGrid function with the appropriate grid width value (flag).

// // the function above is the toggle on and off grid lines and the toggleGrid.addEventListener
// // is the actual toggle button doing the toggling




// let size;
// let sizePrev;

// function drawSquares(){               
//     size = Number(document.getElementById("range").value);
//     sizePrev = size;                    
    
//     for (let j=1; j <= size; j++){
//         const column = document.createElement('div');
//         column.classList.add('column');
//         gridContainer.appendChild(column);   
        
//         for (let i=1; i <= size ; i++) {
//             const rowElement = document.createElement('div');
//             rowElement.classList.toggle('row');  
//             column.appendChild(rowElement);
//         }
//     }
// }

// drawSquares() 

// // this is the actual grid lines and squares show up function
// // It's creating the infamous divs in my otherwise empty grid




// rangeSlider.addEventListener('change', () => {             
//     let sizeVal = document.getElementById("range").value;
//     textSizePanel.textContent = sizeVal + '  x  ' + sizeVal;
//     size = Number(document.getElementById("range").value);
//     clearField();
//     drawSquares();
//     drawGrid(flag);   
// });

// // this is changing the grid size and it targets the slider



// function clearField(){
//     for (let j=1; j <= sizePrev; j++){
//         const column = document.querySelector('.column')
//         gridContainer.removeChild(column);
//     }
// }

// // defining the clear the color from the grid function



// nukeButton.addEventListener('click', () => {            
//     clearField(); 
//     drawSquares(); //this line preserves the grid after nuking the colors!
//     drawGrid(flag);  // this line resets the grid 
// });  

// // this is the delete all color from the grid button


// rainbowButton.addEventListener('click', () => {
//     rainbowMode = !rainbowMode;
// });



// gridContainer.addEventListener('mousemove', (e) => {
//     if (!isDrawing) return;
//     if (rainbowMode) {
//         // Generate a random color in rainbow mode
//         const randomColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
//         e.target.style.backgroundColor = randomColor;
//     } else {
//         // Set a constant color when not in rainbow mode (e.g., black)
//         e.target.style.backgroundColor = 'black';
//     }
// });

