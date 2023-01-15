function sign(){
let text = document.getElementById(`text`).value
let email = document.getElementById(`email`).value
let password = document.getElementById(`password`).value

    if(text.length > 2 && email.length > 3 && email.includes('@') && password.length > 6){
    object = {
        login:text,
        eposhta:email,
        pass:password
    }

    localStorage.setItem('signer',JSON.stringify(object))
    document.getElementById(`sign_up`).innerHTML = `<h3>Вітаю, ви пройшли реєстрацію</h3>`
    }else{
    if(email.length < 3 && email.includes('@') == false){
    document.getElementById(`sign_up`).innerHTML = `<h3>В тебе помилка</h3>`  
    }
}
}
