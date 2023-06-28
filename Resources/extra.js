/* let scroll;

function setScroll() {
    let header = document.querySelector('header');
    scroll = scrollY;
    if(scroll <= 0) {
      header.style.opacity = '1';
    } else {
      header.style.opacity = '0.75';
    }
} */

/* let slideIndex = 1;
let oldScroll = 0;


window.onscroll = function (event) {
  target = event.target;
  // print "false" if direction is down and "true" if up
  let isDown = oldScroll < this.scrollY;
  if (isDown) {
    showDivs(+1)
  } else {
    showDivs(-1)
  }
  console.log(isDown)
  console.log(this.scrollY)
  oldScroll = this.scrollY;
};

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

showDivs(slideIndex); */

