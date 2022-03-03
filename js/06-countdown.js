let count = parseInt(prompt('Enter a number to start your countdown to 0'));
if (!isNaN(count) && count >= 0) {
    for (let i = count; i >= 0; i--) {
        console.log(i);
    }
}