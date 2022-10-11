// function to load a file from the URL "fromFile" into the object identified by "whereTo"
function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				document.querySelector(whereTo).innerHTML = this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
			}
		
	} // end ajax.onreadystatechange function

	// initiate request and wait for response
	ajax.send();

}



// new Recipe object
function Recipe(recipeName, contributorName, imageURL, ingredientsURL, equipmentURL, directionsURL) {
	
	this.recipeName = recipeName;
	this.contributor = contributorName;
	this.imageURL = imageURL;
	this.ingredients = ingredientsURL;
	this.equipment = equipmentURL;
	this.directions = directionsURL;
	
	this.displayRecipe = function() {
		
		document.querySelector("#titlebanner h1").innerHTML = this.recipeName;
		document.querySelector("#contributor").innerHTML = this.contributor;
		document.querySelector("#titlebanner").style.backgroundImage = "url(" + this.imageURL + ")";
		loadFileInto(this.ingredients, "#ingredients ul");
		loadFileInto(this.equipment, "#equipment ul");
		loadFileInto(this.directions, "#directions ol");
		
	}
	
}


treslechescake = new Recipe(
	"Tres Leches Cake", 
	"Eleno Rivera", 
	"https://images.unsplash.com/photo-1457666134378-6b77915bd5f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHZhbmlsbGElMjBjYWtlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60", 
	"ingredients.html", 
	"equipment.html", 
	"directions.html"
);

bananapie = new Recipe(
	"Tiramisu", 
	"Alison Roman", 
	"https://static01.nyt.com/images/2017/04/05/dining/05COOKING-TIRAMISU1/05COOKING-TIRAMISU1-master768.jpg?w=1280&q=75", 
	"tiramisu-ingredients.html", 
	"tiramisu-equipment.html", 
	"tiramisu-directions.html"
);



window.onload = function() {
	
	document.querySelector("#firstRecipe").onclick = function() {
		treslechescake.displayRecipe();
	}

	document.querySelector("#secondRecipe").onclick = function() {
		bananapie.displayRecipe();
	}
	
	
} // end window.onload