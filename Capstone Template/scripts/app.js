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
        dropdown.style.display = 'block';
        const defaultOption = document.createElement('option');
        defaultOption.text = 'Choose Location';
        dropdown.appendChild(defaultOption);

        locationsArray.forEach(location => {
            const locationOption = document.createElement('option');
            locationOption.value = location;
            locationOption.text = location;
            dropdown.appendChild(locationOption);
        });
       
    } 
    else if (radio === 'type') {
        dropdown.style.display = 'block';
        const defaultOption = document.createElement('option');
        defaultOption.text = 'Choose Type';
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
    const img = document.getElementById('silhouette');
    if (img) {
        img.style.display = 'none';
    }

    const info = document.getElementById('info'); // Ensure 'info' element is defined
    if (img.style.display == 'none' && info) {
        info.style.display = '';
    }

    let filteredArray = nationalParksArray.filter(park => park.State.includes(value));

    const parkcell = document.getElementById('table'); // Ensure 'parkcell' is defined outside the loop
    parkcell.innerHTML = ''; // Clear any existing content before appending
    filteredArray.forEach(park => {
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