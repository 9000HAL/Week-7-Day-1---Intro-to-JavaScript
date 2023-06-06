//==================Exercise #1 ==========//


/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/


// Define the function that checks for matches
function findWords(dog_string, dog_names) {
    // Loop through the list of dog names
    for (let i = 0; i < dog_names.length; i++) {
      // Check if the current name is present in the string
      if (dog_string.includes(dog_names[i])) {
        console.log(`Matched ${dog_names[i]}`);
      } else {
        console.log("No Match");
      }
    }
  }
  
  // Call the function with the provided parameters
  let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
  let dog_names = ["Max", "HAS", "PuRple", "dog"];
  findWords(dog_string, dog_names);
  
  
//CONSOLE OUTPUT
/*
"Matched Max"
"No Match"
"No Match"
"No Match"
"Matched Max"
"No Match"
"No Match"
"No Match"
*/





//============Exercise #2 ============//


/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

//function replaceEvens(arr){
    //"code goes here"
    // Define the function that replaces even indexes with "even index"
function replaceEvens(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        arr.splice(i, 1, "even index");
      }
    }
    return arr;
  }
  
  // Test the function with the provided parameter
  let arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];
  let outputArr = replaceEvens(arr);
  console.log("Given arr == ", arr);
  console.log("Output arr == ", outputArr);
  

}

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]



