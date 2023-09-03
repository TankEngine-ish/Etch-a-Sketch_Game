const color_button = document.getElementById('color')
const myCheckox_slider = document.getElementById('myCheckbox')
const eraser_button = document.getElementById('eraser')
const nuke_button = document.getElementById('total_erase')
const grid_size_numbers = document.getElementById('textInsidePanel')
const grid_range_slider = document.getElementById('range')
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


