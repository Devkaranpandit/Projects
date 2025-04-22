const amount = document.getElementById('amount');
const tip = document.getElementById('tip');
const total = document.getElementById('total');
const calc = document.getElementById('calc');

function calculate(){
    if(amount.value == ''){
        error.innerHTML = 'Enter a valid amount'
    }else{
        const price = amount.value * (1+tip.value / 100)
    total.textContent = price.toFixed(2); 
    }
}
calc.addEventListener('click',calculate);
