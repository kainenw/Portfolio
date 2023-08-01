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

// toggle dark/light mode
let darkMode = true;

const body = $("body");
const p = $("p");
const footer = $("footer");
const topImage = $("#top");
const header = $("header");
const toggleLight = $("#toggle-light");
const light = $(".light");
const dark = $(".dark");
light.hide();

const toggle = () => {
  if (darkMode) {
    hideShow(dark, light);
    body.css("background-color", "rgb(191,191,186)");
    body.css("color", "rgb(38,38,38)");
    p.css("color", "rgb(38,38,38)");
    footer.css("color", "rgb(38,38,38)");
  } else {
    hideShow(light, dark);
    body.css("background-color", "");
    body.css("color", "rgb(191,191,186)");
    p.css("color", "#f2f2eb");
    footer.css("color", "#f2f2eb");
  }
  darkMode = !darkMode;
};

toggleLight.on("click", toggle);

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
