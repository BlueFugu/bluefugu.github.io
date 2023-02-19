function drawDevelopers(){
    let list = document.getElementById('list');
    let top_list = '';
    companies.map(function(company){
        top_list += `<a href="#" class="list-group-item list-group-item-action devs">${company.name}</a>`;
    })
    list.innerHTML = top_list;
}drawDevelopers()

function addClass(){
let devs = Array.from(document.getElementsByClassName('devs'));
console.log(devs);
devs.map(function(dev, index){
    dev.addEventListener('click', function(){
        devs.map(function(o){
            o.classList.remove('active')
        })
        dev.classList.add('active')
        
        if(companies[index].info[2] == undefined){
            document.getElementById('info').innerHTML = `<h4>${companies[index].name}</h4>
            <p>
                ${companies[index].info[0]}
            </p>
            <p>
               ${companies[index].info[1]}
            </p>`
        }else{
            document.getElementById('info').innerHTML = `<h4>${companies[index].name}</h4>
            <p>
                ${companies[index].info[0]}
            </p>
            <p>
               ${companies[index].info[1]}${companies[index].info[2]}
            </p>`  
        }
    })
})
}addClass()

function m(){

}
