const prevB1 = document.querySelector('.prev');
const nextB1 = document.querySelector('.next');
const image = document.querySelectorAll('img');
const container = document.querySelector('.image_container');

let currentImage = 1;
let timeout;
prevB1.addEventListener('click',()=>{
    currentImage--;
    clearInterval(timeout);
    updateImage();
    
});

nextB1.addEventListener('click',()=>{
    currentImage++;
    clearInterval(timeout);
    updateImage();
    
});
updateImage();
function updateImage(){
    if(currentImage > image.length){
        currentImage = 1;
    }else if(currentImage < 1){
        currentImage = image.length;
    }
    container.style.transform = `translateX(-${(currentImage - 1) * 500}px)`;
    timeout = setTimeout(()=>{
        currentImage++;
        updateImage();
    },3000)
}