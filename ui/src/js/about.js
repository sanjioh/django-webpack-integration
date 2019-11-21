import _ from 'lodash';
import '../css/style1.css';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'from', 'About'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
