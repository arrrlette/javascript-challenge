// from data.js
var tableData = data;
//console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

//Use d3 to update each cell's text with sightings report values
data.forEach(function (sightings) {
    //console.log(sightings);
    var row = tbody.append("tr"); //add a row to the table to hold each item
    Object.entries(sightings).forEach(function ([key, value]) {
        //console.log(key, value);
        // Append a cell to the row for each value in the sightings report object
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the button and the form
var button = d3.select("#filter-btn");
var form = d3.select("form");

// Create event handlers for clicking the button or pressing the enter key 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

    //display object that dispatched the event in the console
    console.log(d3.event.target);

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // remove any children from the list
    //tbody.html("");

    // Select the input element and get the raw HTML node
    var datetimeInput = d3.select("#datetime");
    var cityInput = d3.select("#city");
    var stateInput = d3.select("#state");
    var countryInput = d3.select("#country");
    var shapeInput = d3.select('#shape');

    // Get the value property of the input element
    var datetimeValue = datetimeInput.property("value");
    var cityValue = cityInput.property("value");
    var stateValue = stateInput.property("value");
    var countryValue = countryInput.property("value");
    var shapeValue = shapeInput.property("value");


    console.log(datetimeValue);

    //create if statements for each search field to allow filtering if not all fields are completed
    var filteredData = [...tableData]; //to make each filter independent of each other
    if (datetimeValue){
        filteredData = filteredData.filter(obj => obj.datetime === datetimeValue);
    };

    if (cityValue){
        filteredData = filteredData.filter(obj => obj.city.toLowerCase() === cityValue.toLowerCase());
    };

    if (stateValue){
        filteredData = filteredData.filter(obj => obj.state.toLowerCase() === stateValue.toLowerCase());
    };

    if (countryValue){
        filteredData = filteredData.filter(obj => obj.country.toLowerCase() === countryValue.toLowerCase());
    };

    if (shapeValue){
        filteredData = filteredData.filter(obj => obj.shape.toLowerCase() === shapeValue.toLowerCase());
    };

    console.log(filteredData);


    //if statement that will run if there is a search result - else it will display an alert showing no results were found.
    if (filteredData.length >= 1) {
        tbody.html(""); //clear out table only if filteredData.length is > 0
        filteredData.forEach(function (updateTable) {
            var row = tbody.append("tr"); //add a row to the table to hold each item
            Object.entries(updateTable).forEach(function ([key, value]) {
                //console.log(key, value);
                // Append a cell to the row for each value in the sightings report object
                var cell = row.append("td");
                cell.text(value);
            });
        });
    }

    else{
        alert("No Results Found.")
    }

    };




