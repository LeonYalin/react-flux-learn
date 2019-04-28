const { EventEmitter } = require('events');
const Dispatcher = require('../dispatcher/dispatcher');
const CONSTS = require('../constants/persons-constants');

const CHANGE = 'change';
const _persons = [];

const personsStore = Object.assign({}, EventEmitter.prototype, {
  addchangeListener(callback) {
    this.on(CHANGE, callback);
  },
  removeChangeListener(callback) {
    this.removeChangeListener(CHANGE, callback);
  },
  emitChange() {
    this.emit(CHANGE);
  },
  getAllPersons() {
    return _persons;
  },
  getPersonById(id) {
    return _persons.find(i => i.id === id);
  },
});

Dispatcher.register((action) => {
  switch (action.type) {
    case CONSTS.SAVE_PERSON:
      _persons.push(action.data);
      break;
    default: break;
  }
});

module.exports = personsStore;
