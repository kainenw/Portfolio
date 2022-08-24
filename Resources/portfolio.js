let projects = document.getElementsByClassName('project');
let desc = document.getElementsByClassName('desc');

const display = (i) => {
  for(let j = 0; j < projects.length; j++) {
    desc[j].style.display = 'none';
  }
  desc[i].style.display === 'block' ? desc[i].style.display = 'none' : desc[i].style.display = 'block';
}

for(let i = 0; i < projects.length; i++) {
  projects[i].addEventListener('click', () => {display(i)});
}