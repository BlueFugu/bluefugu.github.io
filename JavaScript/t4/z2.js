/*let color = prompt(`Який колір на світлофорі?`);

if(color== `зелений` || color== `green`){
	alert(`Можна рухатись.`);
}else if(color== `жовтий` || color== `yellow`){
	alert(`Приготуйтесь.`);
}else if(color== `червоний` || color== `red`){
	alert(`Стоп!`);	
}*/
let v = 0;
if(prompt(`Який сьогодні день тижня?`)==`неділя`){
	v++
}
if(prompt(`Що перше потрібно для торту?`)==`борошно`){	
	v++
}
if(confirm(`Потрібні яйця для торту?`)==true){
	v++
}
if(confirm(`чи потрібно огірок для кремового торту?`)==false){
	v++
}
alert(`Ви відповіли на ${v}`);