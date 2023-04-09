function showModal(id){
    document.getElementById(id).classList.add('show')
}


function hideModal(id){
    document.getElementById(id).classList.remove('show')
}


function addTask(){
    let task = {
        text: document.getElementById('text').value,
        status: document.getElementById('status').value
    }
    document.getElementById('save').style.display = 'none'
    db.collection('ForTasks').add(task).then(function(){
        hideModal('newTaskModal')
        document.getElementById('save').style.display = 'block'
        getTasks()
    })
}


function drawTasks(zavd,index){
    let color = '';
    if(zavd.status == 'Виконано'){
        color = 'lime'
    }else if(zavd.status == 'Виконується'){
        color = 'orange'
    }else if(zavd.status == 'Провалено'){
        color = 'red'
    }




    let tr = document.createElement('tr');


    let nomer = document.createElement('th');
    nomer.setAttribute('scope','row');
    nomer.innerText = index;


    let task_text = document.createElement('td');
    task_text.innerText = zavd.text;
    let task_status = document.createElement('td');
   
    let task_edit = document.createElement('td');
    task_edit.classList.add('text-center');
    let task_del = document.createElement('td');
    task_del.classList.add('text-center');


    let b = document.createElement('b');
    b.classList.add(color);
    b.innerText = zavd.status;


    let edit = document.createElement('button');
    edit.classList.add('btn','btn-warning','btn-sm');
    edit.innerText = 'Редагувати';
    edit.addEventListener('click',function(){
        showModal('editTaskModal')
        document.getElementById('save_change').setAttribute('onclick', `edit('${zavd.id}')`)
    })


    let x = document.createElement('button');
    x.classList.add('btn','btn-danger','btn-sm');
    x.innerText = 'x';
    x.addEventListener('click',function(){
        delTask(`${zavd.id}`)
        getTasks()
    })


    task_status.appendChild(b);


    task_edit.appendChild(edit);
    task_del.appendChild(x);


    tr.appendChild(nomer)
    tr.appendChild(task_text)
    tr.appendChild(task_status)
    tr.appendChild(task_edit)
    tr.appendChild(task_del)


    document.getElementById('tbody').appendChild(tr)




}


function getTasks(){
    let nomer = 1;
    document.getElementById('tbody').innerHTML = '';


    db.collection('ForTasks').get().then(function(res){
        res.forEach(function(doc){
            let object = doc.data();
            object.id = doc.id;
            console.log(object)
            drawTasks(object,nomer);
       
            nomer++
        })
    })


}
getTasks()


function delTask(aidi){
    db.collection('ForTasks').doc(aidi).delete().then(function(){
        console.log('delete complete')
    })
}

function edit(aidina){
    let task = {
        text: document.getElementById('editext').value,
        status: document.getElementById('editatys').value
    }
    db.collection('ForTasks').doc(aidina).set(task)
}