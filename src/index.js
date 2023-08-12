const queryString = window.location.href;
// TODO change from 'index.html' to 'projects.html' if the projects section is moved
const isHome = queryString.includes("contact.html");

// colors
const hex = {
  backgroundLight: "#f2f2eb",
  light: "#f2f2eb",
  mediumLight: "#bfbfba",
  medium: "#737372",
  mediumDark: "#404040",
  backgroundDark: "#262626",
  dark: "#262626",
};

const hideShow = (hide, show) => {
  hide.hide();
  show.show();
};

// TODO #top border change

const body = $("body");
const p = $("p");
const footer = $("footer");
const topImage = $("#top");
const header = $("header");
const toggleLight = $("#toggle-light");
const light = $(".light");
const dark = $(".dark");
currentTheme == "dark" ? dark.hide() : light.hide();

const toggleTheme = () => {
  const hide = currentTheme
  currentTheme == "dark" ? hideShow(light, dark) : hideShow(dark, light)
  currentTheme = currentTheme == "dark" ? "light" : "dark"
  const show = currentTheme
  localStorage.setItem("__theme", currentTheme)
  document.body.setAttribute("data-theme", currentTheme);
  hideShow(hide, show)
};

toggleLight.on("click", toggleTheme);

//check if on homepage
if (!isHome) {
  const buttons = $("#project-menu").children();

  const selectButton = (n) => {
    return $(".project-button:nth-of-type("+n+")")
  }

  const selectProject = (n) => {
    return $(".project:nth-of-type("+n+")");
  };

  // set default button and project
  let activeButton = selectButton(1);
  let activeProject = selectProject(1);

  activeButton.css("background-color", hex.backgroundLight);
  activeButton.css("border", `2px solid ${hex.backgroundDark}`);
  activeButton.css("color", hex.backgroundDark);

  const handleClick = (event) => {

    const nextIndex = event.target.value;
    const nextButton = selectButton(nextIndex);
    const nextProject = selectProject(nextIndex);

    activeButton.css("background-color", "");
    activeButton.css("border", "");
    activeButton.css("color", "");

    nextButton.css("background-color", hex.backgroundLight);
    nextButton.css("border", `2px solid ${hex.backgroundDark}`);
    nextButton.css("color", hex.backgroundDark);

    hideShow(activeProject, nextProject);

    activeButton = nextButton;
    activeProject = nextProject;
  };

  buttons.on("click", handleClick);

}

//test

const theme = localStorage.getItem("__theme");
console.log(theme)