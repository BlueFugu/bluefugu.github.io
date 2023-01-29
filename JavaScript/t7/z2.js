let chisla = [5, 8, 0];
let popitka = 5;
let chislo = 10;
 for(i=0; i<5; i++){  
 chislo = (Number(prompt(`Guess number you have `)));
    if(chisla.indexOf(chislo) == -1){
 chisla[3] = `*`;
    }else{
        popitka--;
    }if(chisla.indexOf(Number(prompt(`Guess number you have `))) == chisla[2]){
       chisla[2] = `*`;
    }
    
 }