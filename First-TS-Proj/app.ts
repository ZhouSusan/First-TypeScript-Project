console.log('Hello world');

setInterval(() => {
    console.log();
}, 1000)

function add(a, b) {
    return a + b;
}

let sum = add(3, 4);
console.log(`The sum of the two numbers is ${sum}.`);