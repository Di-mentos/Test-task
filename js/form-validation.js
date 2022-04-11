var name = document.getElementById("name");
var email = document.getElementById("email");
var message = document.getElementById("message");
var submit = document.getElementById("submit");
var field = document.getElementsByClassName("field");

function validation(){
	for(var i=0; i<field.length; i++){
		if(field[i].value == ""){
			submit.setAttribute("type", "button");
			field[i].style.boxShadow = "0 0 10px 3px rgba(255, 0, 0, 0.8)";
			field[i].style.borderColor = "red";
		}
		else if(field[i].value != ""){
			field[i].style.boxShadow = "0 0 10px 3px rgba(70, 204, 0, 0.8)";
			field[i].style.borderColor = "green";			
		}
	}
	if(name.value!="" && email.value!="" && message.value!=""){
		console.log("True!");
		submit.setAttribute("type", "submit");
	}	
}
