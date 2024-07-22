function SaveClicks(){
    let uid = localStorage.getItem('uid');
    var userRef = db.collection('ClydeUser').doc(uid);

    userRef.update({
        count: clickco.clicks
    }).then(res => {
    }).catch(error => {
        console.error('Помилка оновлення:', error);
    });
}












function TOVAR(){  
document.getElementById('things').innerHTML = '';
    let filter = JSON.parse(localStorage.getItem('filter'))
    
        
        if(filter === null){
           
            db.collection('ClydeTovars').get().then(function(res){res.forEach((doc) => {
                let object = doc.data();
                    object.id = doc.id;
                    showTovar(object)
                })})
    }else{
        let filtered = "db.collection('ClydeTovars')";
        if(filter.neme != "" ){
            filtered += `.where('neme', '==' ,'filter.neme')`
            console.log(filtered)
        }
        if(filter.type != ""){
            filtered += `.where('type', '==' ,filter.type)`
            console.log(filtered)
        }
        if(filter.thame != ""){
            filtered += `.where('theme', '==' ,filter.thame)`
            console.log(filtered)
        }
        if(filter.rarity != ""){
            filtered += `.where('rarity', '==' ,filter.rarity)`
            console.log(filtered)
        }
        if(filter.Baf != ""){
            filtered += `.where('baf', 'array-contains' ,'${filter.Baf}')`
            console.log(`.where('baf', 'array-contains', '${filter.Baf}')`);
        }
        if(filter.maxprice != 0){
            filtered += `.where('price', '>' ,filter.maxprice)`
            console.log(filtered)
        }
        if(filter.minprice != 0){
            filtered += `.where('price', '<' ,filter.minprice)`
            console.log(filtered)
        }
        
        
        
        
        eval(filtered).get().then(res => {
            res.forEach(doc => {
            let object = doc.data();
                object.id = doc.id;
                showTovar(object)
            })}) 
    }
}    TOVAR()    
       
function clearFilter(){
    localStorage.removeItem('filter')
    TOVAR()
}
        
        


function showTovar(tover){
    let tovars = document.getElementById('things');
    const card = document.createElement('div');
    card.classList.add('card');

    const name = document.createElement('p');
    name.classList.add('name4t');
    name.textContent = tover.neme;

    const image = document.createElement('img');
    image.classList.add('imar');
    image.setAttribute("src", tover.photo);

    const prise = document.createElement('h6');
    prise.classList.add('prise');
    prise.textContent = `${tover.price} clicks`;

   

    const at = document.createElement('button');
    at.classList.add('addbusket')
    at.setAttribute("onclick", `addtoCart('${tover.id}')`)
    at.textContent = 'Додати в Wishlist';
    
    const buynow = document.createElement('button');
    buynow.classList.add('addbusket');
    buynow.setAttribute("onclick", `BafingTovar('${tover.id}')`)
    buynow.textContent = 'Купити';
     const dn = document.createElement('div');
    dn.appendChild(at);
    dn.appendChild(buynow);
    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(prise);
    card.appendChild(dn);  
    tovars.appendChild(card);
    }
 


function SaveFilter(){
        let filter = {
        neme: document.getElementById('neme').value,
        type: document.getElementById('type').value,
        thame: document.getElementById('thame').value,
        rarity: document.getElementById('rarity').value,
        Baf: document.getElementById('Baf').value,
        maxprice: Number(document.getElementById('maxprice').value),
        minprice: Number(document.getElementById('minprice').value)
    }
    localStorage.setItem('filter', JSON.stringify(filter))
    TOVAR()  
}

function addtoCart(idTov){
    if (localStorage.uid != null){
    let shopcart = getCart();
    db.collection('ClydeTovars').doc(idTov).get().then(rse =>{
        let cas = rse.data();
        cas.id = rse.id;
        cas.bafday = 1;
        EnNotification('Менеджер Товарів',`${cas.neme} додано в корзину`,  'notific_info', 1.5) 


        let invmas = shopcart.findIndex(card => {
           return card.id == idTov;  
        })
        if(invmas == -1){
            shopcart.push(cas)
            localStorage.setItem('cartedtover', JSON.stringify(shopcart))
        }else{
            shopcart[invmas].bafday ++
            localStorage.setItem('cartedtover', JSON.stringify(shopcart))
        }
console.log(invmas)
    })
}else{
    EnNotification('Менеджер Товарів',`Ваш Wishlist недоступний без акаунту`,  'notific_error', 1.5) 
}
    }

function getCart(){
    let carted = JSON.parse(localStorage.getItem('cartedtover'))
    if(carted === null){
        return []
    }else{
        return carted
    }
}
/*function changeData(){
    db.collection('ClydeTovars').get().then(res => {
        tovar.forEach(doc => {
            let x = doc.data();
            x.id = doc.id;
            x.price = Number(x.price)
            db.collection('ClydeTovars').doc(x.id).set(x)
        })
    })
}changeData()*/

function BafingTovar(tvr_id){
    let i = db.collection('ClydeUser').doc(`${localStorage.getItem('uid')}`);
    db.collection('ClydeTovars').doc(`${tvr_id}`).get().then(rew =>{
        let tvr = rew.data();
        tvr.id = rew.id;
        console.log(tvr)
        i.get().then(usr =>{
            let user = usr.data();
            user.id = usr.id;
            if(user.count > tvr.price){
                user.count =  Number(user.count) - tvr.price; 
                EnterClicks()
                
                user.bafu.push(tvr)
    i.set(user).then(EnNotification('Менеджер Товарів',`${tvr.neme}  куплено і додано в інвентар`,  'notific_info', 3))}
})
})
}
/*
db.collection('ClydeUser').get().then(rwe=>{
    rwe.forEach(doc =>{
let user = doc.data()
user.id = doc.id

        user.bafu = [];
        user.clickPower = 1;
        db.collection('ClydeUser').doc(user.id).set(user).then()

    })
})*/
db.collection('ClydeTovars').get().then(rwe=>{
    rwe.forEach(doc =>{
let user = doc.data()
user.id = doc.id
if(user.rarity == 'com'){
    user.Power_UP = 1;
}else if(user.rarity == 'rar'){
    user.Power_UP = 2;
}else if(user.rarity == 'ep'){
    user.Power_UP = 3;
}else if(user.rarity == 'leg'){
    user.Power_UP == 5;
}
        
        db.collection('ClydeTovars').doc(user.id).set(user).then()

    })
})