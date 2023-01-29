/*let a = Number(prompt(`Enter your number, please`));
for(i=1; i<=10; i++){
    console.log(`${a} * ${i} = ${a*i}`)
}
for(i=1; i<=15; i++){
    console.log(`${i} ^ 2  = ${i**2}`)
}*/
let f = Number(prompt(`Enter your number, please`));
let suma = 0;
for(i=1; i<=f; i++){   
    suma = suma + i;
}
console.log(`Сума чисел від 1 до ${f} рівна - ${suma} `)