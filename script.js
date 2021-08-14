let menu = document.querySelector(".mobilemenu");
let ham = document.querySelector(".ham");
let iconclose = document.querySelector(".iconclose");
let iconmenu = document.querySelector(".iconmenu");

ham.addEventListener("click" ,toggleMenu);

menu.classList.contains("showMenu");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        
        //  iconclose.style.display = "none";
        iconmenu.style.display = "block";
    }
    
    else {
      menu.classList.add("showMenu");
    iconclose.style.display = "block";
      iconmenu.style.display = "none";
    }
     }

  // let menuLink = document.querySelectorAll(".menuLink");

  // menuLink.forEach(
  //     function(menuLink) {
  //         menuLink.addEventListener("click" , toggleMenu);
  //     }
  // )