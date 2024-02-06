// import _ from 'lodash';
import './style.css';
import homePage from './home.js';

// function component() {
//     const element = document.createElement('div');
//    const btn = document.createElement('button');
 
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
 
//    btn.innerHTML = 'Click me and check the console!';
//    btn.onclick = printMe;
 
//    element.appendChild(btn);
 
//     return element;
//   }
 
  document.getElementById('content').appendChild(homePage());