
var search_button = document.querySelector('.search_button');
var search_input = document.querySelector('.search_input');
var search_x = document.querySelector('.search_x-btn');

search_button.addEventListener("click",function(){
	search_button.classList.add("move");
	search_input.classList.add("visible");
	search_x.classList.add("visible");
});

search_x.addEventListener("click",function(){
	search_button.classList.remove("move");
	search_input.classList.remove("visible");
	search_x.classList.remove("visible");
	search_input.value="";
});



var menu_btn = document.querySelector('.menu_button');
var menu = document.querySelector('.menu');
var menu_x = document.querySelector('.menu-x');
var body = document.querySelector('body');

menu_btn.addEventListener("click",function(){
	menu.classList.add("up");
	body.classList.add("scroll");
});

menu_x.addEventListener("click",function(){
	menu.classList.remove("up");
	body.classList.remove("scroll");
});
