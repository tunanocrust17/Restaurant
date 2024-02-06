// import _ from 'lodash';
import './style.css';
import homePage from './home.js';
import menuPage from './menu.js';
import aboutPage from './about.js';

const contentDiv = document.getElementById('content');
 
contentDiv.appendChild(homePage());

const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');


homeBtn.addEventListener('click', ()=>{
    contentDiv.replaceChildren(homePage());
})

menuBtn.addEventListener('click', ()=>{
    contentDiv.replaceChildren(menuPage());
})

aboutBtn.addEventListener('click', ()=>{
    contentDiv.replaceChildren(aboutPage());
})