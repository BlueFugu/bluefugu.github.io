/*
let otinka = [2, 6, 7, 10];
console.log(`Вітаю ${name}! Кількість оцінок з предмету ${la} рівна ${otinka.length}. Остання оцінка - ${otinka[otinka.length -1]}`)
*/
let name = prompt(`Як вас звати?`);
let la = `математика`;
let otinka = [];
for(i=0; i<4; i++){
    otinka[i] = Number(prompt(`Яка у вас оцінка з математики?⌂`));
}
console.log(`Вітаю ${name}!У вас 4 оцінки з предмету ${la}. Остання оцінка ${otinka[otinka.length -1]}. Ваш середній бал з даного придмету ${(otinka[0] + otinka[1] + otinka[2] + otinka[3]) / otinka.length }`)