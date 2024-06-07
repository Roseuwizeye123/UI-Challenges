function stringTransform(input) {
    const length = input.length;
        // If the length is divisible by 15
    if (length % 15 === 0) {
        const reversed = input.split('').reverse().join('');
        return reversed.split('').map(char => char.charCodeAt(0)).join(' ');
    } 
    // If the length is divisible by 5
    else if (length % 5 === 0) {
        return input.split('').map(char => char.charCodeAt(0)).join(' ');
    } 
     // If the length is divisible by 3
    else if (length % 3 === 0) { 
       return input.split('').reverse().join('');
    } else {
       
        return input;
    }
}


console.log(stringTransform("Hamburger")); 
console.log(stringTransform("Pizza")); 
console.log(stringTransform("Chocolate Chip Cookie")); 

