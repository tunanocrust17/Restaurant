// import _ from 'lodash';
import './style.css';
import homePage from './home.js';
import menuPage from './menu.js';
import contactPage from './contact.js';

const contentDiv = document.getElementById('content');
 
contentDiv.appendChild(homePage());

const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const contactBtn = document.getElementById('contactBtn');


homeBtn.addEventListener('click', ()=>{
    contentDiv.replaceChildren(homePage());
})

menuBtn.addEventListener('click', ()=>{
    contentDiv.replaceChildren(menuPage());
})

contactBtn.addEventListener('click', ()=>{
    contentDiv.replaceChildren(contactPage());
})