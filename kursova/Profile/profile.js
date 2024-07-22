let uid = localStorage.getItem('uid')


function ActivEdit(){
    if(uid == null){
        EnNotification('Менеджер Реєстрацій','У вас немає акаунту на сайті<br> увійдіть на наявний або зараєструйтесь',  'notific_error', 3)  
    }else{
   let prof_info = Array.from(document.getElementsByClassName('prof_info'));
    prof_info.forEach(input => {
        input.removeAttribute("disabled")
        input.classList.add('prof_inf')
    })  
    
    document.getElementById('edit').innerHTML = '<button onclick="NonactEdit()" class="btn">Перестати редагувати<img src="../images/caseledit.svg"></button>'; 
}}
function NonactEdit(){
    let prof_info = Array.from(document.getElementsByClassName('prof_info'));
    prof_info.forEach(input => {
        input.setAttribute("disabled", "true");
        input.classList.remove('prof_inf')
    })  
    UpdateEdited()
    document.getElementById('edit').innerHTML = '<button onclick="ActivEdit()" class="btn">Редагувати<img src="../images/edit.svg"></button>';
}
function UpdateEdited(){
    let user = {
        name: nick.value,
        date: date.value,
        email: email.value,
        phone: phone.value,
        count: count.value
    }
    db.collection('ClydeUser').doc(uid).set(user).then(res => {
        EnNotification('Менеджер Акаунтів','Зміни акаунту збережено',  'notific_info', 1) 
       
    })
    
}
function getDB_ClydeUser(){
    db.collection('ClydeUser').doc(uid).get().then(res => {
        let user = res.data();
    nick.value = user.name;
    date.value = user.date;
    email.value = user.email;
    phone.value = user.phone;
    count.value = user.count
    })
}getDB_ClydeUser()

