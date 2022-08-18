let scalcLabel = document.getElementById('scalc');
let motiLabel = document.getElementById('motiquotes')

let scalcDesc = document.getElementById('scalcDesc');
let motiDesc = document.getElementById('motiDesc')

const display = (element) => {
  if(element.style.display === 'block') {
    element.style.display = 'none';
  }else{
    element.style.display = 'block';
  }
};

const displayScalc = () => {
  return display(scalcDesc);
}

const displayMoti = () => {
  return display(motiDesc);
};

scalcLabel.addEventListener('click', displayScalc);
motiLabel.addEventListener('click', displayMoti);