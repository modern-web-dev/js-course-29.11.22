class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class UserComponent {
    constructor(documentApi) {
        this.userFormElement = documentApi.querySelector('form');
        this.userFormElement.addEventListener('submit', event => {
            event.preventDefault();
            this.saveUser();
        });
    }

    setUser({firstName, lastName}) {
        const firstNameInput = this.userFormElement.querySelector('#firstName');
        firstNameInput.value = firstName;
        const lastNameInput = this.userFormElement.querySelector('#lastName');
        lastNameInput.value = lastName;
    }

    saveUser() {
        const firstNameInput = this.userFormElement.querySelector('#firstName');
        const lastNameInput = this.userFormElement.querySelector('#lastName');
        const savedUser = new User(firstNameInput.value, lastNameInput.value);
        console.log(savedUser);
    }
}

const component = new UserComponent(document);
component.setUser(new User('Marek', 'Matczak'));
// component.ini
