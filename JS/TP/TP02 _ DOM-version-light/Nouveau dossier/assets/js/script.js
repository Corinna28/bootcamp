// Définition du footer
let footer = document.createElement("footer");


// Définition de la nav

let socialNav = document.createElement("nav");
socialNav.className = 'social_nav';

let ul = document.createElement('ul');

// Création de facebook

let fbLi = document.createElement('li');
let fbLink = document.createElement('a');
fbLink.href = '#';
fbLink.title = 'Facebook';
let fbIcon = document.createElement('i');
fbIcon.className = 'fa-brands fa-facebook';

// Création de instagram

let instaLi = document.createElement('li');
let instaLink = document.createElement('a');
instaLink.href = '#';
instaLink.title = 'instagram';
let instaIcon = document.createElement('i');
instaIcon.className = 'fa-brands fa-instagram';

// Création de pinterest

let pinterestLi = document.createElement('li');
let pinterestLink = document.createElement('a');
pinterestLink.href = '#';
pinterestLink.title = 'Pinterest';
let pinterestIcon = document.createElement('i');
pinterestIcon.className = 'fa-brands fa-pinterest';

// Création de l'autre nav bar

let otherNav = document.createElement('nav');
otherNav.className = 'other_nav';

let otherUl = document.createElement('ul');

// Création du copyright

let copyrightLi = document.createElement('li');
copyrightLi.className = 'copyright';
copyrightLi.textContent = '@copyright HedgehogInLove';

// Création du CGU

let cguLi = document.createElement('li');
let cguLink = document.createElement('a');
cguLink.href = '#';
cguLink.textContent = 'C.G.U';

// Création du Mentions légale

let legalLi = document.createElement('li');
let legalLink = document.createElement('a');
legalLink.href = '#';
legalLink.textContent = 'Mentions légales';


// Afficher dans le body

footer.appendChild(socialNav);
footer.appendChild(otherNav);

socialNav.appendChild(ul);
otherNav.appendChild(otherUl);

fbLink.appendChild(fbIcon);
fbLi.appendChild(fbLink);
ul.appendChild(fbLi);

instaLink.appendChild(instaIcon);
instaLi.appendChild(instaLink);
ul.appendChild(instaLi);

pinterestLink.appendChild(pinterestIcon);
pinterestLi.appendChild(pinterestLink);
ul.appendChild(pinterestLi);

otherUl.appendChild(copyrightLi);

cguLi.appendChild(cguLink);
otherUl.appendChild(cguLi);

legalLi.appendChild(legalLink);
otherUl.appendChild(legalLi);

document.body.appendChild(footer)

// Style css

let style = document.createElement('style');

style.textContent = `
footer{
    border: solid gray 3px;
}
footer nav ul{
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
}

footer nav ul a i{
    font-size: 1.5em;
}

footer nav ul a{
    text-decoration: none;
    padding: 30px;
    color: black;
}

footer nav.other_nav ul li.copyright{
    color: tomato;
}
`;

document.head.appendChild(style);