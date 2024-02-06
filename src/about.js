export default function aboutPage() {

    const contentContaner = document.createElement('div');
    contentContaner.classList.add('content-container')

    const el = document.createElement('div');
    el.classList.add('about-page');

    const title = document.createElement('h1');
    title.innerHTML = "Contact The Giggling Grouper"
    el.appendChild(title);

    contentContaner.appendChild(el);
    
    return contentContaner;
}