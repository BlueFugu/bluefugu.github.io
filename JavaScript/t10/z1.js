
let bilion = document.getElementById(`bilion`);
let signin = document.getElementById(`imya`);
let login = confirm(`Ви зареєстровані на цьому сайті`);
let imya = prompt(`Введіть ваше ім'я`)
if(login == true){
bilion.innerHTML = `<h1 align="center">Вітаю ${imya}! На вашу електронну пошту відправлено лист з підтвердженням</h1>`;
signin.innerText = `${imya}`;
}else{
bilion.innerHTML = `<h1 align="center">Будь ласка, увійдіть в свій акаунт своріть новий</h1>`;
signin.innerText = `Sign in`;
}


console.log(bilion)