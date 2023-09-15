// ive got color output and its numerical value
// a grid and its range value
// a switch to randomized colors
// selective eraser
// eraser that wipes the whole grid

// So I need to have in mind the following: setting the color, setting the mode and making the colors random, setting the size of grid
// Later on I need to have in mind: deleting squares on click and deleting the whole grid.


let isDrawing = false;
let rainbowMode = false;

const gridContainer = document.querySelector('.gridContainer');
const toggleGrid = document.querySelector('input[type=checkbox]');
const rangeSlider = document.querySelector ('#range');


const colorButton = document.getElementById('color');
const rainbowButton = document.getElementById('rainbow');

const eraserButton = document.getElementById('eraser');
const nukeButton = document.getElementById('total_erase');

const textSizePanel = document.querySelector('.textSizePanel');


function draw(color){                                           
    let coloredRowElements = document.querySelectorAll('.row'); 
    
    coloredRowElements.forEach((coloredRowElement) => {
        coloredRowElement.addEventListener('mousedown', () => {
            if (isDrawing) {
                coloredRowElement.style.backgroundColor = color.value;
            }
        });

        coloredRowElement.addEventListener('mousedown', () => {
            coloredRowElement.style.backgroundColor = color.value;
        });
    });
}
// this is the drawing function




function drawGrid(flag){                                         
    let rowElements = document.querySelectorAll('.row'); 
    
    for (let rowElement of rowElements){
            rowElement.style.borderWidth = flag;                       
    }            
}


let flag;
toggleGrid.addEventListener('change', function (e) {            //switch grid button
    localStorage.status = e.target.checked ? flag = "0.1px" : flag = "0";
    drawGrid(flag);
  });


// the function above is the toggle on and off grid lines and the toggleGrid.addEventListener
// is the actual toggle button doing the toggling




let size;
let sizePrev;

function drawSquares(){               
    size = Number(document.getElementById("range").value);
    sizePrev = size;                    
    
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
}

drawSquares() 

// this is the have actual grid lines and squares show up function





//   This code listens for changes to the checkbox (toggleGrid), and when the checkbox is changed,
//   it updates the localStorage.status value and the flag variable 
//   based on whether the checkbox is checked or not. 
//   Then, it calls the drawGrid function with the appropriate grid width value (flag).



function clearField(){
    for (let j=1; j <= sizePrev; j++){
        const column = document.querySelector('.column')
        gridContainer.removeChild(column);
    }
}


nukeButton.addEventListener('click', () => {             //field clear button
    clearField();
    drawSquares();
    drawGrid(flag);  
});  

eraserButton.addEventListener('click', () => {
// if a square is drawn on on click return it to white

coloredRowElements.forEach((coloredRowElement) => {
    coloredRowElement.style.backgroundColor = 'white';

})
});


rainbowButton.addEventListener('click', () => {
    rainbowMode = !rainbowMode;
  
});

gridContainer.addEventListener('mousedown', () => {
    isDrawing = true;
});

gridContainer.addEventListener('mouseup', () => {
    isDrawing = false;
});


gridContainer.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;
    if (rainbowMode) {
        // Generate a random color in rainbow mode
        const randomColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
        e.target.style.backgroundColor = randomColor;
    } else {
        // Set a constant color when not in rainbow mode (e.g., black)
        e.target.style.backgroundColor = 'black';
    }
});





rangeSlider.addEventListener('change', () => {              //change grid size range
    let sizeVal = document.getElementById("range").value;
    textSizePanel.textContent = sizeVal + '  x  ' + sizeVal;
    size = Number(document.getElementById("range").value);
    clearField();
    drawSquares();
    drawGrid(flag);   
});


window.onload = () => {
  
  }