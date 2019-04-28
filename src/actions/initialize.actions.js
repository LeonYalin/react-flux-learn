const Dispatcher = require('../dispatcher/dispatcher');
const CONSTS = require('../constants/persons.constants');
const personsMockAPI = require('../mocks/persons.mock.api');

const initializeActions = {
  initApp() {
    Dispatcher.dispatch({ type: CONSTS.INITIALIZE, data: personsMockAPI.getAll() });
  },
}

module.exports = initializeActions;
