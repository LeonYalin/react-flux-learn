const { persons } = require('./persons.mock');

class PersonsApi {
  constructor() {
    this.persons = persons;
  }

  getAll() {
    return this.persons;
  }

  size() {
    return this.persons.length;
  }

  getById(id) {
    return this.persons.find(i => i.id === id);
  }

  add(person) {
    this.persons.push(person);
  }

  contains(person) {
    const index = this.persons.findIndex(i => i.id === person.id);
    if (index > -1) {
      return index;
    }
    return null;
  }

  remove(person) {
    const index = this.contains(person);
    if (index) {
      this.persons.splice(index, 1);
    }
  }
}

module.exports = new PersonsApi();
