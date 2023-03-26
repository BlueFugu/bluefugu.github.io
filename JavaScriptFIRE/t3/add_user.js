function Add(){
let name = document.getElementById('name').value;
let lastname = document.getElementById('lastname').value;
let email = document.getElementById('email').value;
let people = {
    name: name,
    lastname: lastname,
    email: email
};
db.collection('users').add(people).then(function(){showSuccess()
    document.getElementById('name').value = ``;
    document.getElementById('lastname').value = ``;
    document.getElementById('email').value = ``;
})
}
function showSuccess(){
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-success col-6">You signed!</div>`
    setTimeout(function(){ message.innerHTML = ``;
    window.location.href = 'add_article.html';
}, 2000)
}