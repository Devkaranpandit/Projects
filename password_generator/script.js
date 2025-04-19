const numberInput = document.getElementById("number");
const rangeInput = document.getElementById("range");
const input = document.getElementById('input');
const btn = document.getElementById('btn');
const icon = document.querySelector('.fa-copy');
const alertContainer = document.querySelector('.alert-container');

numberInput.addEventListener("input", () => {
  rangeInput.value = numberInput.value;
});

rangeInput.addEventListener("input", () => {
  numberInput.value = rangeInput.value;
});

function generatePassword(){
    const lower = "abcdefghijklmnopqrstuvwxtz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const num = "0123456789";
    const special = "!@#$%^&*()_+?:{}[]";
    let password = "";
    password += lower[Math.floor(Math.random()*lower.length)]
    password += upper[Math.floor(Math.random()*upper.length)]
    password += num[Math.floor(Math.random()*num.length)]
    password += special[Math.floor(Math.random()*special.length)]
    const combine = lower + upper + num + special;
    let passwordLength = rangeInput.value;
    for(let index = 4; index < passwordLength; index++){
        password += combine[Math.floor(Math.random()*combine.length)];
    }
    input.value = password;
    alertContainer.textContent = password + "Copied";
}

icon.addEventListener('click',()=>{
    copyPassword();
    if(input.value){
        alertContainer.classList.remove('active');
        setTimeout(()=>{
            alertContainer.classList.add('active');
        },2000)
    }
})

function copyPassword(){
    navigator.clipboard.writeText(input.value);
}

btn.addEventListener('click',generatePassword);



