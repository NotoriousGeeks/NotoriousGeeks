let runOnce = false;

document.querySelector(".light-mode-switch").addEventListener("click", ()=>{
    lightmode();
    localStorage.darkMode=(localStorage.darkMode=="true")?"false":"true";
})
function lightmode(){
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
    if(localStorage.darkMode == "true"){
        document.querySelector(".light-mode-switch").textContent = "DARK MODE";
    }
    if(localStorage.darkMode == "false"){
        document.querySelector(".light-mode-switch").textContent = "LIGHT MODE";
    }
}
window.onload= ()=>{
    console.log(localStorage.darkMode, runOnce)
    if(localStorage.darkMode=="true" && runOnce == false) {
      lightmode();
        runOnce = "true";
        if(localStorage.darkMode == "true"){
            document.querySelector(".light-mode-switch").textContent = "LIGHT MODE";
        }
        if(localStorage.darkMode == "false"){
            document.querySelector(".light-mode-switch").textContent = "DARK MODE";
        }
    }
  };