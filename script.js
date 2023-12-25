const body = document.body;
const words = [
	"Te amo mucho! ❤️",
	"Te amo! ❤️",
	"Eres lo mejor del mundo! 👑",
	"Eres la reina de mi corazón! 👑",
	"Eres todo lo que quiero! 😍",
	"Eres la persona más bella del mundo! 😍"
];

const maxHeight = window.innerHeight || document.documentElement.clientHeight ||
	document.body.clientHeight;
const maxWidth = window.innerWidth || document.documentElement.clientWidth ||
	document.body.clientWidth;

const hexLetters = "0123456789ABCDEF";

function getColor(){
 let color = "#";
 for (let i = 0; i < 6; i++) {
  color += hexLetters[Math.floor(Math.random() * 16)];
 }
 const r = parseInt(color.slice(1, 3), 16);
 const g = parseInt(color.slice(3, 5), 16);
 const b = parseInt(color.slice(5, 7), 16);
 
 const brightness = (r * 299 + g * 587 + b * 114) / 1000;
 const text = brightness > 128 ? "#000000" : "#FFFFFF";
 return [color, text]
}

function addLove() {
	const color = getColor();
	body.innerHTML += `<p style="color: ${color[1]}; background-color: ${color[0]}; border-radius: 5px; padding: 5px; position: absolute; top: ${Math.random() * maxHeight}px; left: ${Math.random() * maxWidth}px;">${words[Math.floor(Math.random() * words.length)]}</p>`;
}

setInterval(addLove, 1000);
