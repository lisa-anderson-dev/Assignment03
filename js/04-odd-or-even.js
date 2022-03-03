let oddEven;
for (let i = 0; i <= 15; i++) {
    oddEven = i % 2 === 0 ? 'even' : 'odd';
    console.log(`${i} is ${oddEven}`);
}