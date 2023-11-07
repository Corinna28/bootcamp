// Création du noeuds : footer 



// -> Une nav avec la class ‘’social_nav’’-> Une ul-> une li-> une li-> une li-> Une nav avec la class ‘’other_nav’’-> Une ul-> un aavec 2 attributs href=’’#’’ et title=‘’Facebook’’-> un i avec 2 class ‘’fa-brand’’ et‘’fa-facebook‘’-> un aavec 2 attributs href=’’#’’ et title=‘’Instagram’’-> un i avec 2 class ‘’fa-brand’’ et‘’fa-intagram‘’-> un a avec 2 attribut href=’’#’’ ettitle=‘’Pinterest’’-> un i avec 2 class ‘’fa-brand’’ et‘’fa-pinterest‘’-> une li avec une class ‘’copyright’’-> un texte « @copyright HedghogInLove»-> une li-> une li-> un aavec l’attribut href=’’#’’ -> dedans un texte « C.G.U »
//  4-> un aa Avec l’attribut href=’’#’’ -> dedans un texte « Mentions légales » 

// Crée une fonction pour générer la structure HTML
function createHTMLStructure() {
    // Crée un élément nav avec la classe "social_nav"
    const socialNav = document.createElement('nav');
    socialNav.className = 'social_nav';
    // Crée une liste non ordonnée
    const socialNavUl = document.createElement('ul');

    // Crée trois éléments li avec des liens et des icônes pour les réseaux sociaux
    const socialLinks = ['Facebook', 'Instagram', 'Pinterest'];
    for (const socialLink of socialLinks) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.title = socialLink;
        const icon = document.createElement('i');
        icon.className = `fa-brand fa-${socialLink.toLowerCase()}`;
        a.appendChild(icon);
        li.appendChild(a);
        socialNavUl.appendChild(li);
    }

    socialNav.appendChild(socialNavUl);

    // Crée un élément nav avec la classe "other_nav"
    const otherNav = document.createElement('nav');
    otherNav.className = 'other_nav';
    // Crée une liste non ordonnée
    const otherNavUl = document.createElement('ul');

    // Crée deux éléments li avec des liens pour les CGU et les mentions légales
    const links = ['C.G.U', 'Mentions légales'];
    for (const link of links) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = link;
        li.appendChild(a);
        otherNavUl.appendChild(li);
    }

    otherNav.appendChild(otherNavUl);

    // Crée un élément div centré pour le texte du copyright
    const centeredDiv = document.createElement('div');
    centeredDiv.className = 'centered';
    const copyrightLi = document.createElement('li');
    copyrightLi.className = 'copyright';
    copyrightLi.textContent = '@copyright HedghogInLove';

    // Ajoute les éléments au document
    centeredDiv.appendChild(copyrightLi);
    document.body.appendChild(socialNav);
    document.body.appendChild(otherNav);
    document.body.appendChild(centeredDiv);
}

// Appelle la fonction pour créer la structure HTML
createHTMLStructure();
