 var tolbar = document.querySelector(".tolbar");
var nav = document.querySelector(".nav");
 var crossbtn = document.querySelector(".crossbtn");

const togglernavbar = () =>{
nav.style.display ="flex";
crossbtn.style.display ="flex";
tolbar.style.display ="none";

}
const clossnavbar = () =>{
  nav.style.display ="none";
  tolbar.style.display ="flex";
  crossbtn.style.display ="none";
  }


tolbar.addEventListener("click", () => togglernavbar());
crossbtn.addEventListener("click",() =>clossnavbar());
