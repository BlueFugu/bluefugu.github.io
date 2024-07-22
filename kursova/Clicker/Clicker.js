
let h2 = document.getElementById('h2');
let cliker = document.getElementById('cliker'); 
let uid = localStorage.getItem('uid');

db.collection('ClydeUser').doc(uid).get().then(rws =>{
let n =  rws.data().count;
h2.innerText = n;
let clickco = {
    clicks: n
}
let count = clickco.clicks;

cliker.addEventListener('click', function(){
    clickco.clicks = clickco.clicks +  rws.data().clickPower;
    h2.innerHTML = clickco.clicks
   
   
    if(uid != null){
        SaveClicks()
}
})




function SaveClicks(){
    db.collection('ClydeUser').doc(uid).update({
        count: clickco.clicks
    }).then(res => {
    }).catch(error => {
        console.error('Помилка оновлення:', error);
    });
}

})
function changeData() {
    db.collection('ClydeUser').doc(uid).get().then(res => {
            let x = res.data();
            x.count = x.count.toString();
            let updateData = { count: x.count };
            db.collection('ClydeUser').doc(uid).update(updateData)
        });
    }changeData() 






 /*db.collection('ClydeUser').doc(uid).get(count).then(rws =>{
        let bj = rws.data()
        bj.id = rws.id

        h2.innerHTML = "Всього кліків:"+bj.count
    })

   */