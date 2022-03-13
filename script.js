function menuBurger(){
    let show = true;

    const buttonRes = document.querySelector(".button-res");
    const navRes = document.querySelector(".nav-res");

    buttonRes.addEventListener('click', ()=>{
        navRes.classList.toggle("active", show);
        show = !show;
    })
}

function iniciar(){
    menuBurger();
}

window.addEventListener("load", iniciar);