function change_colours(){
    let num = document.getElementById('card_num').value
    let card = document.getElementById(`card_${num}`)
    let card_color = document.getElementById('card_color').value
    let card_bg = document.getElementById(`card_bg`).value
    card.setAttribute('style', `color:${card_color}; background:${card_bg};`)
}