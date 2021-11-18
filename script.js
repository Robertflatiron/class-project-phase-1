

fetch('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json')
.then((response) => (response.json()))
.then((carData) => console.log(carData));



// Each car will have a "like" button, a section to have comments and "submit" it, and 