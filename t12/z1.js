const users = [
	"Андрусишин Олег",
	"Балицький Олексій",
	"Барановський Ігор",
	"Бей Тетяна",
	"Білас Всеволод",
	"Білоус Андрій",
	"Бордун Галина",
	"Буба Євген",
	"Вантух Володимир",
	"Васьків Роман",
	"Вервега Тарас",
	"Візняк Юрій",
	"Гагалюк Богдан",
	"Ганущин Олександр",
	"Гичка Михайло",
	"Гірняк Володимир",
	"Голуб Юрій",
	"Грабінський Ігор",
	"Грицик Ольга",
	"Гудима Юрій",
	"Дворянин Парасковія",
	"Дейнека Анатолій",
	"Демчина Роман",
	"Дзюдзь Михайло"
];
const users_list = document.getElementById("pup")
let ad = ``;
for(i=0; i< users.length; i++ ){
    if(i % 2 > 0){
    ad +=`<tr style="background-color: lightgrey;"> <td class="a">${i + 1}</td>
    <td class="b">${users[i + 1]}</td>
    <td class="c"><input type="checkbox"></td> </tr>`
}else{
    ad += `<tr> <td class="a">${i + 1}</td>
    <td class="b">${users[i + 1]}</td>
    <td class="c"><input type="checkbox"></td> </tr>`
}
}

