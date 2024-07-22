function sign_in_up_google(){
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {


    var user = result.user;
    db.collection('ClydeUser').doc(user.uid).get().then(res => {
      if(res._document == null){
        console.log('ddf')
        let Clydeuser = {
          email: user.email,
          name: user.displayName,
          phone: '',
          password: password.value,
          count: 0,
          bafu: [],
          clickPower: 1
      }
      db.collection('ClydeUser').doc(user.uid).set(Clydeuser).then(res =>{
          LinktoWeb(user.uid)
      })
      }else{
        LinktoWeb(user.uid)
      }
    })
  }).catch((error) => {


    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    console.log(errorCode)
    console.log(errorMessage)
    console.log(email)


  });


}
function LinktoWeb(id){
  EnNotification('Менеджер Реєстрацій', 'Вас буде перенаправлено на сайт',  'notific_suc', 1.5)
  setTimeout(function(){
    localStorage.setItem('uid',id);
    window.location.href = `../index.html?id=${id}`
  }, 1600) 
}



function reg(){
   
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    data_reg(user.uid)
    LinktoWeb(user.uid)
  })
  .catch((error) => {
    
    var errorCode = error.code;
    var errorMessage = error.message;
    EnNotification('Менеджер Помилок', `У вас виявлено помилку: ${errorMessage}`,  'notific_error', 3)
    // ..
    console.log(errorCode)
    console.log(errorMessage)
  });
}

function data_reg(id){
    let user = {
        email: email.value,
        name: nickname.value,
        phone: phone.value,
        count: 0,
        bafu: [],
        clickPower: 1
    }
    db.collection('ClydeUser').doc(id).set(user).then(res =>{
    })
}

function sign_InEn(){
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    let user = userCredential.user;
    LinktoWeb(user.uid)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}
