// The headline 
const display = document.querySelector('#display')

// size
const inputSize = document.querySelector('#input-size')

// value 
const showSize = document.querySelector('#show-size')

// input
const showFont = document.querySelector('#show-font')

// show color
const showColor = document.querySelector('#show-color')

//select font
const selectFamily = document.querySelector("change", '#select-font')


inputSize.addEventListener('input', handleInput)

function handleInput() {
	//get the font size:
	const fontSize = inputSize.value + 'px'
	//show the style 
	display.style.fontSize = fontSize
	//show the size
    showSize.innerHTML = fontSize
    
    //font-family
    const selectTheFamily = selectFamily.value
    display.style.selectFamily = selectTheFamily
    selectFamily.innerHTML = selectTheFamily
    
}