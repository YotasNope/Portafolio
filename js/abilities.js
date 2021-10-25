const open = document.getElementById("open");
const open2 = document.getElementById("open2");
const open3 = document.getElementById("open3");
const program = document.getElementById("Program");
const modeling = document.getElementById("modeling");
const diseno = document.getElementById("diseno");

open.addEventListener('click', () =>{
	program.classList.remove('hidden');
	program.classList.add('show');
	modeling.classList.add('hidden');
	modeling.classList.remove('show');
	diseno.classList.add('hidden');
	diseno.classList.remove('show');
	open.classList.add('button-active');
	open2.classList.remove('button-active');
	open3.classList.remove('button-active');
});

open2.addEventListener('click', () =>{
	modeling.classList.remove('hidden');
	modeling.classList.add('show');
	program.classList.add('hidden');
	program.classList.remove('show');
	diseno.classList.add('hidden');
	diseno.classList.remove('show');
	open2.classList.add('button-active');
	open.classList.remove('button-active');
	open3.classList.remove('button-active');
});


open3.addEventListener('click', () =>{
	modeling.classList.remove('show')
	modeling.classList.add('hidden');
	program.classList.add('hidden');
	program.classList.remove('show');
	diseno.classList.remove('hidden');
	diseno.classList.add('show');
	open2.classList.remove('button-active');
	open.classList.remove('button-active');
	open3.classList.add('button-active');
})