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
    return this.persons.find(p => p.id === id);
  }

  add(person) {
    const newPerson = { ...person };
    newPerson.id = new Date().getTime();
    this.persons.push(newPerson);
    return newPerson;
  }

  update(person) {
    const personToUpdate = this.persons.find(p => p.id === person.id);
    if (!personToUpdate) {
      return null;
    }

    Object.assign(personToUpdate, person);
    return personToUpdate;
  }

  contains(person) {
    const index = this.persons.findIndex(p => p.id === person.id);
    if (index > -1) {
      return index;
    }
    return null;
  }

  remove(person) {
    const index = this.contains(person);
    if (index > -1) {
      this.persons.splice(index, 1);
    }
  }
}

module.exports = new PersonsApi();
