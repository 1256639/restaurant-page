export default function loadMenu() {
  const content = document.getElementById('content');
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu');

  const title = document.createElement('h1');
  title.textContent = 'Menu';
  menuContainer.appendChild(title);

  const menuList = document.createElement('ul');
  menuList.classList.add('menu-list');

  const items = [
    ["Krabby Patty", "1.25"],
    ["Double Krabby Patty", "2.00"],
    ["Triple Krabby Patty", "3.00"],
    ["Coral Bits", "1.25"],
    ["Kelp Rings", "1.50"],
    ["Krabby Meal", "3.50"],
    ["Salty Sea Dog", "1.25"],
    ["Kelp Shake", "2.00"],
  ];

  items.forEach(([name, price]) => {
    const li = document.createElement('li');
    li.classList.add('menu-item');

    const itemName = document.createElement('span');
    itemName.classList.add('item-name');
    itemName.textContent = name;

    const itemPrice = document.createElement('span');
    itemPrice.classList.add('item-price');
    itemPrice.textContent = `$${price}`;

    li.appendChild(itemName);
    li.appendChild(itemPrice);
    menuList.appendChild(li);
  });

  menuContainer.appendChild(menuList);
  content.appendChild(menuContainer);
}