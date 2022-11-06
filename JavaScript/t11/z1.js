
/*console.log(calendar)*/
let calendar = document.getElementById(`calendar`)
let days = ``;
let pit = prompt(`Який ви хочете місяць подивитися(Будь ласка, напишіть з великої)`);
let dniv = 0;
let x = document.getElementById(`verh`)
if(pit == `Вересень` || pit == `Квітень` || pit == `Червень`){
    dniv=30
  }else if(pit == `Лютий`){
    dniv=28;
  }else{
    dniv=31;
  }
for(i=1; i<dniv+1; i++){ 
    x.innerText =`Календар до місяця ${pit}`
    if(i%7 == 0 || i%7 == 6){
         days += `<div id="card" class="day">
        ${i} <br> ${pit}</div>`
    
   }else{ 
    days += `<div class="day">
    ${i} <br> ${pit}</div>`
   }
    
}
    calendar.innerHTML = days;