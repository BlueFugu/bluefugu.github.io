let user = {
    name: `Петро`,
    lastname: `Іванов`,
    age: 14,
    email: `petro007@gmail.com`,
    city: `Lviv`
}
function showUser(){
    document.getElementById(`td`).innerHTML = `
    <td>${user.name}</td>
    <td>${user.lastname}</td>
    <td>${user.age}</td>
    <td>${user.email}</td>
    <td>${user.city}</td>
    `
  }
showUser();
function changeName(nick){
    user.name = nick;
    showUser();
}
function changeLastname(nock){
    user.lastname = nock;
    showUser();
}
function changeEmail(nuck){
    user.email = nuck;
    showUser();
}
function changeCity(nack){
    user.city = nack;
    showUser();
}
function changeUserData(a, b, c, d, e){
    user.name = a;
    user.lastname = b;
    user.age = c;
    user.email = d;
    user.city = e;
    showUser();
}