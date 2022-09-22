const proj1 = $('#proj1');
const desc1 = $('#desc1');
const proj2 = $('#proj2');
const desc2 = $('#desc2');
let proj3 = $('#proj3');
let desc3 = $('#desc3');

/* let scroll;

function setScroll() {
    let header = document.querySelector('header');
    scroll = scrollY;
    if(scroll <= 0) {
      header.style.opacity = '1';
    } else {
      header.style.opacity = '0.75';
    }
}



document.addEventListener('scroll', setScroll); */



proj1.on('click', () => {
  desc1.toggle();
});

proj2.on('click', () => {
  desc1.hide();
  desc2.toggle();
});

proj3.on('click', () => {
  desc1.hide();
  desc3.toggle();
});



/* for(let i = 0; i < projects.length; i++){
  console.log(desc[i]);
  projects[i].addEventListener('click', toggle(i));
} */