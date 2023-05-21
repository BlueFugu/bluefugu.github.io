function ArtiDraw(artic){
    let cards = document.getElementById('cards');
    const card = document.createElement('div');
card.classList.add('card');
card.style.margin = '20px';

const header = document.createElement('div');
header.classList.add('card-header');
header.textContent = artic.nonid;

const body = document.createElement('div');
body.classList.add('card-body');

const title = document.createElement('h5');
title.classList.add('card-title');
title.textContent = artic.title;

body.appendChild(title);
card.appendChild(header);
card.appendChild(body);

cards.appendChild(card);
}

function ArtiGet(){
db.collection('articles').get().then(res =>{
    res.forEach((doc) =>{
       let arti =  doc.data();
        arti.nonid =  doc.id;
        ArtiDraw(arti)

    })
})
}ArtiGet()