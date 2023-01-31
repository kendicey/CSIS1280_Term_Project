// ContactUs.html
let firstName = document.getElementById("contactFirstName");
let title = document.getElementsByName("title");
let lastName = document.getElementById("contactLastName");
let Mr = document.getElementById("Mr");
let Mrs = document.getElementById("Mrs");
let Ms = document.getElementById("Ms");
let email = document.getElementById("contactEmail");
let comment = document.getElementById("comment");
let submitButton = document.getElementById("submitButton");

submitButton.onclick = function(){
	if (firstName.value == "")
	{
		alert("First name cannot be empty");
	}
	else if (lastName.value == "")
	{
		alert("Last name cannot be empty");
	}
	else if (!Mr.checked && !Mrs.checked && !Ms.checked)
	{
		alert("Please select your title");
	}
	else if (email.value == "")
	{
		alert("Contact email cannot be empty");
	}
	else if (comment.value == "")
	{
		alert("Please leave comments before form submission");
	}
	else
	{
		alert("Form submitted. Thank you for contacting us.");
		firstName.value = "";
		lastName.value = "";
		Mr.checked = false;
		Mrs.checked = false;
		Ms.checked = false;
		email.value = "";
		comment.value = "";
	}
}


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