console.log("Portfolio Loaded ✅");

const cursor = document.getElementById("cursor");
const body = document.body;

// Cursor sets with matching GIF + PNG
const cursorSets = [
  { gif: 'images/cursors/terraria.gif', pointer: 'images/pointers/terraria.png' },
  { gif: 'images/cursors/omori.gif', pointer: 'images/pointers/omori.png' },
  { gif: 'images/cursors/hornet.gif', pointer: 'images/pointers/hornet.png' },
  { gif: 'images/cursors/knight.gif', pointer: 'images/pointers/knight.png' },
  { gif: 'images/cursors/garcello.gif', pointer: 'images/pointers/garcello.png' },
  { gif: 'images/cursors/bendy.gif', pointer: 'images/pointers/bendy.png' },
  { gif: 'images/cursors/jinx.gif', pointer: 'images/pointers/jinx.png' },
  { gif: 'images/cursors/patrick.gif', pointer: 'images/pointers/patrick.png' },
  { gif: 'images/cursors/koifish.gif', pointer: 'images/pointers/koifish.png' },
  { gif: 'images/cursors/amongus.gif', pointer: 'images/pointers/amongus.png' },
  { gif: 'images/cursors/pusheen.gif', pointer: 'images/pointers/pusheen.png' },
  { gif: 'images/cursors/obiwan.gif', pointer: 'images/pointers/obiwan.png' }
];

// Pick a random set
const activeCursorSet = cursorSets[Math.floor(Math.random() * cursorSets.length)];

// Set default cursor (GIF)
cursor.style.backgroundImage = `url(${activeCursorSet.gif})`;

// Track mouse
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  body.style.background = `radial-gradient(circle at ${x}% ${y}%, #6a11cb, #2575fc)`;
});

// Change to PNG pointer on hover
document.querySelectorAll('a, .btn').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.backgroundImage = `url(${activeCursorSet.pointer})`;
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.backgroundImage = `url(${activeCursorSet.gif})`;
  });
});