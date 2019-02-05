// from data.js
var tableData = data;

// Use D3 to select the table
var table = d3.select("table");

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Print out the data from data.js
console.log(data);

// Defining an anonymous function and looping through the data//
// console.log each UFOSighting object
data.forEach(function(UFOSighting) {
  console.log(UFOSighting);
});

// Append one table row `tr` to the table body
//Using d3 to append one table row `tr` for each UFOSighting object
data.forEach(function(UFOSighting) {
  console.log(UFOSighting);
  var row = tbody.append("tr");
});

data.forEach(function(UFOSighting) {
  console.log(UFOSighting);
  var row = tbody.append("tr");

  Object.entries(UFOSighting).forEach(function([key, value]) {
    console.log(key, value);
  });
});

// Using `Object.entries` to console.log each UFOSighting value
//Using d3 to append 1 cell per UFOSighting value (datetime, city, state, country, shape, duration, and comment)
data.forEach(function(UFOSighting) {
  console.log(UFOSighting);
  var row = tbody.append("tr");

  Object.entries(UFOSighting).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value in the UFOSighting object
    var cell = tbody.append("td");
  });
});


// Function to create a table from an array of objects
function createTable(rows){
    rows.forEach(function(element) {
        var row = tbody.append('tr');
        Object.entries(element).forEach(function([key, value]) {
            row.append('td').text(value);
        });
    });
}


//Select submit button and create function to be called on a click

var submit = d3.select("#filter-btn");
submit.on("click", function() {

// Preventing the page from refreshing
d3.event.preventDefault();

// Selecting the input element and getting the raw HTML node
var inputElement = d3.select("#datetime");

var inputValue = inputElement.property("value");

//matching the inputted value with that in the stored data
var filteredData = tableData.filter(data => data.datetime === inputValue);

console.log(filteredData);


//to clear the webpage output
    tbody.selectAll('tr').remove();

//inputs the filtered data into the table
    filteredData.forEach(function(obj){
        var rows = tbody.append("tr");
        Object.keys(obj).forEach(function(key){
            rows.append("td").text(obj[key]);
        })
    })
});
