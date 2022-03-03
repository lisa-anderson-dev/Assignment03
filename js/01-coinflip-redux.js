let coinFlip, result;
let times = parseInt(prompt('How many times do you want to flip the coin?'));
if (!isNaN(times) && times >= 1) {
    for (let i = 1; i <= times; i++) {
        coinFlip = Math.round(Math.random());
        result = coinFlip === 0 ? 'Heads' : 'Tails';
        console.log(result);
    }
} else {
    console.log('Input must be an integer that is greater than 0');
}