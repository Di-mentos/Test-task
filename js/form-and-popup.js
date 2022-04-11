var blockForm = document.getElementsByClassName("wrapper__form")[0];
var wrapperContent = document.getElementsByClassName("wrapper__content")[0];
var popup = document.getElementsByClassName("popup")[0];

var body = document.getElementsByTagName("body")[0];
var blackBox;
var counter = 0;

blackBox = document.createElement('div');
blackBox.className = "black";
blackBox.style.width = "100%";
blackBox.style.height = "100%";
blackBox.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
blackBox.style.position = "absolute";
blackBox.style.top = "0";
blackBox.style.zIndex = "1";
blackBox.style.opacity = "0";
blackBox.style.display = "none";
blackBox.style.transition = "opacity .3s linear";
body.append(blackBox);


/**********************Исчезновение формы и появление попапа*************************/
document.addEventListener('click', function(q){
	if(q.target.className == "wrapper__form" || q.target.className == "black"){
		if(counter==1){
		blockForm.style.opacity = "0";
		blackBox.style.opacity = "0";
		counter--;
		blockForm.addEventListener('transitionend', function f2(){
			blockForm.style.display = "none";
			blackBox.style.display = "none";
			blockForm.removeEventListener("transitionend", f2);
			})
		}
	}
	else if(q.target.getAttribute("type") == "submit"){
		if(counter == 1){
			blockForm.style.opacity = "0";
			counter--;
			blockForm.addEventListener('transitionend', function f2(){
			blockForm.style.display = "none";
			
			popup.style.display = "block";
			if(window.getComputedStyle(popup).display == "block"){
				popup.style.opacity = "1";
			}
			blockForm.removeEventListener("transitionend", f2);
			})
		}
	}
})

/******************Исчезновение попапа*****************/
document.addEventListener('click', function(s){
	if(s.target.className == "black" || s.target.className == "popup"){
		if(counter == 0){
			blackBox.style.opacity = "0";
			popup.style.opacity = "0";
			popup.addEventListener('transitionend', function f1(){
				blackBox.style.display = "none";
				popup.style.display = "none";
				popup.removeEventListener('transitionend', f1);
			})
		}

	}
})

/*******************Появление формы и тени*******************/
function feedbackForm(){	
	if(counter==0){
		blockForm.style.display = "block";
		blackBox.style.display = "block";
		counter++;
		if(window.getComputedStyle(blockForm).display == "block"){
			blockForm.style.opacity = "1";
			blackBox.style.opacity = "1";
		}
	}	
}

