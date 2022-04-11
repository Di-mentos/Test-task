var sub = document.getElementsByClassName("menu__submenu")[0];
var burger = document.getElementsByClassName("menu__menu-icon")[0];
var counter = 0;

function menuClick(){
	if(counter == 1){
		burger.children[0].children[0].style.filter = "grayscale(100%)";
		sub.style.transition = "translateX, 0.5s ease";
		sub.style.transform = "translateX(106%)";
		counter--;
	}
	else if(counter == 0){
		burger.children[0].children[0].style.filter = "grayscale(0%)";
		sub.style.transition = "translateX, 0.5s ease";
		sub.style.transform = "translateX(5.4%)";
		counter++;
	}
}