let scalcLabel = document.getElementById('scalc');

let descStyle = document.getElementById('scalcDesc').style;

const displayScalc = () => {
  if(descStyle.display === 'block') {
    descStyle.display = 'none';
  }else{
    descStyle.display = 'block';
  }
};

scalcLabel.addEventListener('click', displayScalc);