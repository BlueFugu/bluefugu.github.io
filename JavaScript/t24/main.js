let cards = document.getElementById('cards');
let vidro = '';
phones.map(function(phone){
//console.log(phone)
if(phone.action){
actiia = '<div class="action">Акція</div>'; 
}else{
actiia = '';
}
  vidro += `<div class="card">
    ${actiia}
  <img src="${phones.image}" class="card-img-top">
    <div class="card-body">
        <h6 class="card-title">${phone.name}</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Виробник:</b> <span>${phone.developer}</span></li>
            <li class="list-group-item"><b>Відгуків:</b> <span>${phone.reviews}</span></li>
            <li class="list-group-item"><b>Ціна:</b> <span>${phone.price}₴</span></li>
        </ul>
    </div>
    <div class="card-body price">
                                <a href="#" class="card-link">В корзину</a>
                                <a href="#" class="card-link">Придбати</a>
                              </div>
                        </div>`  
})
cards.innerHTML= vidro;

function findDevelopers(){
    let developers = []
    phones.map(function(phone){
        
        if(developers.indexOf(phone.developer) == -1){
            developers.push(phone.developer)
        }
    }) 
let datalist = document.getElementById('datalistOptions')
let kola = '';
developers.map(function(phone){
kola += `
    <option value="${phone}">
`})

datalist.innerHTML = kola
} 
findDevelopers()
function saveFilter(){
    
    let filter = {
        developer:document.getElementById('de').value,
        name:document.getElementById('name').value,
        max_prise:document.getElementById('max').value,
        min_prise:document.getElementById('min').value,
        order:document.getElementById('jar').value
    }
    localStorage.setItem('settings', JSON.stringify(filter))
}
function showProducts(){
    localStorage.getItem('settings')
}

