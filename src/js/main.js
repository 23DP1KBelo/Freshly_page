const navButton = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav');
const navLinks = navMenu.querySelectorAll('a');


navButton.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
  });

const nav = document.getElementById('nav');
console.log(nav.classList)
window.onscroll = function () { 
    if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10 ) {
        nav.classList.add("nav-color");
        nav.classList.remove("nav-transperent");
    } 
    else {
        nav.classList.add("nav-transperent");
        nav.classList.remove("nav-color");
    }
};
