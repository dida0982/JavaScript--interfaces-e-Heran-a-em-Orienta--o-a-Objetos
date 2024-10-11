const person = {
    firstName: 'maria',
    lastName: 'joaquina',
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
};
console.log(person.fullName);
