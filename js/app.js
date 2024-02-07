var openMenu = document.getElementsByClassName("openMenu")[0];
var closeMenu = document.getElementsByClassName("closeMenu")[0];
var mblMenu = document.getElementsByClassName("mblMenu")[0];

// mblMenu.style.top = "-100%";

openMenu.addEventListener("click" , function(){
    mblMenu.style.top = "0%";
})

closeMenu.addEventListener("click" , function(){
    mblMenu.style.top = "-100%";
})


var cartMenu = document.getElementsByClassName("cartMenu")[0];
var cart = document.getElementsByClassName("cart")[0];
var CloseCart = document.getElementsByClassName("CloseCart")[0];

// cartMenu.style.display = "none";

cart.addEventListener("click" , function(){
    if(screen.width >= 900 ){
        cartMenu.style.transform = 'translateX(78.7vw)';
    }
    else{
        cartMenu.style.transform = 'translateX(50.7vw)';
    }
})

CloseCart.addEventListener("click" , function(){
    cartMenu.style.transform = 'translateX(100vw)'
})