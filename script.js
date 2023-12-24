const body = document.body
const words = [
	"Te amo mucho! ❤️",
	"Te amo! ❤️",
	"Eres lo mejor del mundo! 👑",
	"Eres la reina de mi corazón! 👑",
	"Eres todo lo que quiero! 😍",
	"Eres la persona más bella del mundo! 😍"
]

const maxHeight = window.innerHeight || document.documentElement.clientHeight ||
	document.body.clientHeight;
const maxWidth = window.innerWidth || document.documentElement.clientWidth ||
	document.body.clientWidth;

const colors = [
	["#4f356c", "#fff"],
	["#f3575d", "#000"],
	["#ecb8f3", "#000"],
	["#a32eff", "#fff"],
	["#8870d8", "#fff"]
]

function addLove() {
	const color = colors[Math.floor(Math.random() * colors.length)]
	body.innerHTML += `<p style="color: ${color[1]}; background-color: ${color[0]}; border-radius: 5px; padding: 5px; position: absolute; top: ${Math.random() * maxHeight}px; left: ${Math.random() * maxWidth}px;">${words[Math.floor(Math.random() * words.length)]}</p>`
}

setInterval(addLove, 1000)
