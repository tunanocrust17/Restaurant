export default function menuPage() {
    const el = document.createElement('div');
    el.classList.add('menu-page');

    const title = document.createElement('h1');
    title.innerHTML = "Menu"
    el.appendChild(title);

    return el;
    // alert("you've been clicked")
};