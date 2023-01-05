const menuList = 
[
    [
        [{"name":"Hot Choco","price":"P50.00"},{"name":"Not Available","price":"Not Available"},{"name":"Not Available","price":"Not Available"},{"name":"Not Available","price":"Not Available"}],//HOT DRINKS
        [{"name":"Java Chip","price":"P85.00"},{"name":"Coffee Jelly","price":"P85.00"},{"name":"Not Available","price":"Not Available"},{"name":"Not Available","price":"Not Available"}],//BLENDED COFFEE
        [{"name":"Not Available","price":"Not Available"},{"name":"Not Available","price":"Not Available"},{"name":"Not Available","price":"Not Available"},{"name":"Not Available","price":"Not Available"}],//OVER ICE
        [{"name":"choco","price":"P85.00"},{"name":"Vanilla","price":"P85.00"},{"name":"Cookies & Cream","price":"P85.00"},{"name":"Not Available","price":"Not Available"}]//BLENDED CREAM
    ],
    [
        [{"name":"Cabbage Sandwich","price":"P75.00"},{"name":"Hotdog & Cheese","price":"P75.00"},{"name":"Ham & Cheese","price":"P75.00"},{"name":"Not Available","price":"Not Available"}],//KOREAN TOASTS
        [{"name":"Ham, Egg, and Rice","price":"P75.00"},{"name":"Hotdog, Egg, and Rice","price":"P75.00"},{"name":"Shanghai, Egg, and Rice","price":"P75.00"},{"name":"Nuggets, Egg, and Rice","price":"P75.00"}],//RICE MEALS
        [{"name":"Not Available","price":"Not Available"},{"name":"Not Available","price":"Not Available"},{"name":"Not Available","price":"Not Available"},{"name":"Not Available","price":"Not Available"}],
        [{"name":"Not Available","price":"Not Available"},{"name":"Not Available","price":"Not Available"},{"name":"Not Available","price":"Not Available"},{"name":"Not Available","price":"Not Available"}]
    ]
]
let firstMenuImg = document.getElementsByClassName("first-menu-img");
let secondMenuImg = document.getElementsByClassName("second-menu-img");

let firstMenuText = document.getElementsByClassName("first-menu-text");
let secondMenuText = document.getElementsByClassName("second-menu-text");

let firstPrice = document.getElementsByClassName("price-first");
let secondPrice = document.getElementsByClassName("price-second");


for(let i = 0;i<firstMenuImg.length;i++){
    firstMenuImg.item(i).src="../img/firstmenu/"+(menuList[0][0][i].name).toString()  + ".png";
}
for(let i = 0;i<firstMenuText.length;i++){
    firstMenuText.item(i).textContent=menuList[0][0][i].name.charAt(0).toUpperCase() + menuList[0][0][i].name.slice(1);
    firstPrice.item(i).textContent=menuList[0][0][i].price.charAt(0).toUpperCase() + menuList[0][0][i].price.slice(1);
}
for(let i = 0;i<secondMenuImg.length;i++){
    secondMenuImg.item(i).src="../img/firstmenu/"+(menuList[1][0][i].name).toString() + ".png";
}
for(let i = 0;i<secondMenuText.length;i++){
    secondMenuText.item(i).textContent=(menuList[1][0][i].name).toString().charAt(0).toUpperCase() + (menuList[1][0][i].name).toString().slice(1);
    secondPrice.item(i).textContent=menuList[1][0][i].price.charAt(0).toUpperCase() + menuList[1][0][i].price.slice(1);
}   
function changeMenu(type, contentNum){
    if(type==0){
        for(let i = 0;i<firstMenuImg.length;i++){
            firstMenuImg.item(i).src="../img/firstmenu/"+(menuList[type][contentNum][i].name).toString()  + ".png";
        }
        for(let i = 0;i<firstMenuText.length;i++){
            firstMenuText.item(i).textContent=menuList[type][contentNum][i].name.charAt(0).toUpperCase() + menuList[type][contentNum][i].name.slice(1);
            firstPrice.item(i).textContent=menuList[type][contentNum][i].price.charAt(0).toUpperCase() + menuList[type][contentNum][i].price.slice(1);
        }
    }else{
        for(let i = 0;i<secondMenuImg.length;i++){
            secondMenuImg.item(i).src="../img/firstmenu/"+(menuList[type][contentNum][i].name).toString() + ".png";
        }
        for(let i = 0;i<secondMenuText.length;i++){
            secondMenuText.item(i).textContent=(menuList[type][contentNum][i].name).toString().charAt(0).toUpperCase() + (menuList[type][contentNum][i].name).toString().slice(1);
            secondPrice.item(i).textContent=menuList[type][contentNum][i].price.charAt(0).toUpperCase() + menuList[type][contentNum][i].price.slice(1);
        }   
    }
}