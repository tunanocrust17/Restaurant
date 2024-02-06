
export default function homePage() {

    const contentContaner = document.createElement('div');
    contentContaner.classList.add('content-container')
    //Create the div for the content of the home page
    const el = document.createElement('div');
    el.classList.add('welcome-page');
    
    //Create and append the header of the home page
    const title = document.createElement('h1');
    title.innerHTML = "Welcome to The Giggling Grouper"
    el.appendChild(title);

    const descriptionDiv = document.createElement('div');
    const firstDescriptionH2 = document.createElement('h2');
    firstDescriptionH2.innerHTML = "Welcome to The Giggling Grouper, where the laughter is as abundant as the fish in our tanks! Dive into a sea of silliness as you reel in the freshest catches with a side of laughter. Our fishy friends aren't the only ones with a sense of humor – our staff will have you hooked with their fin-tastic jokes and bubbly personalities."
    descriptionDiv.appendChild(firstDescriptionH2);
    
    const secondDescriptionH2 = document.createElement('h2');
    secondDescriptionH2.innerHTML = "Picture this: a whimsical underwater wonderland where giggling groupers host stand-up comedy nights, and the menu is a lineup of pun-derful dishes. From our 'Cod-awful Jokes' calamari to the 'Sea-rious Laughter Lobster,' every bite is seasoned with a dash of humor.";
    descriptionDiv.appendChild(secondDescriptionH2)

    const thirdDescriptionH2 = document.createElement('h2');
    thirdDescriptionH2.innerHTML = "As you take a seat in our coral-colored chairs, you'll be surrounded by walls adorned with fishy puns and goofy aquatic artwork. Our servers, dressed in fisherman chic, are here to make your dining experience as memorable as a fish trying to tell a joke.";
    descriptionDiv.appendChild(thirdDescriptionH2)

    const fourthDescriptionH2 = document.createElement('h2');
    fourthDescriptionH2.innerHTML = "Whether you're a seafood enthusiast or just in the mood for a good laugh, The Giggling Grouper is the plaice to be. Prepare to leave with a belly full of delicious seafood and a heart full of laughter – it's an ocean of joy in every bite!";
    descriptionDiv.appendChild(fourthDescriptionH2)
    
    el.appendChild(descriptionDiv);

    contentContaner.appendChild(el);

    return contentContaner;
    
}
