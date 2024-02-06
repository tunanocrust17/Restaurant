export default function aboutPage() {
    const el = document.createElement('div');
    el.classList.add('about-page');

    const title = document.createElement('h1');
    title.innerHTML = "Contact The Giggling Grouper"
    el.appendChild(title);

    return el;
}