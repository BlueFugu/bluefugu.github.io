
let keyboard = {
    sale: true ,
    image: "z1-2.jpg" ,
    name: "Клавіатура дротова Logitech G2** Prodigy USB",
    vidguki:204 ,
    tsyna: 1399 ,
}
let keyboard2 = {
    sale: false ,
    image: "z1-3.jpg" ,
    name: "Клавіатура Cougar Vantar",
    vidguki:6 ,
    tsyna: 1286 ,
}
let products = document.getElementById(`products`)
let x = 0;
let x2 =0;
if(keyboard.tsyna < keyboard.tsyna){
    x = keyboard2.tsyna - keyboard.tsyna
}else{
    x2 = keyboard.tsyna - keyboard2.tsyna
}

let cards = `
<div class="card">
			<div class="header">
				<div class="action">Акція</div>
			</div>
			
			<div class="card_image">
				<img src="${keyboard.image}" alt="">
			</div>
			
			<div class="card_info">
				<div class="name">
					${keyboard.name}
				</div>
				
				<div class="reviews">
					${keyboard.vidguki} відгуки
				</div>
				
				<div class="price">
					${keyboard.tsyna}&#8372;
				</div>
			</div>
		</div>
        <h2>${x}</h2>
`
cards += `
<div class="card">
			<div class="header">
				
			</div>
			
			<div class="card_image">
				<img src="${keyboard2.image}" alt="">
			</div>
			
			<div class="card_info">
				<div class="name">
					${keyboard2.name}
				</div>
				
				<div class="reviews">
					${keyboard2.vidguki} відгуки
				</div>
				
				<div class="price">
					${keyboard2.tsyna}&#8372;
				</div>
			</div>
		</div>
        <h2>${x2}</h2>
`
products.innerHTML = cards;