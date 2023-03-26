



let band = [
];
    db.collection('fourtune').get().then(res => {
        res.forEach(coldoc => {
            let user = coldoc.data()
            user.id = coldoc.id
            band.push(user)
        })
        drawusers()
    });

 function drawusers(){   
    let b = ``;
let tbody = document.getElementById('tbody');
band.map(pup => {
    b += `
            <tr>
                <th>${pup.name}</th>
                <th>${pup.lastname}</th>
                <th>${pup.email}</th>
                <th>${pup.phone}</th>
            </tr`;
    })
    tbody.innerHTML = b;
    
}



