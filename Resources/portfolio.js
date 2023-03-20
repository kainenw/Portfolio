const projs = document.getElementsByClassName("project")

for(let i = 0; i < projs.length; i++){
  console.log(desc[i]);
  projs[i].addEventListener('click', toggle(i));
}
