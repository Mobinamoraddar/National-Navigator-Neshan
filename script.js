let menu = document.querySelector(".mobilemenu");
let ham = document.querySelector(".ham");
let iconclose = document.querySelector(".iconclose");
let iconmenu = document.querySelector(".iconmenu");

ham.addEventListener("click" ,toggleMenu);
iconclose.addEventListener("click",toggleMenu);

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        iconmenu.style.display = "block";
    }
    
    else {
      menu.classList.add("showMenu");
      iconmenu.style.display = "none";
    }
     }
