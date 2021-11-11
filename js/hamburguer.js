export default function hamburgerMenu(panelbtn, navmain) {
    const d = document;
  
    d.addEventListener("click", (e)=>
    {
      if(e.target.matches(panelbtn))
      d.querySelector(navmain).classList.toggle("is-active")
    })
  }
  