
let spiner = document.getElementById('spiner');
let list = document.getElementById('list');
let articles = [];

db.collection('articles').get().then(res =>{
    spiner.style.display = 'none';
    res.forEach(coldoc =>{
       let arbible = coldoc.data();
       arbible.id = coldoc.id;
       drawArticles(arbible) 
    })
})

function drawArticles(infa){
    let card = document.createElement('div');
    card.classList.add('card');
    
    let card_header = document.createElement('div');
    card_header.classList.add('card-header');
    
    let card_head = document.createElement('h3')
    card_head.classList.add('card-head');
    card.innerText = infa.title;
    
    let card_body = document.createElement('div');
    card_body.classList.add('card-body');
    
    let card_text = document.createElement('p');
    card_text.classList.add('card-text');
    card_text.innerHTML = infa.article;
    
    let abtor = document.createElement('a');
    abtor.classList.add('btn');
    abtor.classList.add('btn-outline-light');
    abtor.href= infa.author;
    abtor.innerText = 'Click fo more info';

    card_body.appendChild(card_text)
    card_body.appendChild(abtor)

    card_header.appendChild(card_head)
    
    card.appendChild(card_header)
    card.appendChild(card_body)

    document.getElementById('list').appendChild(card)
}

