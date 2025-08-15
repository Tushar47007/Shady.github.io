console.log("Portfolio Loaded ✅");

const cursor = document.getElementById("cursor");
const body = document.body;

// Random animated GIF cursors
const cursors = [
  'images/cursors/terraria.gif',
  'images/cursors/omori.gif',
  'images/cursors/hornet.gif',
  'images/cursors/knight.gif',
  'images/cursors/garcello.gif',
  'images/cursors/bendy.gif',
  'images/cursors/jinx.gif',
  'images/cursors/patrick.gif',
  'images/cursors/koifish.gif',
  'images/cursors/amongus.gif',
  'images/cursors/pusheen.gif',
  'images/cursors/obiwan.gif'
];

// Hover cursor
const hoverCursor = 'images/cursors/hover.gif';

// Pick a random default cursor
let defaultCursor = cursors[Math.floor(Math.random() * cursors.length)];
cursor.style.backgroundImage = `url(${defaultCursor})`;

// Move cursor and animate background gradient
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  const x = e.clientX / window.innerWidth * 100;
  const y = e.clientY / window.innerHeight * 100;
  body.style.background = `radial-gradient(circle at ${x}% ${y}%, #6a11cb, #2575fc)`;
});

// Change cursor on hover over links/buttons
const hoverElements = document.querySelectorAll('a, .btn');
hoverElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.backgroundImage = `url(${hoverCursor})`;
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.backgroundImage = `url(${defaultCursor})`;
  });
});