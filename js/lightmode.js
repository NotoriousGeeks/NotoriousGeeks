let isTrue = false;
function lightmode(){
    lightmodeswitch();
    let dropShadowLight = document.querySelectorAll(".light-drop-shadow");
    let lightBackground = document.querySelectorAll(".light-background");
    let color = document.querySelectorAll(".light-color");
    let lightMode = document.querySelectorAll(".light-mode");
    let menuBackgroundHover = document.querySelectorAll(".light-menu-background-hover");
    let menuBackground = document.querySelectorAll(".light-menu-background");
    let menuCardBackground = document.querySelectorAll(".light-menu-card-background");
    let footerBackground = document.querySelectorAll(".light-footer-background");
    let colorOrange = document.querySelectorAll(".light-color-orange");
    let boxShadow = document.querySelectorAll(".light-box-shadow");

    lightBackground.forEach(e=>{
        e.classList.toggle("light-mode-background");    
    })
    dropShadowLight.forEach(e => {
        e.classList.toggle("light-mode-drop-shadow");    
    });
    color.forEach(e=>{
        e.classList.toggle("light-mode-color");    
    })
    lightMode.forEach(e => {
        e.classList.toggle("light-mode-mode");    
    });
    menuBackgroundHover.forEach(e => {
        e.classList.toggle("light-mode-menu-background-hover");    
    });
    menuBackground.forEach(e=>{
        e.classList.toggle("light-mode-menu-background");
    })
    menuCardBackground.forEach(e => {
        e.classList.toggle("light-mode-menu-card-background");
    });
    footerBackground.forEach(e => {
        e.classList.toggle("light-mode-footer-background");
    });
    colorOrange.forEach(e => {
        e.classList.toggle("light-mode-color-orange");
    });
    boxShadow.forEach(e=>{
        e.classList.toggle("light-mode-box-shadow");
    })
}
function lightmodeswitch(){
    if(!isTrue){
        document.querySelector(".light-mode-switch").textContent = "DARK MODE";
        isTrue = true;
    }else{
        document.querySelector(".light-mode-switch").textContent = "LIGHT MODE";
        isTrue = false;
    }
}