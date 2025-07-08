export default function loadAbout() {
  const content = document.getElementById('content');
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  const aboutContainer = document.createElement('div');
  aboutContainer.classList.add('about');

  const title = document.createElement('h1');
  title.textContent = 'About Us';
  title.classList.add('about-title');
  aboutContainer.appendChild(title);

  const history = document.createElement('div');
  history.classList.add('about-history');
  const historyTitle = document.createElement('h2');
  historyTitle.textContent = 'Our Story';
  historyTitle.classList.add('about-section-title');
  const historyText = document.createElement('p');
  historyText.textContent =
    "Founded in the heart of Bikini Bottom, The Krusty Krab has been serving up legendary Krabby Patties and oceanic delights for generations. What started as a small sea shack has grown into Bikini Bottom's most beloved dining spot, thanks to our secret formula and the dedication of our quirky crew. Stop by and taste the tradition!";

  history.appendChild(historyTitle);
  history.appendChild(historyText);

  const contact = document.createElement('div');
  contact.classList.add('about-contact');
  const contactTitle = document.createElement('h2');
  contactTitle.textContent = 'Where to Find Us';
  contactTitle.classList.add('about-section-title');
  const contactInfo = document.createElement('ul');

  const addressLine1 = document.createElement('li');
  addressLine1.textContent = '831 Bottom Feeder Ln.';

  const addressLine2 = document.createElement('li');
  addressLine2.textContent = 'Bikini Bottom, Pacific Ocean';

  const phone = document.createElement('li');
  phone.textContent = 'Phone: 555-501-1999';

  const email = document.createElement('li');
  email.textContent = 'Email: krustykrab@seamail.coral';

  contactInfo.appendChild(addressLine1);
  contactInfo.appendChild(addressLine2);
  contactInfo.appendChild(phone);
  contactInfo.appendChild(email);

  contact.appendChild(contactTitle);
  contact.appendChild(contactInfo);

  aboutContainer.appendChild(history);
  aboutContainer.appendChild(contact);
  content.appendChild(aboutContainer);
}