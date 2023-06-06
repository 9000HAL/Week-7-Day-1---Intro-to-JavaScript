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

// DEFINE function that replaces even indexes with "even index"
function replaceEvens(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        arr.splice(i, 1, "even index");
      }
    }
    return arr;
  }
  
  // TEST the function with the provided parameter
  let arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];
  let outputArr = replaceEvens(arr);
  
  // Display the expected output format
  console.log("Output arr == ", outputArr);


//CONSOLE OUTPUT
// ["even index","Baseball","even index","Goku","even index","Rodger"]



//==================CODEWARS Problem #1 ==========//

// CODEWARS/PYTHON PROBLEM #1 LINK: https://www.codewars.com/kata/reviews/55a709464d8e6220280000c9/groups/647fa013684dee0001bc6085

// DEFINE function that returns greeting statement
function greet(name) {
  // Concatenate the name + greeting statement
  var greeting = "Hello, " + name + " how are you doing today?";
  return greeting;
}

// CALL function with parameter
var name = "Gabe";
var output = greet(name);

// Display output
console.log(output);


//Console Output:
//"Hello, Gabe how are you doing today?"




//==================CODEWARS Problem #2 ==========//

// CODEWARS/PYTHON PROBLEM #2 LINK: https://www.codewars.com/kata/reviews/53e924b26e9a01bd68000148/groups/647fa62487d6c90001f5b5b6

// DEFINE function multiplies two numbers
function multiply(a, b) {
    // Perform multiplication
    var result = a * b;
    return result;
  }
  
  // CALL function with parameters
  var a = 4;
  var b = 5;
  var output = multiply(a, b);
  
  // Display the output
  console.log(output);


//Console Output:
//20