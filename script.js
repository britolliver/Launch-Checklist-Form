window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let faultyItems = document.getElementById("faultyItems");
      let fuelStatus = document.getElementById("fuelStatus");
      let launchStatus = document.getElementById("launchStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      
      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
         response.json().then( function(json) {
         let div = document.getElementById("missionTarget");
         div.innerHTML = `
         <ol>
         <li>Name: ${json[2].name}</li>
         <li>Diameter: ${json[2].diameter}</li>
         <li>Star: ${json[2].star}</li>
         <li>Distance from Earth: ${json[2].distance}</li>
         <li>Number of Moons: ${json[2].moons}</li>
      </ol>
      <img src="${json[2].image}">
       `;

         });

      });
      
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         
         alert("All fields are required!");
         return;

         
      } else if (pilotNameInput.value === "" || copilotNameInput.value === "" || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {

         alert("Make sure to enter valid information for each field");
         return;
      } 
      
      
      if (fuelLevelInput.value < 10000) {
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
      copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch`;
         fuelStatus.innerHTML = `There is not enough fuel for the journey`;
         launchStatus.innerHTML = `Shuttle not ready for launch`;
         launchStatus.style.color = "red";
      } 
      
      if(cargoMassInput.value > 10000){
            faultyItems.style.visibility = "visible"; 
            pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
      copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch`;
            cargoStatus.innerHTML = `Cargo mass is too high for shuttle to take off`;
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = "red";
      }
      
      if(fuelLevelInput.value > 10000 && cargoMassInput.value < 10000 ){
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
      copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch`;
         launchStatus.innerHTML = `Shuttle Is Ready For Launch`;
         launchStatus.style.color = "green";
      } 

      
      // if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         
      //    alert("All fields are required!");
      //    faultyItems.style.visibility = "hidden";
      //    launchStatus.innerHTML = "Awaiting Information Before Launch";
      //    launchStatus.style.color = "black";

         
      // } else if (pilotNameInput.value === "" || copilotNameInput.value === "" || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {

      //    alert("Make sure to enter valid information for each field");
         
      // };


      // fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      //    response.json().then( function(json) {
      //    let div = document.getElementById("missionTarget");
      //    div.innerHTML = `
      //    <ol>
      //    <li>Name: ${json[2].name}</li>
      //    <li>Diameter: ${json[2].diameter}</li>
      //    <li>Star: ${json[2].star}</li>
      //    <li>Distance from Earth: ${json[2].distance}</li>
      //    <li>Number of Moons: ${json[2].moons}</li>
      // </ol>
      // <img src="${json[2].image}">
      //  `;

      //    });

      // });

   });

   
});


