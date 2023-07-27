// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
const secondSmallest = (arr) => {
    const sorted=arr.sort(function(a, b){return a - b})
    console.log(sorted[1]);
    // let smallest = arr[0], secondSmallest = 0

    // for (i in arr) {
    //     arr[i] < smallest && (smallest = arr[i])
    // }
    // console.log(smallest);

    // for (i in arr) {
    //     if (smallest < arr[i] < arr[i + 1]) {
    //         secondSmallest = arr[i]
    //         i += 2
    //         console.log(i);
    //     }
    //     i++
    //     // console.log(i);
    // }
    // console.log(secondSmallest);
}
const inputArray = [7, 6, 5, 8, 2, 1, 8, 10, 5, 7]
secondSmallest(inputArray)
