// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const passGenerator = (length) => {
    const numbers = '0123456789'
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerCase = upperCase.toLowerCase()
    const specials = '~!@#$%^&*_'

    const chars = numbers + upperCase + lowerCase + specials;
    let pass = ''

    for (let i = 0; i <= length; i++) {
        pass += chars[(Math.floor(Math.random() * chars.length))]

    }
    return pass;

}

const length = 12
const password = passGenerator(length)
console.log(password);