import "./styles.css";
import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const aboutBtn = document.getElementById('about-btn');

homeBtn.addEventListener('click', loadHome);
menuBtn.addEventListener('click', loadMenu);
aboutBtn.addEventListener('click', loadAbout);

loadHome();