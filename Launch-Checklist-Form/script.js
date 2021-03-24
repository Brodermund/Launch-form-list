// Write your JavaScript code here!
fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
   response.json().then(function(json){
      const div = document.getElementById("missionTarget")
      const planetChoice = Math.floor(Math.random() * 6)
      div.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[planetChoice].name}</li>
            <li>Diameter: ${json[planetChoice].diameter}</li>
            <li>Star: ${json[planetChoice].star}</li>
            <li>Distance from Earth: ${json[planetChoice].distance}</li>
            <li>Number of Moons: ${json[planetChoice].moons}</li>
         </ol>
            <img src="${json[planetChoice].image}">
            `
   })
})
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
         // event.preventDefault();
      }
      if (typeof(pilotNameInput.value) !== string || typeof(copilotNameInput.value) !== string || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
         alert("Valid input type required ");
         // event.preventDefault();
      }
      let launchStatusText = document.getElementById("launchStatus")
      let pilotStatusText = document.getElementById("pilotStatus")
      let copilotStatusText = document.getElementById("copilotStatus")
      let fuelStatusText = document.getElementById("fuelStatus")
      let cargoStatusText = document.getElementById("cargoStatus")
      let faultyItems = document.getElementById("faultyItems")
      let fuelStatusCheck = true
      let cargoStatusCheck = true
      pilotStatusText.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`
      copilotStatusText.innerHTML = `Co-pilot ${copilotNameInput.value} is is ready for launch`
      if(fuelLevelInput.value < 10000){
         fuelStatusText.innerHTML = "Not enough fuel for journey"
         faultyItems.style.visibility = "visible"
         fuelStatusCheck = false 
         launchStatusText.innerHTML = "Shuttle not ready for launch"
         launchStatusText.style.color = "red"
      }else if(fuelLevelInput.value >= 10000){
         fuelStatusText.innerHTML = "Fuel level high enough for launch"
      }
      if(cargoMassInput.value > 10000){
         cargoMassInput.innerHTML = "too much mass for the shuttle to take off"
         faultyItems.style.visibility = "visible"
         launchStatusText.innerHTML = "Shuttle not ready for launch"
         launchStatusText.style.color = "red"
         cargoStatusCheck = false
      }else if(fuelLevelInput.value <= 10000){
         cargoStatusText.innerHTML = "Cargo mass low enough for launch"
      }
      if(fuelStatusCheck === true && cargoStatusCheck === true){
         launchStatusText.innerHTML = "Shuttle is ready for launch"
         launchStatusText.style.color = "green"
         faultyItems.style.visibility = "hidden"
      }
   })
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
