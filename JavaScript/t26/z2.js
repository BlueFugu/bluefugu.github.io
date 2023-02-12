function drawDevelopers(){
    let list = document.getElementById('list');
    let top_list = '';
    companies.map(function(company){
        top_list += `<a href="#" class="list-group-item list-group-item-action">${company.name}</a>`;
    })
    list.innerHTML = top_list;
}drawDevelopers()