function logIn(){
    let email = document.getElementById('username').value;
    let password = document.getElementById('password').value;


    db.collection('fourtune').get().then(function(res){
       res.forEach(function(doc){
            let user = doc.data();
            user.fbId = doc.id;
            console.log(user)


           if(user.email == email){
            window.location.href = 'index.html';
            localStorage.setItem('log', JSON.stringify(user))
            console.log(user)
           }
       })
    })
   
}


function checkUser(){
  let log =  localStorage.getItem('log')
  if(log === null){


  }else{
    window.location.href = 'index.html';
  }
}
checkUser()


