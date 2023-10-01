function sign_in_up_google(){
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
   




    var user = result.user;
    console.log(user)
  }).catch((error) => {


    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    console.log(errorCode)
    console.log(errorMessage)
    console.log(email)


  });


}


function reg(){
   
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    data_reg(user.uid)
    console.log(user)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    console.log(errorCode)
    console.log(errorMessage)
  });
}

function data_reg(id){
    let user = {
        email: email.value,
        name: nickname.value,
        phone: phone.value
    }
    db.collection('ClydeUser').doc(id).set(user).then(res =>{
        alert('mzx')
    })
}

function sign_InEn(){
    firebase.auth().signInWithEmailAndPassword(email_k.value, password_k.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}
