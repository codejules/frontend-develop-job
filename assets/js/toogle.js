$(document).ready(function () {
var titulo1 = document.querySelector('.titulo1')
var titulo2 = document.querySelector('.titulo2')
var texto1 = document.querySelector('.texto1')
var texto2 = document.querySelector('.texto2')


titulo1.addEventListener('click', function (event) {

    event.preventDefault()

    texto2.classList.remove('off')
    titulo1.classList.add('off')
    titulo2.classList.remove('off')

})
titulo2.addEventListener('click', function (event) {

    event.preventDefault()

    texto2.classList.add('off')
    titulo1.classList.remove('off')
    titulo2.classList.add('off')

})
})