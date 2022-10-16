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
	"Banana Cream Pie", 
	"Logan Gilliam", 
	"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F05%2F18%2F3355919-banana-cream-pie-ReneePaj-1x1-1.jpg", 
	"bananapie-ingredients.html", 
	"bananapie-equipment.html", 
	"bananapie-directions.html"
);

frenchtoast = new Recipe(
	"Fluffy French Toast", 
	"Analysse Palomares", 
	"https://images.unsplash.com/photo-1639108094328-2b94a49b1c2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80", 
	"frenchtoast-ingredients.html", 
	"frenchtoast-equipment.html", 
	"frenchtoast-directions.html"
);


window.onload = function() {
	
	document.querySelector("#firstRecipe").onclick = function() {
		treslechescake.displayRecipe();
	}

	document.querySelector("#secondRecipe").onclick = function() {
		bananapie.displayRecipe();
	}
  
    document.querySelector("#thirdRecipe").onclick = function() {
		frenchtoast.displayRecipe();
	}
  

	
	
} // end window.onload