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

// Select the button
var button = d3.select("#filter-btn");

// Select the form
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
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

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




