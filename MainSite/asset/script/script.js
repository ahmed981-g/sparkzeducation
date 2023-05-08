var dropBtn = document.getElementById("drop-btn");

dropBtn.addEventListener('click', dropMenu);

function dropMenu(){
    let menuHolder = document.querySelector(".menu-list");
    let links = document.querySelector('.links');
    
    if(menuHolder.style.height != "82.2vh"){
        menuHolder.style.height = "82.2vh";
        dropBtn.style.transform = "rotate(180deg)";
        links.style.transform = 'scale(1)';

    }else{
        menuHolder.style.height = "80px";
        dropBtn.style.transform = "rotate(0deg)";
        links.style.transform = 'scale(0)';

    }
};