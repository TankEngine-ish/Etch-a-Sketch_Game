// ive got color output and its numerical value
// a grid and its range value
// a switch to randomized colors
// selective eraser
// eraser that wipes the whole grid

// So I need to have in mind the following: setting the color, setting the mode and making the colors random, setting the size of grid
// Later on I need to have in mind: deleting squares on click and deleting the whole grid.

const grid_size_numbers = document.getElementById('textInsidePanel')
const grid_range_slider = document.getElementById('range')
const color_button = document.getElementById('color')
const rainbow_switch = document.getElementById('myCheckbox')
const eraser_button = document.getElementById('eraser')
const nuke_button = document.getElementById('total_erase')
const grid = document.getElementById('grid')


const DEFAULT_COLOR = '#333333'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 16

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE

function setCurrentColor(newColor) {
    currentColor = newColor
  }
  
  function setCurrentMode(newMode) {
    activateButton(newMode)
    currentMode = newMode
  }
  
  function setCurrentSize(newSize) {
    currentSize = newSize
  }

  color_button.oninput = (e) => setCurrentColor(e.target.value)
  rainbow_switch.onclick = () => setCurrentMode('rainbow')
  eraser_button.onclick = () => setCurrentMode('eraser')
  nuke_button.onclick = () => reloadGrid()
  grid_size_numbers.onmousemove = (e) => updateSizeValue(e.target.value)
  grid_range_slider.onchange = (e) => changeSize(e.target.value)


  function changeSize(value) {
    setCurrentSize(value)
    updateSizeValue(value)
    reloadGrid()
  }
  
  function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`
  }
  
  function reloadGrid() {
    clearGrid()
    setupGrid(currentSize)
  }
  
  function clearGrid() {
    grid.innerHTML = ''
  }


  function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  
    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement('div')
      gridElement.classList.add('grid-element')
      gridElement.addEventListener('mouseover', changeColor)
      gridElement.addEventListener('mousedown', changeColor)
      grid.appendChild(gridElement)
    }
  }



  function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'rainbow') {
      const randomR = Math.floor(Math.random() * 256)
      const randomG = Math.floor(Math.random() * 256)
      const randomB = Math.floor(Math.random() * 256)
      e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === 'color') {
      e.target.style.backgroundColor = currentColor
    } else if (currentMode === 'eraser') {
      e.target.style.backgroundColor = '#fefefe'
    }
  }



function activateButton(newMode) {
  if (currentMode === 'rainbow') {
    rainbowBtn.classList.remove('active')
  } else if (currentMode === 'color') {
    colorBtn.classList.remove('active')
  } else if (currentMode === 'eraser') {
    eraserBtn.classList.remove('active')
  }

  if (newMode === 'rainbow') {
    rainbowBtn.classList.add('active')
  } else if (newMode === 'color') {
    colorBtn.classList.add('active')
  } else if (newMode === 'eraser') {
    eraserBtn.classList.add('active')
  }
}

window.onload = () => {
  setupGrid(DEFAULT_SIZE)
  activateButton(DEFAULT_MODE)
}