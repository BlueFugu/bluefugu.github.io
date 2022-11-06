/*index.push(19);
index.unshift(83);
index.pop();
index.shift();
let index = [16, 27, 92, 98, 10]
console.log(index.indexOf());*/
let a = 3;
let password = 1234;
for(i=0;i<3;i++){
    
if(password == Number(prompt(`Enter your password. Your tries - ${a}.`))){

    alert(`Corect password`);
    break;
    }else{
        a--;
        alert(`Uncorect password`)
    }if(a == 1){
        alert(`It is 1234.`)
    }
}
