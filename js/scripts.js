let arr = [];
let largestNumber = 0;
let indexLargestNumber;
const paragraph = document.querySelector('p');

for (let i = 0; i < 250; i++) {
    let randomNumbersSmall = Math.random() * (300 - 10) + 10;
    let randomNumbersLarge = Math.random() * (700 - 500) + 500;
    arr.unshift(randomNumbersSmall);
    arr.push(randomNumbersLarge);
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
        largestNumber = arr[i]
        indexLargestNumber = i;
    }
}

paragraph.textContent = `Uit het array van ${arr.length} getallen is het getal ${largestNumber} het grootst. Dit getal zit in index ${indexLargestNumber} in het array.`;
