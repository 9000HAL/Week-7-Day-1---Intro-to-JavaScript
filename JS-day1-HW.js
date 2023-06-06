//==================Exercise #1 ==========//


/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/


//define function that checks for matches
function findWords(dog_string, dog_names) {

    //loop thru list of dog names
    for (let i = 0; i < dog_names.length; i++) {

        //check if current name in the string
        if (dog_string.includes(dog_names[i])) {
            console.log(`Matched ${dog_names[1]}`);
        } else {
            console.log("No Match");
        }
    }
}


//"Call method here with parameters"
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]
//"Your code goes here"
findWords(dog_string, dog_names);



















//============Exercise #2 ============//


/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    //code goes here
}

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]



