let burgerBtn = document.querySelector(".burger-menu-btn");
let burgerMenu = document.querySelector(".burger-menu");

let isBurgerOpen = false;

burgerBtn.oneclick = function () {
    if(!isBurgerOpen){
        burgerMenu.style.display ="block"
        burgerBtn.style.display = "center left 50px center";
        isBurgerOpen = ture;
    }
    else(iBurgerOpen){
        burgerMenu.style.display = "none";
        burgerBtn.style.backgroundPosition = "center, center left 50px";
        isBurgerOpen = false;
    }
}