const ele = document.querySelector('#ele1')
const defaultBackgorundColor = 'green'

ele.style.backgroundColor = defaultBackgorundColor

ele.addEventListener('click', function() {
    pintar(ele, 'yellow')
})

function pintar (clieckedElement, newBackgroundColor) {
    clieckedElement.style.backgroundColor = newBackgroundColor
}