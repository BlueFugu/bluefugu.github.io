function UserStart(){
let users_table = document.getElementById('users_table');
let vidro = '';
users.map(function(user, index){
//console.log(`${index} ${user.name}`)
vidro += `
<tr>
					<td>${index+1}</td>
					<td>${user.name}</td>
					<td>${user.email}</td>
					<td>
						<button class="btn btn-sm btn-primary" onclick="showModel('${user.id}')">
							Детально
						</button>
					</td>
					<td>
						<button class="btn btn-danger">Видалити</button>
					</td>
				</tr>`
})

users_table.innerHTML = vidro;
}
UserStart()

function showModel(id){
let myModal = document.getElementById(`myModal`)
myModal.style.display = 'block';

let user = findUder(id)
myModal.innerHTML = `
<div class="modal-content">
  <div class="modal-header text-center">
    <h4>Повна інформація про користувача</h4>
    <span class="close" onclick="closeModel()">&times;</span>
  </div>
  <div class="modal-body py-3">
    <p><b>Ім'я:</b>${user.name}</p>
    <p><b>Місто:</b>${user.address.street}</p>
    <p><b>Email:</b>${user.email}</p>
    <p><b>Телефон:</b>${user.phone}</p>
    <p><b>Сайт:</b>${user.website}</p>
    <p><b>Компанія:</b>${user.company.name}</p>
  </div>
  <div class="modal-footer">
    <button class="btn btn-sm btn-secondary" onclick="closeModel()">Скасувати</button>
    <a class="btn btn-sm btn-success" href="https://www.google.com.ua/maps/@${user.address.geo.lat},${user.address.geo.lng},13.12z">Показати на карті</a>
    <a class="btn btn-sm btn-warning" href="mailto: ${user.email}">Написати email</a>
  </div>
</div>
`
}
function closeModel(){
document.getElementById(`myModal`).style.display = 'none';  
}
function findUder(id){
    let filtered = users.filter(function(user){
        return user.id === id
    })
    return filtered[0];
}
