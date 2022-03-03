let coinFlip, result;
do {
    coinFlip = Math.round(Math.random());
    result = coinFlip === 0 ? 'Heads' : 'Tails';
    console.log(result);
} while (result === 'Heads');

