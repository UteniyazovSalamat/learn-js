for (let i = 0; i <= 5; i++) {
    console.log(i);
}

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

for (let i = 0; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
