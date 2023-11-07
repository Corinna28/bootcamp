// Création du noeuds : footer
let footerPage = document.createElement('footer');
document.querySelector('section#register').after(footerPage);
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
aOtherNav2.textContent='C.G.U';

let aOtherNav3 = document.createElement('a');
aOtherNav3.setAttribute('href','#');
aOtherNav3.textContent='Mentions légales';


// Ajout des différents éléments de la partie other_nav du footer
document.querySelector('footer').append(otherNav);
document.querySelector('footer nav.other_nav').append(ulOtherNav);
document.querySelector('footer nav.other_nav>ul').append(liOtherNav1,liOtherNav2,liOtherNav3);
document.querySelector('footer nav.other_nav>ul').children[1].append(aOtherNav2);
document.querySelector('footer nav.other_nav>ul').children[2].append(aOtherNav3);

