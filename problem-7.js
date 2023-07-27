// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const converters = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

const romanToNumbers = (roman) => {
    let sum = 0, present = 0, next = 0, sub = 0
    for (let i = 0; i < roman.length; i++) {
        present = parseInt(converters[roman[i]])
        i + 1 < roman.length ? (next = parseInt(converters[roman[i + 1]])) 
            : next = present;
        if (present >= next) {
            sum += converters[roman[i]]
        }
        else {

            sub = next - present
            sum += sub
            i+=1
        }
    }
    return sum

}

const romanNumber = 'XXI'
const result = romanToNumbers(romanNumber)
console.log(result);