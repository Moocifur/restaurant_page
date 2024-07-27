export default function createHomePage() {
    const content = document.getElementById('content');

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Our Restaurant';

    const description = document.createElement('p');
    description.textContent = 'Experience the best food in town!';

    const image = document.createElement('img');
    image.src = '/src/assets/images/restaurant.jpg';
    image.alt = 'Restaurant Image';

    content.appendChild(headline);
    content.appendChild(description);
    content.appendChild(image);
};