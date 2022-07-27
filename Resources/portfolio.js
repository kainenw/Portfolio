console.log('initial test');
let scalcLabel = document.getElementById('scalc');
let scalcDesc = document.getElementById('scalcDesc');
let descDisplay = scalcDesc.style.display;

const displayScalc = () => {
  console.log('function test')
  if(descDisplay === 'none'){
    descDisplay = 'block';
  }else{
    descDisplay = 'none';
  }
  scalcDesc.style.display = descDisplay;
  scalcDesc.style.transition = "all 5s linear";
};

scalcLabel.addEventListener('click', displayScalc);