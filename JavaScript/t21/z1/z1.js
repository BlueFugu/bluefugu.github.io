function change(){
let hello = document.getElementById('hello')
let color = document.getElementById('card_color').value
let background = document.getElementById(`card_bg`).value
hello.setAttribute('style', `color:${color}; background:${background};`)
}