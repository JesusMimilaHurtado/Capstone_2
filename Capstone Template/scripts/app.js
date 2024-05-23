"use strict"

window.onload = function(){
    displayOptions;
    dropdown.style.display = 'none';

}

const dropdown = document.getElementById('dropdown');

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

function displayInfo(value){
    const img = document.getElementById('silhouette');
    img.remove();

    nationalParksArray.forEach(park => {
        const parkcell = document.getElementById('table');
        parkcell.innerHTML = `
        <th scope="row">${park.LocationID}</th>
        <td>${park.LocationName}</td>
        <td>${park.}</td>
        <td>${park.}</td>
        <td>${park.}</td>
        `;
        courseList.appendChild(courseCard);
    });

}