function enter(){
    let email = document.getElementById(`email`).value
    let password = document.getElementById(`password`).value
    let object = JSON.parse(localStorage.getItem('signer'))
    
    if(email == object.eposhta && password == object.pass){
    document.getElementById(`message`).innerHTML = `<div class="alert alert-success col-6">Успіх</div>`
    object.loged = true;
    localStorage.setItem('signer',JSON.stringify(object))
    window.location = "z3.html"
    }else{
    document.getElementById(`message`).innerHTML = `<div class="alert alert-danger col-6">Помилка</div>`    
    }
}