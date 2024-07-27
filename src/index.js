import createHomePage from './home';
import createMenuPage from './menu';
import createContactPage from './contact';

function loadPage(pageFunction) {
    const content = document.getElementById('content');
    content.innerHTML = '';
    pageFunction();
}

document.getElementById('home').addEventListener('click', () => loadPage(createHomePage));
document.getElementById('menu').addEventListener('click', () => loadPage(createMenuPage));
document.getElementById('contact').addEventListener('click', () => loadPage(createContactPage));

document.addEventListener('DOMContentLoaded', () => {
    loadPage(createHomePage);
});