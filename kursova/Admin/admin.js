function del_theme(){
    if(type.value == 'muz' ||  type2.value == 'muz'){
        theme.innerHTML = ''
    }else{
        theme.innerHTML = `<label for="">Тема товару:</label>
        <select name="" id="thame">
            <option value="witch">Відьмочки</option>
            <option value="frog">Жабки</option>
            <option value="cactus">Кактусики</option>
            <option value="cloud">Хмаринки</option>
            <option value="marmaid">Русалочки</option>
            <option value="frowers">Квіточки</option>
            <option value="hellokitty">Всесвіт Хелоу Кітті</option>
        </select>`
    }
}
function openAdd(modal){
    document.getElementById(modal).style.display = 'block';
}
function closeAdd(modal){
    document.getElementById(modal).style.display = 'none';
}
function AddTovar(){
    let tovar = {
        neme: neme.value,
        type: type.value,
        theme: thame.value,
        rarity: rarity.value,
        photo: photo.value,
        text: text.value,
        baf: Baf.value,
        price: Number(price.value)
    }
    db.collection('ClydeTovars').add(tovar).then(res => {
        document.getElementById('modal2').style.display = 'none';
        window.location.reload()
    })
}
function openMain(){
    window.location.href = "../index.html";
}
function openM(){
    window.location.href = "../Manager/manager.html";
}




function showTovar(tover, indx){
if(tover.rarity == 'com'){
    tover.rarity = '💙Звичайний';
}
if(tover.rarity == 'rar'){
    tover.rarity = "💚Рідкісний";
}
if(tover.rarity == 'ep'){
    tover.rarity = "💜Епічний";
}
if(tover.rarity == 'leg'){
    tover.rarity = "💛Легендарний";
}
   document.getElementById('tbody').innerHTML += `
<tr>
    <td>${indx}</td>
    <td>${tover.neme}</td>
    <td>${tover.id}</td>
    <td>${tover.theme}</td>
    <td>${tover.type}</td>
    <td>${tover.rarity}</td>
    <td>${tover.baf}</td>
    <td>${tover.text}</td>
    <td class="syte">${tover.photo}</td>
    <td>${tover.price}</td>
    <td><button onclick="editTovar('${tover.id}')">edit</button></td>
    <td><button ondblclick="deleteTovar('${tover.id}')">delete</button></td>
</tr>`;

}
   
function TOVAR(){  
    db.collection('ClydeTovars').get().then(function(res){
        document.getElementById('tbody').innerHTML = '';
        let index = 1;
        res.forEach((doc) => {
            let object = doc.data();
            object.id = doc.id;
            showTovar(object, index)
            index++
        })
        })
}TOVAR()

    function deleteTovar(idtov){
        db.collection('ClydeTovars').doc(idtov).delete().then(res => {
            TOVAR()
        })
    }

    function editTovar(idtev){
        
        db.collection('ClydeTovars').doc(idtev).get().then(res => {
            let tovar = res.data();
                tovar.id = res.id;
            document.getElementById('neme2').value = tovar.neme;
            document.getElementById('type2').value = tovar.type;
            document.getElementById('thame2').value = tovar.theme;
            document.getElementById('rarity2').value = tovar.rarity;
            document.getElementById('Baf2').value = tovar.baf;
            document.getElementById('photo2').value = tovar.photo;
            document.getElementById('text2').value = tovar.text;
            document.getElementById('price2').value = tovar.price;
                document.getElementById('savechange').addEventListener('click', function(){
                    SaveEdit(idtev)
                })
        })
        openAdd('modal3')
    }
        
function SaveEdit(idtav){
    let editedyover = {
        neme: neme2.value,
        type: type2.value,
        theme: thame2.value,
        rarity: rarity2.value,
        photo: photo2.value,
        text: text2.value,
        baf: Baf2.value,
        price: Number(price2.value)
    }
    db.collection('ClydeTovars').doc(idtav).set(editedyover).then(res =>{
         closeAdd('modal3')
        TOVAR()
    })
   
}
