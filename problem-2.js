// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

// Example Input: [2, -5, 10, -3, 7] Example Output: 19


let sum = 0;

const sumOfPositives = (arr) => {

    for (index in inputArray) {
        inputArray[index] > 0 ? (sum += inputArray[index]) : ''
    }
    console.log(sum);
}


const inputArray = [2, -5, 10, -3, 7]

sumOfPositives(inputArray)