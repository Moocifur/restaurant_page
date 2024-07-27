export default function createMenuPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = 'Our Menu';

    const menuItems = document.createElement('ul');

    const item1 = document.createElement('li');
    item1.textContent = 'Pizza';

    const item2 = document.createElement('li');
    item2.textContent = 'Pasta';

    const item3 = document.createElement('li');
    item3.textContent = 'salad';

    menuItems.appendChild(item1);
    menuItems.appendChild(item2);
    menuItems.appendChild(item3);

    content.appendChild(headline);
    content.appendChild(menuItems);
}