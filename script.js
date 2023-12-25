const body = document.body;
const captions = [
  "Eres mi luz en un día nublado!",
  "En tus brazos, encontré mi hogar!",
  "El amor es lo mejor que hacemos juntos!",
  "Haces que mi corazón dé un vuelco!",
  "Cada momento contigo se siente como una bendición!",
  "Tu amor es la música de mi alma!",
  "Estar juntos es un lugar maravilloso!",
  "En tus ojos, encontré mi galaxia favorita!",
  "Eres la pieza que faltaba en mi rompecabezas de felicidad!",
  "Contigo, cada día es el Día de San Valentín!",
  "Eres la razón por la que creo en el amor!",
  "Nuestra historia de amor es mi favorita!",
  "Me enamoro más de ti cada día!",
  "Eres lo mejor que me ha pasado!",
  "Tu sonrisa es mi vista favorita!",
  "Contigo, la vida es un hermoso viaje!",
  "Estoy agradecido por cada momento contigo!",
  "Eres el amor que he estado buscando!",
  "Nuestro amor es como un buen vino, mejora con el tiempo!",
  "Me completas de todas las formas!",
  "Te amo más de lo que las palabras pueden expresar!",
  "Nuestro amor es mi aventura favorita!",
  "Eres la alegría en mi corazón!",
  "Juntos, creamos magia!",
  "Eres mi felices por siempre!",
  "Soy mejor gracias a ti!",
  "Tu amor es mi tesoro más grande!",
  "Eres el sueño del que nunca quiero despertar!",
  "Nuestro amor es una historia escrita en las estrellas!",
  "Eres el deseo de mi corazón!",
  "En tus brazos, encuentro consuelo!",
  "Contigo, cada día es un cuento de hadas!",
  "Eres la razón de mis sonrisas!",
  "Nuestro amor es una obra maestra!",
  "Eres la melodía más dulce en mi vida!",
  "Eres mi amor, mi vida, mi todo!",
  "Estar contigo es mi lugar favorito!",
  "Eres el único y verdadero!",
  "Contigo, soy hogar!",
  "Eres la razón por la que creo en el para siempre!",
  "Nuestro amor es el mejor tipo de magia!",
  "Eres el sol que ilumina mis días más oscuros!",
  "Te amo más que ayer, pero menos que mañana!",
  "Eres a quien he estado esperando!",
  "En tus brazos, me siento seguro y amado!",
  "Nuestro amor es una hermosa sinfonía!",
  "Eres el sueño del que nunca quiero despertar!",
  "Contigo, la vida es una hermosa canción!",
  "Eres la melodía de mi corazón!",
  "Estoy agradecido por el amor que compartimos!",
  "Eres mi ancla en la tormenta!",
  "Nuestro amor es el mejor regalo de todos!",
  "Eres mi felices por siempre!",
  "Contigo, cada día es una bendición!",
  "Eres el amor de mi vida!",
  "En tus ojos, veo mi futuro!",
  "Nuestro amor es una obra maestra atemporal!",
  "Eres la razón de mis sonrisas!",
  "Contigo, soy completo!",
  "Eres el amor que llena mi corazón!",
  "Nuestro amor es mi historia favorita!",
  "Eres el sol que ilumina mi día!",
  "Te amo más de lo que las palabras pueden expresar!",
  "Eres mi para siempre y siempre!",
  "Contigo, cada momento es especial!",
  "Eres la mejor parte de mi día!",
  "Nuestro amor es un viaje que vale la pena tomar!",
  "Eres el deleite de mi corazón!",
  "Eres la razón por la que creo en el amor a primera vista!",
  "Contigo, cada día se siente como el Día de San Valentín!",
  "Eres mi mayor alegría!",
  "Nuestro amor es la melodía más dulce!",
  "Eres mi tipo favorito de magia!",
  "Eres mi amor, mi vida, mi todo!",
  "Contigo, estoy en casa!",
  "Eres la razón por la que sonrío!",
  "Nuestro amor es una historia escrita en las estrellas!",
  "Eres aquel a quien mi corazón adora!",
  "Eres mi sol en la lluvia!",
  "Contigo, la vida es una aventura!",
  "Eres lo mejor que me ha pasado!",
  "Haces que mi corazón dé un vuelco!",
  "Cada momento contigo es un tesoro!",
  "Tu amor es mi regalo más grande!",
];

const loveEmojis = ["❤️", "💖", "😍", "💘", "💑", "💏", "🥰", "😘", "💞", "💕"];

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
 const text = `${captions[Math.floor(Math.random() * captions.length)]} ${loveEmojis[Math.floor(Math.random() * loveEmojis.length)]}`;
	body.innerHTML += `<p style="color: ${color[1]}; background-color: ${color[0]}; border-radius: 5px; padding: 5px; position: absolute; top: ${Math.random() * maxHeight}px; left: ${Math.random() * maxWidth}px;">${text}</p>`;
}

setInterval(addLove, 1000);
