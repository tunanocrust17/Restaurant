
export default function homePage() {

    //Create the div for the content of the home page
    const el = document.createElement('div');
    el.classList.add('welcome-page');
    
    //Create and append the header of the home page
    const title = document.createElement('h1');
    title.innerHTML = "Welcome to The Giggling Grouper"
    el.appendChild(title);

    const descriptionDiv = document.createElement('div');
    const descriptionH2 = document.createElement('h2');
    descriptionH2.innerHTML = "Welcome to The Giggling Grouper, where the laughter is as abundant as the fish in our tanks! Dive into a sea of silliness as you reel in the freshest catches with a side of laughter. Our fishy friends aren't the only ones with a sense of humor – our staff will have you hooked with their fin-tastic jokes and bubbly personalities."
    descriptionDiv.appendChild(descriptionH2)
    el.appendChild(descriptionDiv);

    return el;
    
}
