// Header and Footer for all pages
let scriptionField = document.getElementById("scription");
let submitBtn = document.getElementById("submit");

submitBtn.onclick = function(){
	if(scriptionField.value == "")
	{
		alert("Please first enter email address");
	}
	else
	{
		scriptionField.value = "You are signed up. Thank you!";
	}
}

// AboutHongKong.html
let accordionPanel = document.getElementsByClassName("accordionPanel");

for (let i = 0; i < accordionPanel.length; i++){
		accordionPanel[i].addEventListener("click", function(){
			this.classList.toggle("active");
			this.children[0].children[0].classList.toggle("fa-minus-square");
		})
}

// Activities.html, Food.html, Accomodation.html
function addRemoveClass(evt)
{
	let active_tabs = document.querySelectorAll(".current");
	
	for(active_tab of active_tabs)
	{
		active_tab.className = active_tab.className.replace("current", "");
	}
	
	let anchor = evt.target;
	let li = anchor.parentElement;
	
	li.className += " current";
	let tab_id = anchor.href.substring(anchor.href.length - 5);
	
	document.getElementById(tab_id).className += " current";
}

let ul_container = document.getElementById("ul_tab_nav");
ul_container.addEventListener("click", addRemoveClass, false);
