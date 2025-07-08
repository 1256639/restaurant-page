import krustyKrabImg from './images/krusty-krab.png'

export default function loadHome() {
  const content = document.getElementById('content');
  
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  const hero = document.createElement('div');
  hero.classList.add('hero');

  const h1 = document.createElement('h1');
  h1.textContent = 'The Krusty Krab';
  hero.appendChild(h1);

  const contentLayout = document.createElement('div');
  contentLayout.classList.add('content-layout');

  const textContent = document.createElement('div');
  textContent.classList.add('text-content');
  const p = document.createElement('p');
  p.textContent = `Dive into flavor with the world-famous Krabby Patty, handcrafted by our very own fry cook extraordinaire, SpongeBob SquarePants! At the Krusty Krab, we serve up fresh, fast, and fin-tastically tasty meals in a warm, nautical atmosphere that's perfect for families, friends, and plankton (okay, maybe not plankton). Whether you're grabbing lunch on your lunch break from the Chum Bucket or celebrating a successful jellyfishing trip, we've got something for every sea creature.`;
  textContent.appendChild(p);

  const imageContent = document.createElement('div');
  imageContent.classList.add('image-content');
  const img = document.createElement('img');
  img.src = krustyKrabImg;
  img.alt = 'Krusty Krab';
  imageContent.appendChild(img);

  const bottomText = document.createElement('p');
  bottomText.classList.add('bottom-text');
  bottomText.innerHTML = `The Krusty Krab, come spend your money here!<br>-- Mr. Krabs, Pearl & Squidward Tentacles`;
  imageContent.appendChild(bottomText);

  contentLayout.appendChild(textContent);
  contentLayout.appendChild(imageContent);

  hero.appendChild(contentLayout);

  content.appendChild(hero);
}