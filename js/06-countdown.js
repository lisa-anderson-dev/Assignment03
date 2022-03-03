let count = parseInt(prompt('Enter a number to start your countdown from'));
if (!isNaN(count) && count >= 0) {
    for (let i = count; i >= 0; i--) {
        console.log(i);
    }
} else {
    console.log('Input must be an integer that is greater or equal to 0');
}