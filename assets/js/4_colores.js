const divsIdArray = ['div-blue', 'div-red', 'div-green', 'div-yellow']
const divsArray = document.querySelectorAll('div')

const colorLetraA = 'pink'
const colorLetraS = 'orange'
const colorLetraD = 'lightblue'

const colorLetraQ = 'purple'
const colorLetraW = 'grey'
const colorLetraE = 'brown'

divsArray.forEach(function(e) {
    e.addEventListener('click', function() {
        pintarDeNegro(e)
    })
})

document.addEventListener('keydown', function(event) {
    if(event.key == 'a') {
        cambiarColorDivKey(colorLetraA)
    } else if(event.key == 's') {
        cambiarColorDivKey(colorLetraS)
    } else if(event.key == 'd') {
        cambiarColorDivKey(colorLetraD)
    } else if(event.key == 'q') {
        agregarDivYPintar(colorLetraQ)
    } else if(event.key == 'w') {
        agregarDivYPintar(colorLetraW)
    } else if(event.key == 'e') {
        agregarDivYPintar(colorLetraE)
    } else {
        alert('La letra ' + event.key + ' no hace cambios en esta página')
    }
})

function pintarDeNegro(clickedElement) {
    if(divsIdArray.includes(clickedElement.id)) {
        clickedElement.style.backgroundColor = 'black'
    }
}

function cambiarColorDivKey(selectedBackgroundColor) {
    document.querySelector('#key').style.backgroundColor = selectedBackgroundColor;
}

function agregarDivYPintar(selectedBackgroundColor) {
    let nuevoDiv = document.createElement('div')
    
    nuevoDiv.style.width = '200px'
    nuevoDiv.style.height = '200px'
    nuevoDiv.style.backgroundColor = selectedBackgroundColor

    document.querySelector('.container').appendChild(nuevoDiv)
}