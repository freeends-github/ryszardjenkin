
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