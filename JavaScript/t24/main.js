
function drawCards(massive){
let cards = document.getElementById('cards');
let vidro = '';
massive.map(function(phone){
//console.log(phone)
if(phone.action){
actiia = '<div class="action">Акція</div>'; 
}else{
actiia = '';
}
  vidro += `<div class="card">
    ${actiia}
  
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
}
drawCards(phones)
function findDevelopers(){
    let developers = []
    phones.map(function(phone){
        
        if(developers.indexOf(phone.developer) == -1){
            developers.push(phone.developer)
        }
    }) 
console.log(developers)
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
    console.log(filter)
    showProducts(filter)
    localStorage.setItem('settings', JSON.stringify(filter))
}
function showProducts(filtruevalka){
 let telephones = phones.slice()
 if(filtruevalka.name.length > 0){
    telephones = telephones.filter(function(telephone){
      return  telephone.name.includes(filtruevalka.name)
    })
 }

 if(filtruevalka.developer.length > 0){
    telephones = telephones.filter(function(telephone){
      return  telephone.developer == filtruevalka.developer
 })}

 if(filtruevalka.min_prise.length > 0){
    telephones = telephones.filter(function(telephone){
        return  telephone.prise >= filtruevalka.min_prise
   })
 }
 if(filtruevalka.max_prise.length > 0){
    telephones = telephones.filter(function(telephone){
        return  telephone.prise <= filtruevalka.max_prise
   })
 }
if(filtruevalka.order > 0 && filtruevalka.order == 'reviews'){
    telephones = telephones.sort(function(a, b){
        return a.reviews - b.reviews
    })
}
if(filtruevalka.order > 0 && filtruevalka.order == 'price'){
    telephones = telephones.sort(function(a, b){
        return a.price - b.price
    })
}
    drawCards(telephones)


}

let hafilter = JSON.parse(localStorage.getItem('settings'));
if(hafilter){
    showProducts(hafilter)
}else{
    drawCards(phones)
}