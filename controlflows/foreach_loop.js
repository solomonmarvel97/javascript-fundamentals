// iterable

let country = [
    {
        "name" : "Nigeria",
        "latlong": "10245,21284" 
    },
    {
        "name" : "Ghana",
        "latlong": "10245,21284" 
    }
]



// country.forEach(item => {
//     // on every single item in the array this would 
//     // run
//     console.log(item.name + " - " + item.latlong)
// });


// for loop
for(let i = 0; i < country.length; i++) {
    console.log(country[i].name + " - " + country[i].latlong)
}
