// function to load a file from the URL "fromFile" into the object identified by "whereTo"
function loadFileInto(fromFile, whereTo) {

  // creating a new XMLHttpRequest object
  ajax = new XMLHttpRequest();

  // defines the GET/POST method, source, and async value of the AJAX object
  ajax.open("GET", fromFile, true);

  // provides code to do something in response to the AJAX request
  ajax.onreadystatechange = function() {
    if ((this.readyState == 4) && (this.status == 200)) {
      document.querySelector(whereTo).innerHTML += this.responseText;

    } else if ((this.readyState == 4) && (this.status != 200)) {
      console.log("Error: " + this.responseText);
    }

  } // end ajax.onreadystatechange function

  // initiate request and wait for response
  ajax.send();

}


window.onload = function() {

  loadFileInto("ingredients.html", "#ingredients ul");
  loadFileInto("equipment.html", "#equipment ul");
  loadFileInto("directions.html", "#directions ol");

  document.querySelector("#titlebanner h1").classList.add("tp");

  document.querySelector("#titlebanner h1").onclick = function() {
    this.classList.toggle("tan");
  }

  document.querySelector("#columns #ingredients").onclick = function() {
    this.classList.toggle("tpShow")
  }

  document.querySelector("#columns #equipment").onclick = function() {
    this.classList.toggle("tpShow")
  }

  document.querySelector("#columns #directions").onclick = function() {
    this.classList.toggle("tpShow")
  }





  setTimeout(function() {
    document.querySelector("#columns #ingredients ul").innerHTML += "<li>A hunger for cake</li>";
    document.querySelector("#columns #directions ol").innerHTML += "<li>Enjoy!</li>";
  }, 100);



}