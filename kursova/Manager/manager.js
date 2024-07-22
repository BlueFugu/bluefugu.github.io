function openMain(){
    window.location.href = "../index.html";
}
function ShowinOrders(order){
  let orders = document.getElementById('tbody')


  let row = document.createElement('tr');

  let number = document.createElement('td');
  number.innerText = order.number;

  let nick = document.createElement('td');
  nick.innerText = order.Nick;
  
  let phone = document.createElement('td');
  phone.innerText = order.Phone;

  let email = document.createElement('td');
  email.innerText = order.Email;

  let deliver = document.createElement('td');
  deliver.innerText = order.DeliverOperator;

  let city = document.createElement('td');
  city.innerText = order.City;

  let viddil = document.createElement('td');
  viddil.innerText = order.Vidilenya;

  let list = document.createElement('td');

  let div_dropdown = document.createElement('div');
  div_dropdown.classList.add("dropdown");

  let div_naimennya = document.createElement('div');
  div_naimennya.innerText = 'Список замовлених товарів';

  let div_DropdownContent = document.createElement('div');
  div_DropdownContent.classList.add("dropdown-content");

  let ul = document.createElement('ul');
  order.tovar_list.forEach(tovar=>{
    ul.innerHTML += `<li>${tovar.neme}</li>`
  })

 div_dropdown.appendChild(div_naimennya)
 div_dropdown.appendChild(div_DropdownContent)
 div_DropdownContent.appendChild(ul)
 list.appendChild(div_dropdown)


  let status = document.createElement('td');
  let STselect = document.createElement('select');

  let opti1 = document.createElement('option');
    opti1.setAttribute('value', 'reserved');
    opti1.innerText = '💬 ​​Замовлено';
    

  let opti2 = document.createElement('option');
    opti2.setAttribute('value', 'canceled');
    opti2.innerText = '❌ ​Скасовано';

  let opti3 = document.createElement('option');
    opti3.setAttribute('value', 'deliered');
    opti3.innerText = '✅ Отримано';

  STselect.appendChild(opti1);
  STselect.appendChild(opti2);
  STselect.appendChild(opti3);

  status.appendChild(STselect);




  let edit = document.createElement('td');

  let edit_button = document.createElement('button');
  edit_button.setAttribute('type', 'button');
  edit_button.classList.add('btn-outline-light');
  edit_button.innerText = '(Едіт)';
  
 edit.appendChild(edit_button)

  row.appendChild(number)
  row.appendChild(nick)
  row.appendChild(phone)
  row.appendChild(email)
  row.appendChild(deliver)
  row.appendChild(city)
  row.appendChild(viddil)
  row.appendChild(list)
  row.appendChild(status)
  row.appendChild(edit)

  orders.appendChild(row)
}

function ORDERS(){
  document.getElementById("tbody").innerHTML = ``;
  db.collection('ClydeOrders').get().then(res=>{
    res.forEach(doc=>{
      let order = doc.data()
      order.id = doc.id;
      ShowinOrders(order)
    })
  })
}
ORDERS()