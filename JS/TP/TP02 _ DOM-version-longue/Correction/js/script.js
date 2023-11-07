// Création des noeuds principaux : header / section*3 / footer et affectation des attributs id
let headerPage = document.createElement('header');
let firstSection = document.createElement('section');
firstSection.setAttribute('id','hedghog');
let secondSection = document.createElement('section');
secondSection.setAttribute('id','contact');
let thirdSection = document.createElement('section');
thirdSection.setAttribute('id','register');
let footerPage = document.createElement('footer');

document.querySelector('body').append(headerPage,firstSection,secondSection,thirdSection,footerPage);


//--------------------------------------- Construction du header
// div banniere
let divBanniere = document.createElement('div');
divBanniere.classList.add('banniere');


// div overlay
let divOverlay = document.createElement('div');
divOverlay.classList.add('overlay');


// h1
let titleMain = document.createElement('h1');
titleMain.textContent = 'Refuge pour hérissons';

        
// nav nav_main
let navHeader = document.createElement('nav');
navHeader.classList.add('nav_main');
// ul
let ulNavMain = document.createElement('ul');
// li*4
let liNavMain1 = document.createElement('li');
let liNavMain2 = document.createElement('li');
let liNavMain3 = document.createElement('li');
let liNavMain4 = document.createElement('li');
//a*4
let aNavMain1 = document.createElement('a');
aNavMain1.setAttribute('href','#home');
aNavMain1.textContent = 'Accueil';
let aNavMain2 = document.createElement('a');
aNavMain2.setAttribute('href','#hedghog');
aNavMain2.textContent = 'Nos hérissons du refuge';
let aNavMain3 = document.createElement('a');
aNavMain3.setAttribute('href','#contact');
aNavMain3.textContent = 'Nos coordonnées';
let aNavMain4 = document.createElement('a');
aNavMain4.setAttribute('href','#register');
aNavMain4.textContent = 'Inscription';

// Ajout des différents éléments du header dans la page
document.querySelector('header').append(divBanniere, navHeader);
document.querySelector('div.banniere').append(divOverlay);
document.querySelector('div.overlay').append(titleMain);

document.querySelector('nav.nav_main').append(ulNavMain);
document.querySelector('nav.nav_main>ul').append(liNavMain1,liNavMain2,liNavMain3,liNavMain4);
document.querySelector('nav.nav_main>ul>li').append(aNavMain1);
document.querySelector('nav.nav_main>ul').children[1].append(aNavMain2);
document.querySelector('nav.nav_main>ul').children[2].append(aNavMain3);
document.querySelector('nav.nav_main>ul').children[3].append(aNavMain4);

//--------------------------------------- Construction de la section Hedghog

// h2 
let titleHedghog = document.createElement('h2');
titleHedghog.textContent = ' Nos hérissons du refuge';
// i
let iconHedghog = document.createElement('i')
iconHedghog.classList.add('fa-solid','fa-house');

// div
let divHedghog = document.createElement('div');
// img
let imgHedghog = document.createElement('img');
imgHedghog.setAttribute('src','img/img-01.jpg');
imgHedghog.setAttribute('alt','notre mascotte hérisson');
// p
let paragraphHedghog = document.createElement('p');
paragraphHedghog.textContent = (`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis doloribus voluptatum, repellendus hic vel accusantium excepturi perferendis corporis velit recusandae eaque vero nemo. Rerum unde ut a harum hic voluptatum!  voluptatum, repellendus hic vel accusantium excepturi perferendis corporis velit recusandae e  voluptatum, repellendus hic vel accusantium excepturi perferendis corporis velit recusandae e  voluptatum, repellendus hic vel accusantium excepturi perferendis corporis velit recusandae e Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos at consequatur sunt, ad natus quod blanditiis amet dolorem pariatur! Dicta assumenda praesentium eum. Porro sit ad nisi consequuntur hic nobis?
Pariatur voluptatum quas cupiditate. Deleniti obcaecati, accusantium asperiores fugiat id autem odit sed beatae repellendus rem sit, veritatis porro eveniet sequi vero, voluptatem reiciendis eius aspernatur numquam officiis dolore repellat.Facere aspernatur maiores, earum dolore debitis similique soluta molestiae provident minus odit facilis quas magni cupiditate ex ducimus, quasi rem sint neque eius dolorem minima voluptatum fuga! Earum, corporis voluptatum?`);

// Ajout des différents éléments de la section Hedghog dans la page
document.querySelector('section#hedghog').append(titleHedghog);
document.querySelector('section#hedghog h2').prepend(iconHedghog);
document.querySelector('section#hedghog').append(divHedghog);
document.querySelector('section#hedghog div').append(imgHedghog, paragraphHedghog);


//--------------------------------------- Construction de la section contact


// h2 
let titleContact = document.createElement('h2');
titleContact.textContent = ' Nos coordonnées';
// i
let iconContact = document.createElement('i')
iconContact.classList.add('fa-solid','fa-location-dot');

// p
let firstParagraphContact = document.createElement('p');
firstParagraphContact.textContent = (`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis doloribus voluptatum, repellendus hic vel accusantium excepturi perferendis corporis velit recusandae eaque vero nemo. Rerum unde ut a harum hic voluptatum!  voluptatum, repellendus hic vel accusantium excepturi perferendis corporis velit recusandae e  voluptatum, repellendus hic vel accusantium excepturi perferendis corporis velit recusandae e  voluptatum, repellendus hic vel accusantium excepturi perferendis corporis velit recusandae `);
let secondParagraphContact = document.createElement('p');
secondParagraphContact.textContent = (`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis doloribus voluptatum, repellendus hic vel accusantium excepturi perferendis corporis velit recusandae eaque vero nemo. Rerum unde ut a harum hic voluptatum!  voluptatum, repellendus hic vel accusantium excepturi perferendis corporis velit recusandae e  voluptatum, repellendus hic vel accusantium excepturi perferendis corporis velit recusandae e  voluptatum, repellendus hic vel accusantium excepturi perferendis corporis velit recusandae `);

// Ajout des différents éléments de la section contact dans la page
document.querySelector('section#contact').append(titleContact, firstParagraphContact, secondParagraphContact);
document.querySelector('section#contact h2').prepend(iconContact);


//--------------------------------------- Construction de la section register


// h2 
let titleRegister = document.createElement('h2');
titleRegister.textContent = ' Inscription';
// i
let iconRegister = document.createElement('i')
iconRegister.classList.add('fa-solid','fa-pen-to-square');

//form
let formRegister = document.createElement('form');
// div
let divRegister = document.createElement('div');
let secondDivRegister = document.createElement('div');
let thirdDivRegister = document.createElement('div');
//label
let labelMail = document.createElement('label');
labelMail.setAttribute('for','mail');
labelMail.textContent = 'Mail';

let labelPwd = document.createElement('label');
labelPwd.setAttribute('for','pwd');
labelPwd.textContent = 'Mot de passe';

//input
let inputMail = document.createElement('input');
inputMail.setAttribute('id','mail');
inputMail.setAttribute('name','mail');
inputMail.setAttribute('type','email');

let inputPwd = document.createElement('input');
inputPwd.setAttribute('id','pwd');
inputPwd.setAttribute('name','pwd');
inputPwd.setAttribute('type','text');

let inputSubmit = document.createElement('input');
inputSubmit.setAttribute('type','submit');

// Ajout des différents éléments de la section Register dans la page
document.querySelector('section#register').append(titleRegister, formRegister);
document.querySelector('section#register h2').prepend(iconRegister);

document.querySelector('section#register form').append(divRegister, secondDivRegister, thirdDivRegister);
document.querySelector('section#register form div').append(labelMail, inputMail);
document.querySelector('section#register form').children[1].append(labelPwd, inputPwd);
document.querySelector('section#register form').children[2].append(inputSubmit);

//--------------------------------------- Construction du footer


// nav social_nav
let socialNav = document.createElement('nav');
socialNav.classList.add('social_nav');
// ul
let ulSocialNav = document.createElement('ul');
// li*3
let liSocialNav1 = document.createElement('li');
let liSocialNav2 = document.createElement('li');
let liSocialNav3 = document.createElement('li');
//a*3
let aSocialNav1 = document.createElement('a');
aSocialNav1.setAttribute('href','#');
aSocialNav1.setAttribute('title','Facebook');

let aSocialNav2 = document.createElement('a');
aSocialNav2.setAttribute('href','#');
aSocialNav2.setAttribute('title','Instagram');

let aSocialNav3 = document.createElement('a');
aSocialNav3.setAttribute('href','#');
aSocialNav3.setAttribute('title','Pinterest');
//i*3
let iconFacebook = document.createElement('i')
iconFacebook.classList.add('fa-brands','fa-facebook');

let iconInstagram = document.createElement('i')
iconInstagram.classList.add('fa-brands','fa-instagram');

let iconPinterest = document.createElement('i')
iconPinterest.classList.add('fa-brands','fa-pinterest');


// Ajout des différents éléments de la partie social_nav du footer
document.querySelector('footer').append(socialNav);
document.querySelector('footer nav.social_nav').append(ulSocialNav);
document.querySelector('footer nav.social_nav>ul').append(liSocialNav1,liSocialNav2,liSocialNav3);
document.querySelector('footer nav.social_nav>ul>li').append(aSocialNav1);
document.querySelector('footer nav.social_nav>ul').children[1].append(aSocialNav2);
document.querySelector('footer nav.social_nav>ul').children[2].append(aSocialNav3);
document.querySelector('footer nav.social_nav>ul>li>a').append(iconFacebook);
document.querySelector('footer nav.social_nav>ul>li>a[title="Instagram"]').append(iconInstagram);
document.querySelector('footer nav.social_nav>ul>li>a[title="Pinterest"]').append(iconPinterest);


// nav other_nav
let otherNav = document.createElement('nav');
otherNav.classList.add('other_nav');
// ul
let ulOtherNav = document.createElement('ul');
// li*3
let liOtherNav1 = document.createElement('li');
liOtherNav1.classList.add('copyright');
liOtherNav1.textContent='@copyright HedghogInLove';

let liOtherNav2 = document.createElement('li');
let liOtherNav3 = document.createElement('li');
//a*2
let aOtherNav2 = document.createElement('a');
aOtherNav2.setAttribute('href','#');
aOtherNav2.textContent='C.G.U'

let aOtherNav3 = document.createElement('a');
aOtherNav3.setAttribute('href','#');
aOtherNav3.textContent='Mentions légales'


// Ajout des différents éléments de la partie other_nav du footer
document.querySelector('footer').append(otherNav);
document.querySelector('footer nav.other_nav').append(ulOtherNav);
document.querySelector('footer nav.other_nav>ul').append(liOtherNav1,liOtherNav2,liOtherNav3);
document.querySelector('footer nav.other_nav>ul').children[1].append(aOtherNav2);
document.querySelector('footer nav.other_nav>ul').children[2].append(aOtherNav3);

