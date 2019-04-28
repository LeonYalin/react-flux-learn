const personsMockAPI = require('../mocks/persons.mock.api');
const Dispatcher = require('../dispatcher/dispatcher');
const CONSTS = require('../constants/persons-constants');

function dispatch(type, data) {
  Dispatcher.dispatch({ type, data });
}

const personActions = {
  savePerson(person) {
    const newPerson = personsMockAPI.add(person);
    dispatch(CONSTS.SAVE_PERSON, newPerson);
  },
};

module.exports = personActions;
