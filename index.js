
const mediaQuerySmall = window.matchMedia('(max-width: 428px)');
const mediaQueryMedium = window.matchMedia('(min-width: 429px) and (max-width: 880px)');

window.onload = function () {
  document.querySelector('input[type="checkbox"]').addEventListener("click", toggleNightMode);
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
if (mediaQuerySmall.matches) {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("chapter-header").style.fontSize = "0.9rem";
  } else {
    document.getElementById("chapter-header").style.fontSize = "1.1rem";
  } 
} else if (mediaQueryMedium.matches) {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("chapter-header").style.fontSize = "1.4rem";
  } else {
    document.getElementById("chapter-header").style.fontSize = "2rem";
  }
} else {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("chapter-header").style.fontSize = "1.5rem";
  } else {
    document.getElementById("chapter-header").style.fontSize = "2.2rem";
  }
  }
 } 

 function toggleNightMode() {
   if (document.querySelector('input[type="checkbox"]').checked) {
    document.querySelector("body").className = "body-night-mode";
    document.querySelector("#chapter-header").style.backgroundColor = "#1f3d47";
   } else {
    document.querySelector("body").className = "body-day-mode"; 
    document.querySelector("#chapter-header").style.backgroundColor = "rgb(104 161 156 / 65%)";
   }
 }

 

