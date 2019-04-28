const personsMockAPI = require('../mocks/persons.mock.api');
const Dispatcher = require('../dispatcher/dispatcher');
const CONSTS = require('../constants/persons.constants');

const personActions = {
  savePerson(person) {
    const newPerson = personsMockAPI.add(person);
    Dispatcher.dispatch({ type: CONSTS.SAVE_PERSON, data: newPerson });
  },
  updatePerson(person) {
    const updatedPerson = personsMockAPI.update(person);
    Dispatcher.dispatch({ type: CONSTS.UPDATE_PERSON, data: updatedPerson });
  },
  deletePerson(person) {
    personsMockAPI.remove(person);
    Dispatcher.dispatch({ type: CONSTS.DELETE_PERSON, data: person });
  },
};

module.exports = personActions;
