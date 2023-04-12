/* const header = document.querySelector("header");
const slideContainer = document.getElementById("slide-container");
const about = document.getElementById("about");

let minimized = false;

const minimizeHeader = (event) => {
  minimized = window.scrollY < 0;
  if (minimized) {
    header.style.top = "0";
    slideContainer.style.top = "22rem";
    slideContainer.style.overflow = "scroll";
    minimized = false;
  } else if (true) {
    header.style.top = "-22rem";
    slideContainer.style.top = "0";
    slideContainer.style.overflow = "auto";
    about.scrollTop = 0;
    minimized = true;
  }
};

document.body.addEventListener("scroll", minimizeHeader);
slideContainer.addEventListener("scroll", minimizeHeader); */

//new card js

const options = document.getElementsByClassName("option");

let prevActive = options[0];

const activate = (event) => {
  prevActive.classList.remove("active");
  event.currentTarget.classList.add("active");
  prevActive = event.currentTarget;
};

for (let option of options) {
  option.addEventListener("click", activate);
}

let arr = [1, 2, 3, 4, 5];

console.log(arr[-1]);
