import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'from', 'Home'], ' ');

  return element;
}

document.body.appendChild(component());

// async function getComponent() {
//   const element = document.createElement('div');
//   const { default: _ } = await import(
//     /* webpackChunkName: "lodash" */ 'lodash'
//   );

//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }

// getComponent().then(component => {
//   document.body.appendChild(component);
// });
