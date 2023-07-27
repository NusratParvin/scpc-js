// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

// Example Input: "hello world" Example Output: "dlrow olleh"

let outputString = ''

const reverseString = (str) => {
    let outputString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        outputString += str[i];
    }
    console.log(outputString);
};

const inputString = "hello world"
reverseString(inputString)