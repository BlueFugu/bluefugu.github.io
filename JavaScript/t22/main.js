function spawnCards(){
    let cards = document.getElementById(`cards`);
    let num = document.getElementById('cards_num').value;
    let vidro = ``; 
    for(i=0; i<num; i++){
    vidro += `
    <div class="card">
		  <div class="card-body my-2">
			<h5 class="card-title">Card ${i+1}</h5>
		  </div>
		</div>
    `;
}
    cards.innerHTML = vidro;
}

function Textcolor(){
    let text = document.getElementById('cards_text').value;
    let card = document.getElementsByClassName('card');
    let order = document.getElementById('edit_order').value;
    Array.from(card).map(function(kapsula, index){   
    if((index+1)%order == 0){
    kapsula.style.color = text;
    }
    })
}
function Backgroundcolor(){
    let fun = document.getElementById('cards_fon').value;
    let card = document.getElementsByClassName('card');
    let order = document.getElementById('edit_order').value;
    Array.from(card).map(function(kapsula, index){
        if((index+1)%order == 0){    
        kapsula.style.background = fun; 
        }
    })
}
function Delete(){
document.getElementById(`cards`).innerHTML = ``;
}
function Clear(){
    let card = document.getElementsByClassName('card');
    Array.from(card).map(function(kapsula){
        kapsula.style.background = ``; 
        kapsula.style.color = ``;
    })
}

