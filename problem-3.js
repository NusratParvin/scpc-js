// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3
let occArr = []

const occurrence = (arr) => {
    for (i in arr) {
        let occ = 0
        if (!(occArr.some(obj => arr[i] === obj.element))) {
            for (j in arr) {
                if (arr[i] === arr[j]) {
                    occ += 1
                }
            }
            occArr.push({ element: arr[i], occurrences: occ })

        }
    }
    // console.log(occArr);


    let higherOcc = occArr[0];
    for (index in occArr) {
        if (higherOcc.occurrences < occArr[index].occurrences) {
            higherOcc = occArr[index];
        }
    }
    console.log(higherOcc.element);
}

const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5]
occurrence(inputArray)