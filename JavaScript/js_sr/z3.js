let object = JSON.parse(localStorage.getItem('signer'))
document.getElementById(`message`).innerText= `Вітаю ${object.login}!`
document.getElementById(`hello`).innerText= `На вашу поштову скриньку - ${object.eposhta} надіслано лист із підтвердженням вашої адреси.`
