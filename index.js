let selectedColor = 'blue'
const painting = document.querySelector('.painting')
let blueColor = document.querySelector('#blue')
let redColor = document.querySelector('#red')
let yellowColor = document.querySelector('#yellow')
let greenColor = document.querySelector('#green')



blueColor.addEventListener('click', function(){
    selectedColor = 'blue'
})
redColor.addEventListener('click', function(){
    selectedColor = 'red'
})
yellowColor.addEventListener('click', function(){
    selectedColor = 'yellow'
})
greenColor.addEventListener('click', function(){
    selectedColor = 'green'
})

painting.addEventListener('click', function(e){
    e.target.style.backgroundColor = selectedColor
})
painting.addEventListener('dblclick', function(e){
    e.target.style.backgroundColor = 'white'
})

