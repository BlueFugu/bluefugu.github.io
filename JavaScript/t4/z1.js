let chislo = prompt(`Введіть число?`);

if(chislo>0){
	alert(`Введене число є додатнім.`);
}else if(chislo<0){
	alert(`Введене число є від'ємним.`);
}else if(chislo==0){
	alert(`Введене число не є ні додатнім ні від'ємним.`);	
}else{
	alert(`Невірно введене число.`);
}
let chislo2 = prompt(`Введіть парне або непарне число`);
if(chislo2%2 == 0){
	alert(`Число є парним`);
}else if(chislo2%1 == 1){
	alert(`Число є непарним`);
}else if(chislo2>0 && chislo%0){
	alert(`Число є додатнім та парним.`);
}