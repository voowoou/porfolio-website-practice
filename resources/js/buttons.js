// MENU

let openButton = document.getElementById('menu-btn');
let menuBackground = document.getElementById('menu');
let list = document.getElementById('menu-list');
let closeButton = document.getElementById('close-btn');

// open button

const menuOpen = function() {
    menuBackground.style.width = '100%';
    openButton.style.width = '2.18%';
    openButton.style.display = 'none';
    list.style.display = 'flex';
    closeButton.style.display = 'block';
};

openButton.onclick = menuOpen;

// close button

const menuClose = function() {
    menuBackground.style.width = '4%';
    openButton.style.width = '54%';
    openButton.style.display = 'flex';
    list.style.display = 'none';
    closeButton.style.display = 'none';
};

closeButton.onclick = menuClose;


// CONTACTS

let contactsBackground = document.getElementsByTagName('aside')[0];
let sources = document.querySelectorAll('.source-text');
let box = document.getElementsByClassName('icons-sources')[0];
let icons = document.querySelectorAll('.icon');

// mouse over

const contactsView = function() {
    contactsBackground.style.width = '39%';
    sources.forEach(source => {
        source.style.display = 'inline';
        source.style.marginLeft = '10%';
    });
    icons.forEach(icon => {
        icon.style.fontSize = '3.5vw';
        icon.style.top = '15px';
    });
    box.style.textAlign = 'left';
    box.style.paddingLeft = '18%';
    box.style.width = '80%';
    box.style.height = '57%';
};

contactsBackground.onmouseover = contactsView;

// mouse out

const contactsHide = function() {
    contactsBackground.style.width = '4%';
    sources.forEach(source => {
        source.style.display = 'none';
        source.style.marginLeft = '0';
    });
    icons.forEach(icon => {
        icon.style.fontSize = '2vw';
        icon.style.top = '0';
    });
    box.style.textAlign = 'center';
    box.style.paddingLeft = '0';
    box.style.width = '100%';
    box.style.height = '40%';
};

contactsBackground.onmouseout = contactsHide;

// INFORMATION

let nikolaiBik = document.querySelector('h1')
let about = document.getElementById('about');

about.style.display = 'none';

const viewOrClose = function() {
    if (about.style.display === 'none') {
        nikolaiBik.style.margin = '27.3vh 0 8.8vh';
        about.style.display = 'block';
    } else {
        nikolaiBik.style.margin = '36vh 0 53vh 0';
        about.style.display = 'none';
    }
};

nikolaiBik.onclick = viewOrClose;