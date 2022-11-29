const person = {
    name: 'Marek',
    address: {
        zipCode: '53-601'
    },

    letMeIntroduceMyself: function() {
        // console.log(this);
        return 'My name is ' + this.name;
    }
}

class Person {
    constructor(name) {
        this.name = name;
        // this.letMeIntroduceMyself = this.letMeIntroduceMyself.bind(this);
    }

    // letMeIntroduceMyself = () => {
    //     console.log(`My name is ${this.name}`);
    // };

    letMeIntroduceMyself() {
        console.log(`My name is ${this.name}`);
    }

    printMyNameDelayed() {
        setTimeout(() => this.letMeIntroduceMyself(), 2000);
    }
}

const czarek = new Person('Czarek');
czarek.printMyNameDelayed();
// console.log(execute(czarek.letMeIntroduceMyself));
// console.log(execute(czarek.letMeIntroduceMyself.bind(czarek)));


// console.log(person.letMeIntroduceMyself());
// console.log(execute(person.letMeIntroduceMyself.bind(person)));

function execute(what) {
    // JavaScript ABC
    return what();
    // return what.call(null, 1, 3);
    // return what.apply({name: 'Internal'}, []);
}
