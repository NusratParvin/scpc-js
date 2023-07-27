// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

//  Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

const findSum = (arr, value) => {

    for (i in arr) {
        for (let j = 1; j < arr.length; j++) {
            let sum = arr[i] + arr[j]
            if(sum==value){
                indices=[parseInt(j),parseInt(i)]
            }
        }
    }console.log(indices);
}

const inputArray = [1, 3, 6, 8, 11, 15];
const targetSum = 9;
findSum(inputArray, targetSum)