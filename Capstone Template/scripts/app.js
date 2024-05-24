"use strict"

window.onload = function(){
    displayOptions;
    dropdown.style.display = 'none';
    info.style.display = 'none';

}

const dropdown = document.getElementById('dropdown');
const info = document.getElementById('info');


function displayOptions() {
    const radio = document.querySelector('input[name=radio]:checked').value;
    updateDropdown(radio);
}

function updateDropdown(radio) {
    const dropdown = document.getElementById('dropdown');
    dropdown.innerHTML = ''; // Clear existing options

    if (radio === 'location') {
        info.style.display = 'none';
        dropdown.style.display = 'block';
        const defaultOption = document.createElement('option');
        defaultOption.text = '--Choose Location--';
        dropdown.appendChild(defaultOption);

        locationsArray.forEach(location => {
            const locationOption = document.createElement('option');
            locationOption.value = location;
            locationOption.text = location;
            dropdown.appendChild(locationOption);
        });
       
    } 
    else if (radio === 'type') {
        info.style.display = 'none';
        dropdown.style.display = 'block';
        const defaultOption = document.createElement('option');
        defaultOption.text = '--Choose Type--';
        dropdown.appendChild(defaultOption);

        parkTypesArray.forEach(park => {
            const parkOption = document.createElement('option');
            parkOption.value = park;
            parkOption.text = park;
            dropdown.appendChild(parkOption);
        });
    } 
    else {
        dropdown.style.display = 'none';
    }
}

// Attach displayOptions function to radio button change event
document.querySelectorAll('input[name=radio]').forEach(radioButton => {
radioButton.addEventListener('change', displayOptions);
});

function getValue(){
    const value = dropdown.value;
    displayInfo(value)
}

function displayInfo(value) {
    const radio = document.querySelector('input[name=radio]:checked').value;
    const img = document.getElementById('silhouette');
    if (img) {
        img.style.display = 'none';
    }

    const info = document.getElementById('info'); // Ensure 'info' element is defined
    if (img.style.display == 'none' && info) {
        info.style.display = '';
    }

    let filteredArray;

    if (radio === 'location') {
        filteredArray = nationalParksArray.filter(park => park.State.includes(value))
    } 
    else if (radio === 'type') {
        filteredArray = nationalParksArray.filter(park => park.LocationName.includes(value))
    } 

    const parkcell = document.getElementById('table'); // Ensure 'parkcell' is defined outside the loop
    parkcell.innerHTML = ''; // Clear any existing content before appending
    filteredArray.forEach(park => {
        if(park.Phone === 0){
            park.Phone = 'N/A';
        }
        if(park.Visit === undefined){
            park.Visit = 'N/A';
        }
        const parkInfo = document.createElement('tr'); // Create 'parkInfo' inside the loop
        parkInfo.innerHTML = `
            <th scope="row" class="text-center col-2">${park.LocationID}</th>
            <td class="text-center col-2">${park.LocationName}</td>
            <td class="text-center col-2">${park.Address}</td>
            <td class="text-center col-2">${park.Phone}</td>
            <td class="text-center col-2">${park.Visit}</td>
        `;
        parkcell.appendChild(parkInfo);
    });
}

dropdown.addEventListener('change', getValue)

function populateDropdown() {
    const dropdown = document.getElementById("saiyanDropdown"); // Get the dropdown element
    const fragment = document.createDocumentFragment(); // Create a document fragment to optimize DOM manipulation
  
    // Iterate over the saiyans array and create an option element for each Saiyan
    saiyans.forEach((saiyan) => {
      const option = document.createElement("option"); // Create a new option element
      option.value = saiyan.name; // Set the option value to the Saiyan's name
      option.textContent = `${saiyan.name} (${saiyan.powerLevel})`; // Set the displayed text to the Saiyan's name and power level
      fragment.appendChild(option); // Append the option to the document fragment
    });
  
    // Append the document fragment to the dropdown, reducing reflows and repaints
    dropdown.appendChild(fragment);
  }
function setupEventListeners() {
    // Add a click event listener to the "Show Selected Saiyan" button
    // document
    //   .getElementById("showDetailsBtn")
    //   .addEventListener("click", showSelectedSaiyan);
//   const showDetailsBtn =  document.getElementById("showDetailsBtn")
//   showDetailsBtn.addEventListener("click", showSelectedSaiyan);
    document.getElementById("saiyanDropdown")
    .addEventListener("change", showSelectedSaiyan);
    document.getElementById("saiyanDropdown")
    .addEventListener("change", showSelectedSaiyanChange);

}
function showSelectedSaiyan() {
    // const dropdown = document.getElementById("saiyanDropdown"); // Get the dropdown element
    // const selectedSaiyan = dropdown.value; // Get the value of the selected option
    // const detailsArea = document.getElementById("saiyanDetails"); // Get the paragraph element to display the details
    // detailsArea.textContent = selectedSaiyan; // Set the paragraph text to the selected Saiyan's name
    document.getElementById("saiyanDetails").textContent = document.getElementById("saiyanDropdown").value
  }
function showSelectedSaiyanChange() {
    const dropdown = document.getElementById("saiyanDropdown"); // Get the dropdown element
    const selectedSaiyanName = dropdown.value; // Get the value of the selected option
    const detailsArea = document.getElementById("saiyanDetails"); // Get the paragraph element to display the details
  
    // Find the selected Saiyan object
    const selectedSaiyan = saiyans.find((saiyan) => saiyan.name === selectedSaiyanName
);
if (selectedSaiyan) {
  // Display the details of the selected Saiyan
  detailsArea.innerHTML = `
          <strong>Name:</strong> ${selectedSaiyan.name}<br>
          <strong>Power Level:</strong> ${selectedSaiyan.powerLevel}<br>
          <strong>Transformations:</strong> ${selectedSaiyan.transformations.join(
            ", "
          )}<br>
          <img src="${selectedSaiyan.img}">
      `;
} else {
  // If no Saiyan is found, clear the details area
  detailsArea.innerHTML = "No Saiyan selected.";
}
}