function register(){
    let name = document.getElementById(`name`).value
    let email = document.getElementById(`email`).value
    let password = document.getElementById(`password`).value

    if(name.length == 0 && email.length == 0 && email.includes('@') == false && password.length == 0){
        document.getElementById(`message`).innerHTML = `<div class="alert alert-danger col-6">Помилка</div>`  
    }else{
        document.getElementById(`message`).innerHTML = `<div class="alert alert-success col-6">Успіх</div>`
    }
     object = {
            login:name,
            eposhta:email,
            pass:password
        }
    
        localStorage.setItem('signer',JSON.stringify(object))
}
