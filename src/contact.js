export default function createContactPage() {
    const content = document.getElementById('content');
    content.innerHtml = '';

    const headline = document.createElement('h1');
    headline.textContent = 'Contact Us';

    const phone = document.createElement('p');
    phone.textContent = 'Phone: 123-456-7890';

    const address = document.createElement('p');
    address.textContent = 'Address: 123 Main St, Anytown, USA';

    content.appendChild(headline);
    content.appendChild(phone);
    content.appendChild(address);
}