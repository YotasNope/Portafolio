const general = document.getElementById("general");
const models = document.getElementById("models");
const animations = document.getElementById("animation");
const design = document.getElementById("design");
const games = document.getElementById("games");
const photo = document.getElementById("photo-video");

const content = document.getElementById("Contenido-Portfalio")
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const ten = document.getElementById("ten");
const eleven = document.getElementById("eleven");
const thirteen = document.getElementById("thirteen");
const fourteen = document.getElementById("fourteen");
const fiveteen = document.getElementById("fiveteen");

const tuff = document.getElementById("Tuff");
const goku = document.getElementById("goku");
const sheikah = document.getElementById("sheikah");
const ulari = document.getElementById("Ulari");
const toby = document.getElementById("Toby");
const elena = document.getElementById("Elena");
const drive = document.getElementById("Driver");
const silh = document.getElementById("BookPhoto");
const jerry = document.getElementById("Jerry");
const juivag = document.getElementById("JuiVag");
const zombie = document.getElementById("ZombieLand");
const dave = document.getElementById("Dave");
const Dot = document.getElementById("DOT");
const Ed = document.getElementById("ED");
const close = document.getElementById("close");
const close1 = document.getElementById("close1");
const close2 = document.getElementById("close2");
const close3 = document.getElementById("close3");
const close4 = document.getElementById("close4");
const close5 = document.getElementById("close5");
const close6 = document.getElementById("close6");
const close7 = document.getElementById("close7");
const close8 = document.getElementById("close8");
const close9 = document.getElementById("close9");
const close10 = document.getElementById("close10");
const close12 = document.getElementById("close12");
const close13 = document.getElementById("close13");
const close14 = document.getElementById("close14");
const background = document.getElementById("background-close");

general.addEventListener('click', () =>{

	one.classList.add('boxp-show');
	two.classList.add('boxp-show');
	three.classList.add('boxp-show');
	four.classList.add('boxp-show');
	five.classList.add('boxp-show');
	six.classList.add('boxp-show');
	seven.classList.add('boxp-show');
	eight.classList.add('boxp-show');
	nine.classList.add('boxp-show');
	ten.classList.add('boxp-hidden');
	eleven.classList.add('boxp-hidden');
	thirteen.classList.add('boxp-show');
	fourteen.classList.add('boxp-show');
	fiveteen.classList.add('boxp-show');

	one.classList.remove('boxp-hidden');
	two.classList.remove('boxp-hidden');
	three.classList.remove('boxp-hidden');
	four.classList.remove('boxp-hidden');
	five.classList.remove('boxp-hidden');
	six.classList.remove('boxp-hidden');
	seven.classList.remove('boxp-hidden');
	eight.classList.remove('boxp-hidden');
	nine.classList.remove('boxp-hidden');
	ten.classList.remove('boxp-show');
	eleven.classList.remove('boxp-show');
	thirteen.classList.remove('boxp-hidden');
	fourteen.classList.remove('boxp-hidden');
	fiveteen.classList.remove('boxp-hidden');

	general.classList.add('button-active');
	models.classList.remove('button-active');
	animations.classList.remove('button-active');
	design.classList.remove('button-active');
	games.classList.remove('button-active');
	photo.classList.remove('button-active');

});

models.addEventListener('click', () =>{

	one.classList.add('boxp-show');
	two.classList.remove('boxp-show');
	three.classList.remove('boxp-show');
	four.classList.remove('boxp-show');
	five.classList.remove('boxp-show');
	six.classList.add('boxp-show');
	seven.classList.remove('boxp-show');
	eight.classList.remove('boxp-show');
	nine.classList.add('boxp-show');
	ten.classList.remove('boxp-show');
	eleven.classList.remove('boxp-show');
	thirteen.classList.add('boxp-show');
	fourteen.classList.remove('boxp-show');
	fiveteen.classList.add('boxp-show');
	fiveteen.classList.add('boxp-show');

	one.classList.remove('boxp-hidden');
	two.classList.add('boxp-hidden');
	three.classList.add('boxp-hidden');
	four.classList.add('boxp-hidden');
	five.classList.add('boxp-hidden');
	six.classList.remove('boxp-hidden');
	seven.classList.add('boxp-hidden');
	eight.classList.add('boxp-hidden');
	nine.classList.remove('boxp-hidden');
	ten.classList.add('boxp-hidden');
	eleven.classList.add('boxp-hidden');
	thirteen.classList.remove('boxp-hidden');
	fourteen.classList.add('boxp-hidden');
	fiveteen.classList.remove('boxp-hidden');


	general.classList.remove('button-active');
	models.classList.add('button-active');
	animations.classList.remove('button-active');
	design.classList.remove('button-active');
	games.classList.remove('button-active');
	photo.classList.remove('button-active');

});

animations.addEventListener('click', () =>{

	one.classList.remove('boxp-show');
	two.classList.add('boxp-show');
	three.classList.add('boxp-show');
	four.classList.remove('boxp-show');
	five.classList.remove('boxp-show');
	six.classList.remove('boxp-show');
	seven.classList.remove('boxp-show');
	eight.classList.remove('boxp-show');
	nine.classList.remove('boxp-show');
	ten.classList.remove('boxp-show');
	eleven.classList.remove('boxp-show');
	thirteen.classList.add('boxp-show');
	fourteen.classList.remove('boxp-show');
	fiveteen.classList.remove('boxp-show');

	one.classList.add('boxp-hidden');
	two.classList.remove('boxp-hidden');
	three.classList.remove('boxp-hidden');
	four.classList.add('boxp-hidden');
	five.classList.add('boxp-hidden');
	six.classList.add('boxp-hidden');
	seven.classList.add('boxp-hidden');
	eight.classList.add('boxp-hidden');
	nine.classList.add('boxp-hidden');
	ten.classList.add('boxp-hidden');
	eleven.classList.add('boxp-hidden');
	thirteen.classList.add('boxp-hidden');
	fourteen.classList.add('boxp-hidden');
	fiveteen.classList.add('boxp-hidden');

	general.classList.remove('button-active');
	models.classList.remove('button-active');
	animations.classList.add('button-active');
	design.classList.remove('button-active');
	games.classList.remove('button-active');
	photo.classList.remove('button-active');

});

design.addEventListener('click', () =>{

	one.classList.remove('boxp-show');
	two.classList.remove('boxp-show');
	three.classList.add('boxp-show');
	four.classList.add('boxp-show');
	five.classList.remove('boxp-show');
	six.classList.remove('boxp-show');
	seven.classList.remove('boxp-show');
	eight.classList.remove('boxp-show');
	nine.classList.remove('boxp-show');
	ten.classList.add('boxp-show');
	eleven.classList.add('boxp-show');
	thirteen.classList.remove('boxp-show');
	fourteen.classList.remove('boxp-show');
	fiveteen.classList.remove('boxp-show');

	one.classList.add('boxp-hidden');
	two.classList.add('boxp-hidden');
	three.classList.remove('boxp-hidden');
	four.classList.remove('boxp-hidden');
	five.classList.add('boxp-hidden');
	six.classList.add('boxp-hidden');
	seven.classList.add('boxp-hidden');
	eight.classList.add('boxp-hidden');
	nine.classList.add('boxp-hidden');
	ten.classList.remove('boxp-hidden');
	eleven.classList.remove('boxp-hidden');
	thirteen.classList.add('boxp-hidden');
	fourteen.classList.add('boxp-hidden');
	fiveteen.classList.add('boxp-hidden');

	general.classList.remove('button-active');
	models.classList.remove('button-active');
	animations.classList.remove('button-active');
	design.classList.add('button-active');
	games.classList.remove('button-active');
	photo.classList.remove('button-active');

});

games.addEventListener('click', () =>{

	one.classList.remove('boxp-show');
	two.classList.remove('boxp-show');
	three.classList.remove('boxp-show');
	four.classList.add('boxp-show');
	five.classList.remove('boxp-show');
	six.classList.remove('boxp-show');
	seven.classList.add('boxp-show');
	eight.classList.remove('boxp-show');
	nine.classList.remove('boxp-show');
	ten.classList.remove('boxp-show');
	eleven.classList.add('boxp-show');
	thirteen.classList.remove('boxp-show');
	fourteen.classList.remove('boxp-show');
	fiveteen.classList.remove('boxp-show');

	one.classList.add('boxp-hidden');
	two.classList.add('boxp-hidden');
	three.classList.add('boxp-hidden');
	four.classList.remove('boxp-hidden');
	five.classList.add('boxp-hidden');
	six.classList.add('boxp-hidden');
	seven.classList.remove('boxp-hidden');
	eight.classList.add('boxp-hidden');
	nine.classList.add('boxp-hidden');
	ten.classList.add('boxp-hidden');
	eleven.classList.remove('boxp-hidden');
	thirteen.classList.add('boxp-hidden');
	fourteen.classList.add('boxp-hidden');
	fiveteen.classList.add('boxp-hidden');

	general.classList.remove('button-active');
	models.classList.remove('button-active');
	animations.classList.remove('button-active');
	design.classList.remove('button-active');
	games.classList.add('button-active');
	photo.classList.remove('button-active');

});

photo.addEventListener('click', () =>{

	one.classList.remove('boxp-show');
	two.classList.remove('boxp-show');
	three.classList.remove('boxp-show');
	four.classList.remove('boxp-show');
	five.classList.add('boxp-show');
	six.classList.remove('boxp-show');
	seven.classList.remove('boxp-show');
	eight.classList.add('boxp-show');
	nine.classList.remove('boxp-show');
	ten.classList.add('boxp-show');
	eleven.classList.remove('boxp-show');
	thirteen.classList.remove('boxp-show');
	fourteen.classList.add('boxp-show');
	fiveteen.classList.remove('boxp-show');

	one.classList.add('boxp-hidden');
	two.classList.add('boxp-hidden');
	three.classList.add('boxp-hidden');
	four.classList.add('boxp-hidden');
	five.classList.remove('boxp-hidden');
	six.classList.add('boxp-hidden');
	seven.classList.add('boxp-hidden');
	eight.classList.remove('boxp-hidden');
	nine.classList.add('boxp-hidden');
	ten.classList.remove('boxp-hidden');
	eleven.classList.add('boxp-hidden');
	thirteen.classList.add('boxp-hidden');
	fourteen.classList.remove('boxp-hidden');
	fiveteen.classList.add('boxp-hidden');

	general.classList.remove('button-active');
	models.classList.remove('button-active');
	animations.classList.remove('button-active');
	design.classList.remove('button-active');
	games.classList.remove('button-active');
	photo.classList.add('button-active');

});

one.addEventListener('click', () =>{

	content.classList.remove('popup-hidden');
	content.classList.add('popup-show');
	background.classList.remove('popup-hidden');
	background.classList.add('popup-show');
	tuff.classList.add("content-show");
	tuff.classList.remove("content-hidden");
});

two.addEventListener('click', () =>{

	content.classList.remove('popup-hidden');
	content.classList.add('popup-show');
	background.classList.remove('popup-hidden');
	background.classList.add('popup-show');
	goku.classList.add("content-show");
	goku.classList.remove("content-hidden");
});

three.addEventListener('click', () =>{

	content.classList.remove('popup-hidden');
	content.classList.add('popup-show');
	background.classList.remove('popup-hidden');
	background.classList.add('popup-show');
	sheikah.classList.add("content-show");
	sheikah.classList.remove("content-hidden");
});

four.addEventListener('click', () =>{
	content.classList.remove('popup-hidden');
	content.classList.add('popup-show');
	background.classList.remove('popup-hidden');
	background.classList.add('popup-show');
	ulari.classList.add("content-show");
	ulari.classList.remove("content-hidden");
});

five.addEventListener('click', () =>{
	content.classList.remove('popup-hidden');
	content.classList.add('popup-show');
	background.classList.remove('popup-hidden');
	background.classList.add('popup-show');
	toby.classList.add("content-show");
	toby.classList.remove("content-hidden");
});

six.addEventListener('click', () =>{
	content.classList.remove('popup-hidden');
	content.classList.add('popup-show');
	background.classList.remove('popup-hidden');
	background.classList.add('popup-show');
	elena.classList.add("content-show");
	elena.classList.remove("content-hidden");
});

seven.addEventListener('click', () =>{
	content.classList.remove('popup-hidden');
	content.classList.add('popup-show');
	background.classList.remove('popup-hidden');
	background.classList.add('popup-show');
	drive.classList.add("content-show");
	drive.classList.remove("content-hidden");
});

eight.addEventListener('click', () =>{
	content.classList.remove('popup-hidden');
	content.classList.add('popup-show');
	background.classList.remove('popup-hidden');
	background.classList.add('popup-show');
	silh.classList.add("content-show");
	silh.classList.remove("content-hidden");
});

nine.addEventListener('click', () =>{
	content.classList.remove('popup-hidden');
	content.classList.add('popup-show');
	background.classList.remove('popup-hidden');
	background.classList.add('popup-show');
	jerry.classList.add("content-show");
	jerry.classList.remove("content-hidden");
});

ten.addEventListener('click', () =>{
	content.classList.remove('popup-hidden');
	content.classList.add('popup-show');
	background.classList.remove('popup-hidden');
	background.classList.add('popup-show');
	juivag.classList.add("content-show");
	juivag.classList.remove("content-hidden");
});

eleven.addEventListener('click', () =>{
	content.classList.remove('popup-hidden');
	content.classList.add('popup-show');
	background.classList.remove('popup-hidden');
	background.classList.add('popup-show');
	zombie.classList.add("content-show");
	zombie.classList.remove("content-hidden");
});

thirteen.addEventListener('click', () =>{
	content.classList.remove('popup-hidden');
	content.classList.add('popup-show');
	background.classList.remove('popup-hidden');
	background.classList.add('popup-show');
	dave.classList.add("content-show");
	dave.classList.remove("content-hidden");
});

fourteen.addEventListener('click', () =>{
	content.classList.remove('popup-hidden');
	content.classList.add('popup-show');
	background.classList.remove('popup-hidden');
	background.classList.add('popup-show');
	Dot.classList.add("content-show");
	Dot.classList.remove("content-hidden");
});

fiveteen.addEventListener('click', () =>{
	content.classList.remove('popup-hidden');
	content.classList.add('popup-show');
	background.classList.remove('popup-hidden');
	background.classList.add('popup-show');
	Ed.classList.add("content-show");
	Ed.classList.remove("content-hidden");
});

close.addEventListener('click', () =>{
	content.classList.add('popup-hidden');
	content.classList.remove('popup-show');
	background.classList.add('popup-hidden');
	background.classList.remove('popup-show');
	tuff.classList.remove("content-show");
	tuff.classList.add("content-hidden");
	goku.classList.remove("content-show");
	goku.classList.add("content-hidden");
	sheikah.classList.remove("content-show");
	sheikah.classList.add("content-hidden");
	ulari.classList.remove("content-show");
	ulari.classList.add("content-hidden");
	toby.classList.remove("content-show");
	toby.classList.add("content-hidden");
	elena.classList.remove("content-show");
	elena.classList.add("content-hidden");
	drive.classList.remove("content-show");
	drive.classList.add("content-hidden");
	silh.classList.remove("content-show");
	silh.classList.add("content-hidden");
	jerry.classList.remove("content-show");
	jerry.classList.add("content-hidden");
	juivag.classList.remove("content-show");
	juivag.classList.add("content-hidden");
	zombie.classList.remove("content-show");
	zombie.classList.add("content-hidden");
	dave.classList.remove("content-show");
	dave.classList.add("content-hidden");
	Dot.classList.remove("content-show");
	Dot.classList.add("content-hidden");
});

close1.addEventListener('click', () =>{
	content.classList.add('popup-hidden');
	content.classList.remove('popup-show');
	background.classList.add('popup-hidden');
	background.classList.remove('popup-show');
	tuff.classList.remove("content-show");
	tuff.classList.add("content-hidden");
	goku.classList.remove("content-show");
	goku.classList.add("content-hidden");
	sheikah.classList.remove("content-show");
	sheikah.classList.add("content-hidden");
	ulari.classList.remove("content-show");
	ulari.classList.add("content-hidden");
	toby.classList.remove("content-show");
	toby.classList.add("content-hidden");
	elena.classList.remove("content-show");
	elena.classList.add("content-hidden");
	drive.classList.remove("content-show");
	drive.classList.add("content-hidden");
	silh.classList.remove("content-show");
	silh.classList.add("content-hidden");
	jerry.classList.remove("content-show");
	jerry.classList.add("content-hidden");
	juivag.classList.remove("content-show");
	juivag.classList.add("content-hidden");
	zombie.classList.remove("content-show");
	zombie.classList.add("content-hidden");
	dave.classList.remove("content-show");
	dave.classList.add("content-hidden");
	Dot.classList.remove("content-show");
	Dot.classList.add("content-hidden");
});


close2.addEventListener('click', () =>{
	content.classList.add('popup-hidden');
	content.classList.remove('popup-show');
	background.classList.add('popup-hidden');
	background.classList.remove('popup-show');
	tuff.classList.remove("content-show");
	tuff.classList.add("content-hidden");
	goku.classList.remove("content-show");
	goku.classList.add("content-hidden");
	sheikah.classList.remove("content-show");
	sheikah.classList.add("content-hidden");
	ulari.classList.remove("content-show");
	ulari.classList.add("content-hidden");
	toby.classList.remove("content-show");
	toby.classList.add("content-hidden");
	elena.classList.remove("content-show");
	elena.classList.add("content-hidden");
	drive.classList.remove("content-show");
	drive.classList.add("content-hidden");
	silh.classList.remove("content-show");
	silh.classList.add("content-hidden");
	jerry.classList.remove("content-show");
	jerry.classList.add("content-hidden");
	juivag.classList.remove("content-show");
	juivag.classList.add("content-hidden");
	zombie.classList.remove("content-show");
	zombie.classList.add("content-hidden");
	dave.classList.remove("content-show");
	dave.classList.add("content-hidden");
	Dot.classList.remove("content-show");
	Dot.classList.add("content-hidden");
});


close3.addEventListener('click', () =>{
	content.classList.add('popup-hidden');
	content.classList.remove('popup-show');
	background.classList.add('popup-hidden');
	background.classList.remove('popup-show');
	tuff.classList.remove("content-show");
	tuff.classList.add("content-hidden");
	goku.classList.remove("content-show");
	goku.classList.add("content-hidden");
	sheikah.classList.remove("content-show");
	sheikah.classList.add("content-hidden");
	ulari.classList.remove("content-show");
	ulari.classList.add("content-hidden");
	toby.classList.remove("content-show");
	toby.classList.add("content-hidden");
	elena.classList.remove("content-show");
	elena.classList.add("content-hidden");
	drive.classList.remove("content-show");
	drive.classList.add("content-hidden");
	silh.classList.remove("content-show");
	silh.classList.add("content-hidden");
	jerry.classList.remove("content-show");
	jerry.classList.add("content-hidden");
	juivag.classList.remove("content-show");
	juivag.classList.add("content-hidden");
	zombie.classList.remove("content-show");
	zombie.classList.add("content-hidden");
	dave.classList.remove("content-show");
	dave.classList.add("content-hidden");
	Dot.classList.remove("content-show");
	Dot.classList.add("content-hidden");
});


close4.addEventListener('click', () =>{
	content.classList.add('popup-hidden');
	content.classList.remove('popup-show');
	background.classList.add('popup-hidden');
	background.classList.remove('popup-show');
	tuff.classList.remove("content-show");
	tuff.classList.add("content-hidden");
	goku.classList.remove("content-show");
	goku.classList.add("content-hidden");
	sheikah.classList.remove("content-show");
	sheikah.classList.add("content-hidden");
	ulari.classList.remove("content-show");
	ulari.classList.add("content-hidden");
	toby.classList.remove("content-show");
	toby.classList.add("content-hidden");
	elena.classList.remove("content-show");
	elena.classList.add("content-hidden");
	drive.classList.remove("content-show");
	drive.classList.add("content-hidden");
	silh.classList.remove("content-show");
	silh.classList.add("content-hidden");
	jerry.classList.remove("content-show");
	jerry.classList.add("content-hidden");
	juivag.classList.remove("content-show");
	juivag.classList.add("content-hidden");
	zombie.classList.remove("content-show");
	zombie.classList.add("content-hidden");
	dave.classList.remove("content-show");
	dave.classList.add("content-hidden");
	Dot.classList.remove("content-show");
	Dot.classList.add("content-hidden");
});

close5.addEventListener('click', () =>{
	content.classList.add('popup-hidden');
	content.classList.remove('popup-show');
	background.classList.add('popup-hidden');
	background.classList.remove('popup-show');
	tuff.classList.remove("content-show");
	tuff.classList.add("content-hidden");
	goku.classList.remove("content-show");
	goku.classList.add("content-hidden");
	sheikah.classList.remove("content-show");
	sheikah.classList.add("content-hidden");
	ulari.classList.remove("content-show");
	ulari.classList.add("content-hidden");
	toby.classList.remove("content-show");
	toby.classList.add("content-hidden");
	elena.classList.remove("content-show");
	elena.classList.add("content-hidden");
	drive.classList.remove("content-show");
	drive.classList.add("content-hidden");
	silh.classList.remove("content-show");
	silh.classList.add("content-hidden");
	jerry.classList.remove("content-show");
	jerry.classList.add("content-hidden");
	juivag.classList.remove("content-show");
	juivag.classList.add("content-hidden");
	zombie.classList.remove("content-show");
	zombie.classList.add("content-hidden");
	dave.classList.remove("content-show");
	dave.classList.add("content-hidden");
	Dot.classList.remove("content-show");
	Dot.classList.add("content-hidden");
});

close6.addEventListener('click', () =>{
	content.classList.add('popup-hidden');
	content.classList.remove('popup-show');
	background.classList.add('popup-hidden');
	background.classList.remove('popup-show');
	tuff.classList.remove("content-show");
	tuff.classList.add("content-hidden");
	goku.classList.remove("content-show");
	goku.classList.add("content-hidden");
	sheikah.classList.remove("content-show");
	sheikah.classList.add("content-hidden");
	ulari.classList.remove("content-show");
	ulari.classList.add("content-hidden");
	toby.classList.remove("content-show");
	toby.classList.add("content-hidden");
	elena.classList.remove("content-show");
	elena.classList.add("content-hidden");
	drive.classList.remove("content-show");
	drive.classList.add("content-hidden");
	silh.classList.remove("content-show");
	silh.classList.add("content-hidden");
	jerry.classList.remove("content-show");
	jerry.classList.add("content-hidden");
	juivag.classList.remove("content-show");
	juivag.classList.add("content-hidden");
	zombie.classList.remove("content-show");
	zombie.classList.add("content-hidden");
	dave.classList.remove("content-show");
	dave.classList.add("content-hidden");
	Dot.classList.remove("content-show");
	Dot.classList.add("content-hidden");
});

close7.addEventListener('click', () =>{
	content.classList.add('popup-hidden');
	content.classList.remove('popup-show');
	background.classList.add('popup-hidden');
	background.classList.remove('popup-show');
	tuff.classList.remove("content-show");
	tuff.classList.add("content-hidden");
	goku.classList.remove("content-show");
	goku.classList.add("content-hidden");
	sheikah.classList.remove("content-show");
	sheikah.classList.add("content-hidden");
	ulari.classList.remove("content-show");
	ulari.classList.add("content-hidden");
	toby.classList.remove("content-show");
	toby.classList.add("content-hidden");
	elena.classList.remove("content-show");
	elena.classList.add("content-hidden");
	drive.classList.remove("content-show");
	drive.classList.add("content-hidden");
	silh.classList.remove("content-show");
	silh.classList.add("content-hidden");
	jerry.classList.remove("content-show");
	jerry.classList.add("content-hidden");
	juivag.classList.remove("content-show");
	juivag.classList.add("content-hidden");
	zombie.classList.remove("content-show");
	zombie.classList.add("content-hidden");
	dave.classList.remove("content-show");
	dave.classList.add("content-hidden");
	Dot.classList.remove("content-show");
	Dot.classList.add("content-hidden");
});

close8.addEventListener('click', () =>{
	content.classList.add('popup-hidden');
	content.classList.remove('popup-show');
	background.classList.add('popup-hidden');
	background.classList.remove('popup-show');
	tuff.classList.remove("content-show");
	tuff.classList.add("content-hidden");
	goku.classList.remove("content-show");
	goku.classList.add("content-hidden");
	sheikah.classList.remove("content-show");
	sheikah.classList.add("content-hidden");
	ulari.classList.remove("content-show");
	ulari.classList.add("content-hidden");
	toby.classList.remove("content-show");
	toby.classList.add("content-hidden");
	elena.classList.remove("content-show");
	elena.classList.add("content-hidden");
	drive.classList.remove("content-show");
	drive.classList.add("content-hidden");
	silh.classList.remove("content-show");
	silh.classList.add("content-hidden");
	jerry.classList.remove("content-show");
	jerry.classList.add("content-hidden");
	juivag.classList.remove("content-show");
	juivag.classList.add("content-hidden");
	zombie.classList.remove("content-show");
	zombie.classList.add("content-hidden");
	dave.classList.remove("content-show");
	dave.classList.add("content-hidden");
	Dot.classList.remove("content-show");
	Dot.classList.add("content-hidden");
});

close9.addEventListener('click', () =>{
	content.classList.add('popup-hidden');
	content.classList.remove('popup-show');
	background.classList.add('popup-hidden');
	background.classList.remove('popup-show');
	tuff.classList.remove("content-show");
	tuff.classList.add("content-hidden");
	goku.classList.remove("content-show");
	goku.classList.add("content-hidden");
	sheikah.classList.remove("content-show");
	sheikah.classList.add("content-hidden");
	ulari.classList.remove("content-show");
	ulari.classList.add("content-hidden");
	toby.classList.remove("content-show");
	toby.classList.add("content-hidden");
	elena.classList.remove("content-show");
	elena.classList.add("content-hidden");
	drive.classList.remove("content-show");
	drive.classList.add("content-hidden");
	silh.classList.remove("content-show");
	silh.classList.add("content-hidden");
	jerry.classList.remove("content-show");
	jerry.classList.add("content-hidden");
	juivag.classList.remove("content-show");
	juivag.classList.add("content-hidden");
	zombie.classList.remove("content-show");
	zombie.classList.add("content-hidden");
	dave.classList.remove("content-show");
	dave.classList.add("content-hidden");
	Dot.classList.remove("content-show");
	Dot.classList.add("content-hidden");
	Ed.classList.remove("content-show");
	Ed.classList.add("content-hidden");
});

close10.addEventListener('click', () =>{
	content.classList.add('popup-hidden');
	content.classList.remove('popup-show');
	background.classList.add('popup-hidden');
	background.classList.remove('popup-show');
	tuff.classList.remove("content-show");
	tuff.classList.add("content-hidden");
	goku.classList.remove("content-show");
	goku.classList.add("content-hidden");
	sheikah.classList.remove("content-show");
	sheikah.classList.add("content-hidden");
	ulari.classList.remove("content-show");
	ulari.classList.add("content-hidden");
	toby.classList.remove("content-show");
	toby.classList.add("content-hidden");
	elena.classList.remove("content-show");
	elena.classList.add("content-hidden");
	drive.classList.remove("content-show");
	drive.classList.add("content-hidden");
	silh.classList.remove("content-show");
	silh.classList.add("content-hidden");
	jerry.classList.remove("content-show");
	jerry.classList.add("content-hidden");
	juivag.classList.remove("content-show");
	juivag.classList.add("content-hidden");
	zombie.classList.remove("content-show");
	zombie.classList.add("content-hidden");
	dave.classList.remove("content-show");
	dave.classList.add("content-hidden");
	Dot.classList.remove("content-show");
	Dot.classList.add("content-hidden");
	Ed.classList.remove("content-show");
	Ed.classList.add("content-hidden");
});

close12.addEventListener('click', () =>{
	content.classList.add('popup-hidden');
	content.classList.remove('popup-show');
	background.classList.add('popup-hidden');
	background.classList.remove('popup-show');
	tuff.classList.remove("content-show");
	tuff.classList.add("content-hidden");
	goku.classList.remove("content-show");
	goku.classList.add("content-hidden");
	sheikah.classList.remove("content-show");
	sheikah.classList.add("content-hidden");
	ulari.classList.remove("content-show");
	ulari.classList.add("content-hidden");
	toby.classList.remove("content-show");
	toby.classList.add("content-hidden");
	elena.classList.remove("content-show");
	elena.classList.add("content-hidden");
	drive.classList.remove("content-show");
	drive.classList.add("content-hidden");
	silh.classList.remove("content-show");
	silh.classList.add("content-hidden");
	jerry.classList.remove("content-show");
	jerry.classList.add("content-hidden");
	juivag.classList.remove("content-show");
	juivag.classList.add("content-hidden");
	zombie.classList.remove("content-show");
	zombie.classList.add("content-hidden");
	dave.classList.remove("content-show");
	dave.classList.add("content-hidden");
	Dot.classList.remove("content-show");
	Dot.classList.add("content-hidden");
	Ed.classList.remove("content-show");
	Ed.classList.add("content-hidden");
});

close13.addEventListener('click', () =>{
	content.classList.add('popup-hidden');
	content.classList.remove('popup-show');
	background.classList.add('popup-hidden');
	background.classList.remove('popup-show');
	tuff.classList.remove("content-show");
	tuff.classList.add("content-hidden");
	goku.classList.remove("content-show");
	goku.classList.add("content-hidden");
	sheikah.classList.remove("content-show");
	sheikah.classList.add("content-hidden");
	ulari.classList.remove("content-show");
	ulari.classList.add("content-hidden");
	toby.classList.remove("content-show");
	toby.classList.add("content-hidden");
	elena.classList.remove("content-show");
	elena.classList.add("content-hidden");
	drive.classList.remove("content-show");
	drive.classList.add("content-hidden");
	silh.classList.remove("content-show");
	silh.classList.add("content-hidden");
	jerry.classList.remove("content-show");
	jerry.classList.add("content-hidden");
	juivag.classList.remove("content-show");
	juivag.classList.add("content-hidden");
	zombie.classList.remove("content-show");
	zombie.classList.add("content-hidden");
	dave.classList.remove("content-show");
	dave.classList.add("content-hidden");
	Dot.classList.remove("content-show");
	Dot.classList.add("content-hidden");
	Ed.classList.remove("content-show");
	Ed.classList.add("content-hidden");
});

close14.addEventListener('click', () =>{
	content.classList.add('popup-hidden');
	content.classList.remove('popup-show');
	background.classList.add('popup-hidden');
	background.classList.remove('popup-show');
	tuff.classList.remove("content-show");
	tuff.classList.add("content-hidden");
	goku.classList.remove("content-show");
	goku.classList.add("content-hidden");
	sheikah.classList.remove("content-show");
	sheikah.classList.add("content-hidden");
	ulari.classList.remove("content-show");
	ulari.classList.add("content-hidden");
	toby.classList.remove("content-show");
	toby.classList.add("content-hidden");
	elena.classList.remove("content-show");
	elena.classList.add("content-hidden");
	drive.classList.remove("content-show");
	drive.classList.add("content-hidden");
	silh.classList.remove("content-show");
	silh.classList.add("content-hidden");
	jerry.classList.remove("content-show");
	jerry.classList.add("content-hidden");
	juivag.classList.remove("content-show");
	juivag.classList.add("content-hidden");
	zombie.classList.remove("content-show");
	zombie.classList.add("content-hidden");
	dave.classList.remove("content-show");
	dave.classList.add("content-hidden");
	Dot.classList.remove("content-show");
	Dot.classList.add("content-hidden");
	Ed.classList.remove("content-show");
	Ed.classList.add("content-hidden");
});

background.addEventListener('click', () => {
	content.classList.add('popup-hidden');
	content.classList.remove('popup-show');
	background.classList.add('popup-hidden');
	background.classList.remove('popup-show');
	tuff.classList.remove("content-show");
	tuff.classList.add("content-hidden");
	goku.classList.remove("content-show");
	goku.classList.add("content-hidden");
	sheikah.classList.remove("content-show");
	sheikah.classList.add("content-hidden");
	ulari.classList.remove("content-show");
	ulari.classList.add("content-hidden");
	toby.classList.remove("content-show");
	toby.classList.add("content-hidden");
	elena.classList.remove("content-show");
	elena.classList.add("content-hidden");
	drive.classList.remove("content-show");
	drive.classList.add("content-hidden");
	silh.classList.remove("content-show");
	silh.classList.add("content-hidden");
	jerry.classList.remove("content-show");
	jerry.classList.add("content-hidden");
	juivag.classList.remove("content-show");
	juivag.classList.add("content-hidden");
	zombie.classList.remove("content-show");
	zombie.classList.add("content-hidden");
	dave.classList.remove("content-show");
	dave.classList.add("content-hidden");
	Dot.classList.remove("content-show");
	Dot.classList.add("content-hidden");
	Ed.classList.remove("content-show");
	Ed.classList.add("content-hidden");
});
