const d = document;

function hamburgerMenu(panelbtn, navmain, menuLink) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(panelbtn) || e.target.matches(`${panelbtn} *`))
      d.querySelector(navmain).classList.toggle("is-active");
      d.querySelector(panelbtn).classList.toggle("is-active");

    if(e.target.matches(menuLink)){
      d.querySelector(navmain).classList.remove("is-active");
      d.querySelector(panelbtn).classList.remove("is-active");
    }
  });
}

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".nav-main", "nav-menu a");
  
});
