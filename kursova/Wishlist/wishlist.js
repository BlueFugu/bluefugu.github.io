let allSum = 0;

function meOrOth(){
   if(purpleRadio6.checked){
      
      db.collection('ClydeUser').doc(`${localStorage.getItem("uid")}`).get().then(res => {
         console.log("Отримані дані з Firestore:", res.data());
         const userData = res.data();
         Nick.value = userData.name;
         Phone.value = userData.phone;
         Email.value = userData.email;
         purpleRadio6.setAttribute('disabled', '')
      purpleRadio7.removeAttribute('disabled', '')
      });
   }else if(purpleRadio7.checked){
      purpleRadio7.setAttribute('disabled', '')
      purpleRadio6.removeAttribute('disabled', '')
      Nick.value = '';
      Phone.value = '';
      Email.value = "";
   }
}

function CounterPrice(){
   let allPrice = 0;
   let cartedtover = LocS();
   cartedtover.forEach(tover => {
      allPrice += tover.price*tover.bafday;
   })
   showinTovar()
   document.getElementById('span').innerText = `Загальна сума вподобаного:${allPrice}`;
   allSum = allPrice;
   
}CounterPrice()


function LocS(){
   let cartedtover = JSON.parse(localStorage.getItem('cartedtover'));
      if(cartedtover === null){
         return [];
      }else{
         return cartedtover;
      }
   
   }



function showinTovar(){
   let cartedtover = LocS();
    let tovars = document.getElementById('wish');
    let minitovars = document.getElementById('mts');
    tovars.innerHTML = '';
    minitovars.innerHTML = '';
    let index = 0;
    cartedtover.forEach(tover => {
       tovars.innerHTML += ` <div class="card">
       <p class="name4t">${tover.neme}</p>
       <img class="imar" src="${tover.photo}">
       <h6 class="prise">${tover.price} clicks</h6>
       <h6 class="prise">${tover.baf}</h6>
       <div id="num"><button class="addbusket" onclick="addBufday(${index})">+</button><input type="number" id="cilk" value="${tover.bafday}" min="1"> <button class="addbusket" onclick="minusBufday(${index})">-</button></div>
       <div><button class="addbusket" onclick="">Купити</button>  <button class="addbusket" onclick="del1Tovar(${index})">Видалити</button></div>`
       minitovars.innerHTML += ` <div class="card">
       <p class="name4t">${tover.neme}</p>
       <img class="imar" src="${tover.photo}">
       <h6 class="prise">${tover.price} clicks</h6>
       <div id="num"> Кількість Бафу: ${tover.bafday}</div>`
       
       index++;
       
    });
    }showinTovar()


function ClearList(){
   localStorage.clear('cartedtover')
   showinTovar()
   CounterPrice()
}
function CounterPrice(){
   let allPrice = 0;
   let cartedtover = LocS();
   cartedtover.forEach(tover => {
      allPrice += tover.price*tover.bafday;
   })
   showinTovar()
   document.getElementById('span').innerText = `Загальна сума вподобаного:${allPrice}`;
   
}CounterPrice()

function del1Tovar(index){
   let cartedtoer = LocS();
   cartedtoer.splice(index, 1);
   localStorage.setItem('cartedtover', JSON.stringify(cartedtoer));
   showinTovar();
   CounterPrice();
}
function addBufday(index){
   let cartedtoer = LocS();
   cartedtoer[index].bafday++;
   localStorage.setItem('cartedtover', JSON.stringify(cartedtoer));
   showinTovar();
   CounterPrice(); 
}
function minusBufday(index){
   let cartedtoer = LocS();
   if(cartedtoer[index].bafday > 1){
      cartedtoer[index].bafday--;
   localStorage.setItem('cartedtover', JSON.stringify(cartedtoer));
   showinTovar();
   CounterPrice();
   }
    
}
function openb(){
   if (localStorage.cartedtover != null){
      document.getElementById('backorder').style.display = 'flex';
      
   }else{
      EnNotification('Менеджер Wishlist', `Ваш Wishlist пустий, додайте товари щоб їх купити`,  'notific_error', 2)
   }
}
function closeb(){
   document.getElementById('backorder').style.display = 'none';
}

db.collection('ClydeUser').doc(`${localStorage.getItem("uid")}`).get().then(doc => {
       const data = doc.data();
       const count = data.count;
     
       })
       
function acceptOrder(){
 
         db.collection('ClydeOrder').doc('VnE4k8KF17FdJCnHheWi').get().then(res=>{
            let Nomer = res.data();
             console.log(Nomer)
         
         let checkin = {
             number: Nomer.number,
             status: 'Замовлено',
             tovar_list: LocS(),
             Nick: document.getElementById('Nick').value,
             Phone: document.getElementById('Phone').value,
             Email: document.getElementById('Email').value,
             DeliverOperator: 'Нова Пошта',
             City: document.getElementById('city').value,
             Vidilenya:document.getElementById('post').value,
             Suma:allSum
         }
        db.collection('ClydeOrders').doc(`${Nomer.number}`).set(checkin).then(res=>{
         Nomer.number++
         db.collection('ClydeOrder').doc('VnE4k8KF17FdJCnHheWi').set(Nomer).then(res=>{
             
             localStorage.removeItem('cartedtover');
             db.collection('ClydeUser').doc(`${localStorage.getItem("uid")}`).update({
             count: count - allSum
            }).then(res => {
            })
             showinTovar();
             CounterPrice();
             closeb();
         })
        })
      })
      }
      
         












































const radios = document.querySelectorAll('input[type="radio"][name="color"]');
const labels = document.querySelectorAll('label[for^="purpleRadio"]');
const labels2 = document.querySelectorAll('label[for^="purpleRadio5"]');
const radios2 = document.querySelectorAll('input[type="radio"][name="color2"]');


// Додаємо обробник події "click" для кожної радіокнопки
radios.forEach((radio, index) => {
  radio.addEventListener('click', function() {
    // Отримуємо відповідну мітку по індексу
    const label = labels[index];

    // Додаємо клас для мигання
    label.classList.add('flash');

    // Через 500 мілісекунд видаляємо клас мигання
    setTimeout(function() {
      label.classList.remove('flash');
    }, 500);
  });
});
radios2.forEach((radio, index) => {
  radio.addEventListener('click', function() {
    // Отримуємо відповідну мітку по індексу
    const label = labels2[index];

    // Додаємо клас для мигання
    label.classList.add('flash');

    // Через 500 мілісекунд видаляємо клас мигання
    setTimeout(function() {
      label.classList.remove('flash');
    }, 500);
  });
});
// Функція для отримарк какамання списку відділень для певного міста
function getWarehouses(cityName) {
    var apiKey = "a2eeee5df88e713421560926d5f93471";
    var url = "https://api.novaposhta.ua/v2.0/json/";


    var requestData = {
        apiKey: apiKey,
        modelName: "AddressGeneral",
        calledMethod: "getWarehouses",
        methodProperties: {
            CityName: cityName // Передаємо назву міста
        }
    };


    $.ajax({
        url: url,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(requestData),
        success: function(response) {
       
        },
        error: function(xhr, status, error) {
            console.error("Помилка запиту:", error); // Виведення помилки у консоль
        }
    });
}


// Виклик функції з вказаною назвою міста

// Ваші дані для запиту
const apiKey = "a2eeee5df88e713421560926d5f93471";
const modelName = "Address";
const calledMethod = "getCities";
const methodProperties = {};


// URL для виклику API
const url = "https://api.novaposhta.ua/v2.0/json/";


// Створення об'єкту запиту
const requestData = {
  apiKey: apiKey,
  modelName: modelName,
  calledMethod: calledMethod,
  methodProperties: methodProperties
};


// Відправлення POST-запиту до API "Нова Пошта"
fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(requestData)
})
.then(response => response.json())
.then(data => {
  // Обробка отриманих даних
  if (data.success) {
    // Виведення списку міст у консолі
    const citiesDatalist = document.getElementById('citieslist');
    data.data.forEach(city => {
       //console.log(city);
      const option = document.createElement('option');
      option.value = city.Description;
      citiesDatalist.appendChild(option);
    });
  } else {
    console.error("Помилка отримання списку міст:", data.errors);
  }
})
.catch(error => {
  console.error("Помилка виконання запиту:", error);
});
 




// Додавання міст до <datalist>



function getWarehouses(cityName) {
   var apiKey = "a2eeee5df88e713421560926d5f93471";
   var url = "https://api.novaposhta.ua/v2.0/json/";


   var requestData = {
       apiKey: apiKey,
       modelName: "AddressGeneral",
       calledMethod: "getWarehouses",
       methodProperties: {
           CityName: cityName // Передаємо назву міста
       }
   };


   $.ajax({
       url: url,
       type: 'POST',
       contentType: 'application/json',
       data: JSON.stringify(requestData),
       success: function(response) {
           // Отримання списку відділень
           var warehouses = response.data;
          
           // Вивід списку відділень у консоль разом із їх змістами
           warehouses.forEach(function(warehouse) { 
            const vidillist = document.getElementById('vidillist');
            const option = document.createElement('option');
            option.value = warehouse.Description;
            vidillist.appendChild(option);
           });
       },
       error: function(xhr, status, error) {
           console.error("Помилка запиту:", error); // Виведення помилки у консоль
       }
   });
}




getWarehouses();






