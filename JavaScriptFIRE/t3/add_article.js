function Addu(){
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let area = document.getElementById('area').value;
    let articles = {
        title: title,
        author: author,
        article: area
    };
    db.collection('articles').add(articles).then(function(){showSuccess()
        document.getElementById('title').value = ``;
        document.getElementById('author').value = ``;
        document.getElementById('area').value = ``;
    })
    }

    function showSuccess(){
        let message = document.getElementById('message');
        message.innerHTML = `<div class="alert alert-success col-6">Successfuly</div>`
        setTimeout(function(){ message.innerHTML = ``;
        window.location.href = '../t2/index.html';
    }, 2000)
    }