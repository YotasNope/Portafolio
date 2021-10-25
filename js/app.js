window.addEventListener("scroll", function(){
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 390);

	var circle = document.getElementById("color1");
	circle.classList.toggle("downscroll", window.scrollY > 1600);

	var span = document.querySelector("span");
	span.classList.toggle("downscrolltext", window.scrollY > 1600);

	var circle2 = document.getElementById("color2");
	circle2.classList.toggle("downscroll2", window.scrollY > 1600);

	var circle3 = document.getElementById("color3");
	circle3.classList.toggle("downscroll3", window.scrollY > 1600);

	var circle4 = document.getElementById("color4");
	circle4.classList.toggle("downscroll4", window.scrollY > 1600);

	var circle5 = document.getElementById("color5");
	circle5.classList.toggle("downscroll5", window.scrollY > 1600);

	var circle6 = document.getElementById("color6");
	circle6.classList.toggle("downscroll6", window.scrollY > 1600);

	var circle7 = document.getElementById("color7");
	circle7.classList.toggle("downscroll7", window.scrollY > 1600);

	var circle8 = document.getElementById("color8");
	circle8.classList.toggle("downscroll8", window.scrollY > 1600);

	var circle9 = document.getElementById("color9");
	circle9.classList.toggle("downscroll9", window.scrollY > 1600);

	var circle10 = document.getElementById("color10");
	circle10.classList.toggle("downscroll10", window.scrollY > 1600);

	var circle11 = document.getElementById("color11");
	circle11.classList.toggle("downscroll11", window.scrollY > 1600);

	var circle12 = document.getElementById("color12");
	circle12.classList.toggle("downscroll12", window.scrollY > 1600);

	var circle13 = document.getElementById("color13");
	circle13.classList.toggle("downscroll13", window.scrollY > 1600);

	var circle14 = document.getElementById("color14");
	circle14.classList.toggle("downscroll14", window.scrollY > 1600);

	var circle15 = document.getElementById("color15");
	circle15.classList.toggle("downscroll15", window.scrollY > 1600);
})

var about = document.getElementById("sobre");
var abili = document.getElementById("habili");
var porta = document.getElementById("porta");
var conta = document.getElementById("conta");
window.addEventListener("scroll", function(){

	if (window.scrollY > 500 && window.scrollY < 1464)
	{
		about.classList.add("button-active");
	}
	else
	{
		about.classList.remove("button-active");
	}

	if (window.scrollY > 1464 && window.scrollY < 2670)
	{
		abili.classList.add("button-active");
	}
	else
	{
		abili.classList.remove("button-active");
	}

	if (window.scrollY > 2670 && window.scrollY < 4500)
	{
		porta.classList.add("button-active");
	}
	else
	{
		porta.classList.remove("button-active");
	}

})
