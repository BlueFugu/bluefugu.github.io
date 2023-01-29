const all_orders = [
	{
		client_name: "Дмитро Іванов",
		client_phone: "+3809781240",
		order_name: "Iphone X",
		order_price: "520",
		order_status: true
	},
	{
		client_name: "Тетяня Микитенко",
		client_phone: "+3809646712",
		order_name: "Клавіатура",
		order_price: "60",
		order_status: false
	},
	{
		client_name: "Андірй Тарасенко",
		client_phone: "+3809641412",
		order_name: "Телефон Samsung",
		order_price: "360",
		order_status: true
	}
]
function addOrder(){
    let order = {
        client_name:    document.getElementById(`client_name`).value,
        client_phone:   document.getElementById(`client_phone`).value,
        order_name:     document.getElementById(`order_name`).value,
        order_price:    document.getElementById(`order_price`).value,
        order_status:   document.getElementById(`order_status`).checked
}
all_orders.push(order)
drawOrders()
}


function drawOrders(){
    let orders_table = document.getElementById(`orders_table`);
    let vidro = ` `;
    let status = ``;
    for(i=0;i<all_orders.length;i++){
       if(all_orders[i].order_status == true){
        status = `checked`
       }else if(all_orders[i].order_status == false){
        status = ``;
       }
        vidro += `
        <tr>
        <td>${i+1}</td>
		<td>${all_orders[i].client_name}</td>
		<td>${all_orders[i].client_phone}</td>
	    <td>${all_orders[i].order_name}</td>
		<td class="centered">${all_orders[i].order_price}$</td>
		<td class="centered"><input type="checkbox" ${status}></td>
		<td class="centered"><button class="del_btn" onclick="delOrder(${i})">Видалити</button></td>
        </tr>
        `
    }
    orders_table.innerHTML = vidro;
}
drawOrders()
function delOrder(index){
    all_orders.splice(index, 1)
    drawOrders()
}
