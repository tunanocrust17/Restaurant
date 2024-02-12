import appTemp from "./appetizerTemp";
import appetizerList from "./appetizerList";

export default function menuPage() {
    
    const contentContaner = document.createElement('div');
    contentContaner.classList.add('content-container')
    
    const el = document.createElement('div');
    el.classList.add('menu-page');

    const title = document.createElement('h1');
    title.innerHTML = "Menu"
    el.appendChild(title);

    //menu container
    const menuContainerDiv = document.createElement('div');
    menuContainerDiv.classList.add('menu-container');

    //appetizer container
    const appContainer = document.createElement('div');
    appContainer.classList.add('app-container');

    //appetizer one build
    const appOne = document.createElement('h2');
    appOne.innerHTML = "Ticklish Tuna Tidbits"
    

    const appOneDescAndPrice = document.createElement('div');
    appOneDescAndPrice.classList.add('description-price')
    const appOneDesc = document.createElement('p');
    appOneDesc.innerHTML ="Description: Bite-sized pieces of tuna marinated in a zesty blend of soy sauce, ginger, and garlic, sprinkled with sesame seeds for extra crunch. Served with a tangy lime wedge for a burst of flavor."
    const appOnePrice = document.createElement('p');
    appOnePrice.innerHTML = "$7.77";
    appOneDescAndPrice.appendChild(appOneDesc);
    appOneDescAndPrice.appendChild(appOnePrice);
    appOne.appendChild(appOneDescAndPrice)
    appContainer.appendChild(appOne);

    //appetizer 2 test
    appContainer.appendChild(appTemp(appetizerList()[0].name, appetizerList()[0].description, appetizerList()[0].price));


    menuContainerDiv.appendChild(appContainer);
    el.appendChild(menuContainerDiv);
    contentContaner.appendChild(el);

    return contentContaner;
};