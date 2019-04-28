const { EventEmitter } = require('events');
const Dispatcher = require('../dispatcher/dispatcher');
const CONSTS = require('../constants/persons.constants');

const CHANGE = 'change';
let _persons = [];

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
    case CONSTS.INITIALIZE: {
      _persons = action.data;
      personsStore.emitChange();
      break;
    }
    case CONSTS.SAVE_PERSON: {
      _persons.push(action.data);
      personsStore.emitChange();
      break;
    }
    case CONSTS.UPDATE_PERSON: {
      const personToUpdate = action.data;
      const personIndex = _persons.findIndex(p => p.id === personToUpdate.id);
      _persons.splice(personIndex, 1, personToUpdate);
      personsStore.emitChange();
      break;
    }
    case CONSTS.DELETE_PERSON: {
      const personToDelete = action.data;
      const personIndex = _persons.findIndex(p => p.id === personToDelete.id);
      _persons.splice(personIndex, 1);
      personsStore.emitChange();
      break;
    }
    default: break;
  }
});

module.exports = personsStore;
