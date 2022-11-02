'use strict';
let result = document.querySelector('.result span');
let sex='male', height, weight, age, ratio= 1.55;
function calcTotal(){
    if (!sex || !height || !weight ||!age || !ratio) {
    result.textContent = '----';
    return;
    }
    if ( sex === 'female'){
        result.textContent= Math.round(447.6+(9.2 * weight)+(3.1 * height)-(4.3 * age))*ratio;
        
    } else {
     result.textContent= Math.round(88.36+(13.4 * weight)+(4.8 * height)-(5.7 * age))*ratio;
    
}
}
calcTotal();

function getSI(parentSelector,activeClass){
    const elements = document.querySelectorAll(`${parentSelector} div`);
    elements.forEach(elem => {
        elem.addEventListener('click', (e) => {
            if (e.target.getAttribute('data-ratio')){
                ratio = +e.target.getAttribute('data-ratio');
            } else {
                sex = e.target.getAttribute('id');
            }
            elements.forEach(elem=>{
                elem.classList.remove(activeClass);
            });
            e.target.classList.add(activeClass);
           
            calcTotal();
        });
    })

}

getSI('#gender','calculator__pol--buttonMaleActive');
getSI('.calculator__activiti--input','calculator__activiti--active');


function getDynamicInform(selector){
    const input = document.querySelector(selector);
    input.addEventListener('input', () =>{

        if(input.value.match(/\D/g)){
            input.style.border='1px solid red';
        } else{
            input.style.border='1px solid rgb(147, 141, 141)';
        }

        switch(input.getAttribute('id')){
            case 'height':
                height = +input.value;
                break;
            case 'age':
                age = +input.value;
                break;
            case 'weight':
                weight = +input.value;
                break;
        }
        calcTotal();
    });

}

getDynamicInform('#height');
getDynamicInform('#age');
getDynamicInform('#weight');