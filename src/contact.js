// import { first } from "lodash";

export default function contactPage() {

    const contentContaner = document.createElement('div');
    contentContaner.classList.add('content-container')

    const el = document.createElement('div');
    el.classList.add('contact-page');

    const title = document.createElement('h1');
    title.innerHTML = "Contact The Giggling Grouper"
    el.appendChild(title);

    const contactContainerDiv = document.createElement('div');
    contactContainerDiv.classList.add('contact-container')

    //first contact div and details
    const firstContactDiv = document.createElement('div');
    const firstContactTitle = document.createElement('h2');
    firstContactTitle.textContent = "Title: Head Chef";
    firstContactDiv.appendChild(firstContactTitle);

    const firstContactName = document.createElement('h4');
    firstContactName. innerHTML = "Name: Captain Clownfish";
    firstContactDiv.appendChild(firstContactName);

    const firstContactEmail = document.createElement('h4');
    firstContactEmail.innerHTML = "Email: captainclownfish@gigglinggrouper.com";
    firstContactDiv.appendChild(firstContactEmail);

    const firstContactPhone = document.createElement('h4');
    firstContactPhone.innerHTML = "Phone: 555-123-4567";
    firstContactDiv.appendChild(firstContactPhone);

    //second contact div and details
    const secondContactDiv = document.createElement('div');
    const secondContactTitle = document.createElement('h2');
    secondContactTitle.innerHTML = "Title: Customer Relations Manager";
    secondContactDiv.appendChild(secondContactTitle);

    const secondContactName = document.createElement('h4');
    secondContactName.innerHTML = "Name: Sally Seashell";
    secondContactDiv.appendChild(secondContactName);

    const secondContactEmail = document.createElement('h4');
    secondContactEmail.innerHTML = "Email: sallyseashell@gigglinggrouper.com";
    secondContactDiv.appendChild(secondContactEmail);

    const secondContactPhone = document.createElement('h4');
    secondContactPhone.innerHTML = "Phone: 555-987-6543";
    secondContactDiv.appendChild(secondContactPhone);

    //third contact div and details
    const thirdContactDiv = document.createElement('div');
    const thirdContactTitle = document.createElement('h2');
    thirdContactTitle.innerHTML = "Title: Entertainment Coordinator";
    thirdContactDiv.appendChild(thirdContactTitle);

    const thirdContactName = document.createElement('h4');
    thirdContactName.innerHTML = "Name: Finley Funnybone";
    thirdContactDiv.appendChild(thirdContactName);

    const thirdContactEmail = document.createElement('h4');
    thirdContactEmail.innerHTML = "Email: finleyfunnybone@gigglinggrouper.com";
    thirdContactDiv.appendChild(thirdContactEmail);

    const thirdContactPhone = document.createElement('h4');
    thirdContactPhone.innerHTML = "Phone: 555-456-7890";
    thirdContactDiv.appendChild(thirdContactPhone);




    contactContainerDiv.appendChild(firstContactDiv);
    contactContainerDiv.appendChild(secondContactDiv);
    contactContainerDiv.appendChild(thirdContactDiv);
    el.appendChild(contactContainerDiv);
    contentContaner.appendChild(el);
    
    return contentContaner;
}