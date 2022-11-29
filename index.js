let myNumbers = [1, 3, 5, 6, 45, 32, 54];

let sum = 0;
for (let i = 0; i < myNumbers.length; i++) {
    let currentNumber = myNumbers[i];
    currentNumber = addTax(currentNumber);
    const onlyGreaterThanTen = onlyGreaterThan(10);
    if (onlyGreaterThan(10)(currentNumber)) {
        sum += myNumbers[i];
    }
}
console.log(sum);

const sumFun = myNumbers
    .map(addTax)
    .filter(onlyGreaterThan(10))
    .reduce(calculateSum, 0);

console.log(sumFun);

function addTax(value) {
    return value + 3;
}

function onlyGreaterThanTen(value) {
    return value > 10;
}

function onlyGreaterThan(valueToCompare) {
    return function (value) {
        return value > valueToCompare;
    }
}

function calculateSum(partialSum, value) {
    return partialSum + value;
}

const person = function (name) {
    const internals = {
        nameInternal : name,
        doSomethingPrivately() {
            this.nameInternal = this.nameInternal.toUpperCase();
        }
    }

    return {
        getName() {
            return internals.nameInternal;
        },

        toUpperCase() {
            internals.doSomethingPrivately();
        }
    }
}('Marek');

console.log(person.getName());
person.toUpperCase()
console.log(person.getName());

