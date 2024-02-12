export default function appTemp(title, description, price) {
    const appTitle = document.createElement('h2');
    appTitle.innerHTML = title;

    const appDescAndPrice = document.createElement('div');
    appDescAndPrice.classList.add('description-price');
    const appDesc = document.createElement('p');
    appDesc.innerHTML = description;
    const appPrice = document.createElement('p');
    appPrice.innerHTML = price;
    appDescAndPrice.appendChild(appDesc);
    appDescAndPrice.appendChild(appPrice);
    appTitle.appendChild(appDescAndPrice)

    return appTitle;
}