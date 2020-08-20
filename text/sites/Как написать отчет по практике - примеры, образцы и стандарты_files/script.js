document.getElementById("header__menu_sandwich").onclick = function(e){
	e.preventDefault();
	var elStyle = document.getElementById("header__mobile_menu");
	elStyle.style.display = (elStyle.style.display === "block" ? "none" : "block");
	document.getElementById("cancelMenu").style.display = "block";
	document.getElementById("header__menu_sandwich").style.display = "none";
}
document.getElementById("cancelMenu").onclick = function(e){
	e.preventDefault();
	var elStyle = document.getElementById("header__mobile_menu");
	elStyle.style.display = (elStyle.style.display === "none" ? "block" : "none");
	document.getElementById("cancelMenu").style.display = "none";
	document.getElementById("header__menu_sandwich").style.display = "block";
}


document.getElementById("header__menu_sandwich_top").onclick = function(e){
	e.preventDefault();
	var elStyle = document.getElementById("header__mobile_menu_top");
	elStyle.style.display = (elStyle.style.display === "block" ? "none" : "block");
	document.getElementById("cancelMenu_top").style.display = "block";
	document.getElementById("header__menu_sandwich_top").style.display = "none";
}
document.getElementById("cancelMenu_top").onclick = function(e){
	e.preventDefault();
	var elStyle = document.getElementById("header__mobile_menu_top");
	elStyle.style.display = (elStyle.style.display === "none" ? "block" : "none");
	document.getElementById("cancelMenu_top").style.display = "none";
	document.getElementById("header__menu_sandwich_top").style.display = "block";
}

document.getElementById("header__magnifer_second_field").onclick = function(e){
	e.preventDefault();
	var elStyle = document.getElementById("header__head_field_search");
	elStyle.style.display = (elStyle.style.display === "block" ? "none" : "block");
}

