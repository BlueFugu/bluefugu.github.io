let object = JSON.parse(localStorage.getItem('signer'))
if(object.loged == true){
document.getElementById(`nav_right`).innerHTML= `<ul class="navbar-nav ml-auto">
<li class="nav-item">
    <a class="nav-link" href="index.html" onclick="deleten()">Вийти</a>
</li>
</ul>`
}
function deleten(){
    JSON.parse(localStorage.clear('signer')) 
}