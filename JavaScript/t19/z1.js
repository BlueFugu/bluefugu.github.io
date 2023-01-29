function time(){
    let h1 = document.getElementById(`h1`);
    let input = document.getElementById(`input`).value;
    localStorage.setItem(`Havai`,input);
    h1.innerHTML = input;
}
function timeDr(){
    let h1 = document.getElementById(`h1`);
    h1.innerHTML = localStorage.getItem(`Havai`);
}
timeDr()

