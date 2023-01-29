function text(){
    let h3 = document.getElementById(`stored_test`);
    let input = document.getElementById(`input`).value;
    localStorage.setItem(`Hawai`,input);
    h3.innerHTML = input;
}
function SuperDelete(){
    let h3 = document.getElementById(`stored_test`);
    let input = document.getElementById(`input`).value;
    document.getElementById(`input`).value = ``;
    h3.innerHTML = ``;
    localStorage.clear(`Hawai`);
}
function SUPERCHANGE(){
    let input = document.getElementById(`input`).value;
    document.getElementById(`input`).value = localStorage.getItem(`Hawai`);
}

