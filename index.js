let marek = {
    name: 'Marek',
    age: 0,
    dateOfBirth: new Date('1979-01-25'),
    worksForCapgemini: true,
    address: {
        city: 'Wroclaw',
        zipCode: '53-601'
    }
};

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const czarek = new Person('Czarek', 33);
// marek.address = undefined;
// marek = undefined;
// const zipCode = marek.address.zipCode;
// falsy values in JS: null, undefined, 0, '', NaN, false
// const zipCode = (marek && marek.address && marek.address.zipCode) || 'NO ZIP CODE';
// delete marek.age;
const age = marek?.age ?? 'NO AGE';
console.log(age);

if (marek.name != null) {

}


// delete marek.name;
// console.log(marek['name']);
// console.log(czarek);

