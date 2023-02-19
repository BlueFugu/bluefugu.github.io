function showCards(){
let number = document.getElementById('number').value;
let cards = document.getElementById('cards');
let cards_basket = '';

for(i=0; i<number; i++){
    cards_basket += `
    <div class="card">
    <div class="card-body">
    <p class="card-text">Card ${i+1}</p>
    </div>
    </div>`;
}
cards.innerHTML = cards_basket;
animCards()
}

function animCards(){
   let cards =  Array.from(document.getElementsByClassName('card'));
   cards.map(function(card){
   card.addEventListener('click', function(){
   console.log(card) 
   card.classList.add('anim-card')
   })
   })
   
}