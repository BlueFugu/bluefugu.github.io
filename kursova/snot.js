function ChangeButton() {
    const vhidElement = document.getElementById('Vhid');
    const ClickerElement = document.getElementById('Clicker');

    if (localStorage.uid != null) {
        vhidElement.innerHTML = `<button onclick="Signout()"><a href="" class="link btn">Вихід<img src="../images/logout.svg"</a></button>`;
        if(window.location.pathname === `іindex.html?id=${localStorage.uid}`){
            ClickerElement.innerHTML ='<button><a href="Clicker/Clicker.html" class="link btn">Клікер</a></button>' 
          }else{
             ClickerElement.innerHTML ='<button><a href="../Clicker/Clicker.html" class="link btn">Клікер</a></button>' 
          }
    }else {
        vhidElement.innerHTML = `<button><a href="../login/logup.html" class="link btn"><img src="../images/login.svg">Вхід</a></button>`;
       ClickerElement.innerHTML = 'Клікер доступний тільки<br> з акаунтом';
    }
}
ChangeButton();

function Signout(){
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        localStorage.removeItem('uid')
      }).catch((error) => {
        // An error happened.
      });
     } 

function EnNotification(nick, text,  type, timeduration){
    const nothific = document.createElement('div');
    nothific.classList.add('notific');
    nothific.classList.add(type);
    
    const nothead = document.createElement('div');
    nothead.classList.add('nothead');

    const h4 = document.createElement('h4');
    h4.innerText = nick;
   

    const p = document.createElement('p');
    p.innerHTML = text;
    
    const bottomline = document.createElement('div');
    bottomline.classList.add('bottomline');
    bottomline.style.animation = `Moveline ${timeduration}s linear 0s 1`;

   
    nothific.appendChild(nothead);
    nothead.appendChild(h4);
    nothead.appendChild(p); 

    nothific.appendChild(bottomline);

    document.body.appendChild(nothific);              
    
    setTimeout(function(){
       document.body.removeChild(document.querySelector(".notific"))  
    }, timeduration*1000)
    console.log("ldf")
}
function EnterClicks(){
 if(localStorage.getItem("uid") != null){
let uid = localStorage.getItem("uid")


var userRef = db.collection('ClydeUser').doc(uid);

    userRef.get().then(res => {
        let cas = res.data();
        cas.id = res.id;

        document.getElementById("h2").innerText = cas.count
    })    
}   
}

EnterClicks()

