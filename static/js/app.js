// from data.js
var tableData = data;

//console.log(tableData[0]);
//console.log(Object.keys(tableData));
//for (var sightings in tableData){
//    console.log(tableData[sightings])
//};
// for (var sightings in tableData){
//    console.log(Object.entries(sightings))
// };


// Get a reference to the table body
var tbody = d3.select("tbody");

//Use d3 to update each cell's text with sightings report values
data.forEach(function (sightings) {
    //console.log(sightings);
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(function ([key, value]) {
        //console.log(key, value);
        // Append a cell to the row for each value in the sightings report object
        var cell = row.append("td");
        cell.text(value);
    });
});


// Select the form
var form = d3.select("form");
var button = d3.select("#filter-btn");

// Create event handlers
button.on("click", runEnter); 
form.on("submit", runEnter);

function runEnter() {

    // remove any children from the list
    tbody.html("");

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");  

    console.log(inputValue);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    console.log(filteredData);

    //tbody.append("tr").filteredData;
    //we need to display the filtered data on the webpage...

};




