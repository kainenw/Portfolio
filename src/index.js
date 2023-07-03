const queryString = window.location.href;
// change from 'index.html' to 'projects.html' if the projects section is moved
const isHome = queryString.includes("contact.html");
console.log(queryString);
console.log(!isHome);

if (!isHome) {
  let projectMenu = document.getElementById("project-menu");
  const buttons = projectMenu.querySelectorAll("button");

  const projects = document.getElementsByClassName("project");

  let prevActive = buttons[0];
  let prevValue = 0;

  const activate = (event) => {
    const index = event.target.value;
    prevActive.classList.remove("active");
    projects[prevValue].classList.remove("active");
    event.currentTarget.classList.add("active");
    projects[index].classList.add("active");
    prevActive = event.currentTarget;
    prevValue = index;
  };

  for (const button of buttons) {
    button.addEventListener("click", activate);
  }
}

// TODO css styling for light mode
// toggle dark/light mode
let lightMode = false;

const body = document.body;
const toggleLight = document.getElementById("toggle-light");

const toggle = (event) => {
  if (lightMode) {
    lightMode = false;
    body.classList.remove("light");
    event.target.src = "src/Img/dark/dark-icon.png";
  } else {
    lightMode = true;
    body.classList.add("light");
    event.target.src = "src/Img/light/light-icon.png";
  }
};

toggleLight.addEventListener("click", toggle);
