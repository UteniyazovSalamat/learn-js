const arr = ['!', 'JS', 'love', 'I'];
const resultArray = [];

for (let i = arr.length - 1; i >= 0; i--) {
    resultArray.push(arr[i]);
}

console.log(resultArray.join(' '));
console.log(arr.reverse().join(' '));
