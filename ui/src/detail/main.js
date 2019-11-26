import _ from 'lodash';
import '@/css/style2.css';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'from', 'Detail'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
