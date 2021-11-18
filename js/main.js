import Glide from 'https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.2.0/glide.min.js'


const d = document;
/* hamburger menu */
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

/* end hamburger menu */

/* slider */

new Glide('.glide').mount()


