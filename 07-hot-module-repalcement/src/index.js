import './style.css';
import counter from './counter';
import number from './number'

// let btn = document.createElement('button');
// btn.innerHTML = 'button';
// document.body.appendChild(btn);

// btn.addEventListener('click', () => {
//   let div = document.createElement('div');
//   div.innerHTML = 'item';
//   document.body.appendChild(div);
// })

counter();
number();

if(module.hot) {
  module.hot.accept('./number.js', () => {
    document.body.removeChild(document.getElementById('number'))
    number();
  });
}
