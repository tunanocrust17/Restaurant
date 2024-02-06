export default function menuPage() {
    
    const contentContaner = document.createElement('div');
    contentContaner.classList.add('content-container')
    
    const el = document.createElement('div');
    el.classList.add('menu-page');

    const title = document.createElement('h1');
    title.innerHTML = "Menu"
    el.appendChild(title);

    contentContaner.appendChild(el);

    return contentContaner;
};