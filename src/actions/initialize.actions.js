const Dispatcher = require('../dispatcher/dispatcher');
const CONSTS = require('../constants/persons.constants');
const personsMockAPI = require('../mocks/persons.mock.api');
const coursesMockAPI = require('../mocks/courses.mock.api');

const initializeActions = {
  initApp() {
    Dispatcher.dispatch({
      type: CONSTS.INITIALIZE,
      data: {
        persons: personsMockAPI.getAll(),
        courses: coursesMockAPI.getAll(),
      },
    });
  },
};

module.exports = initializeActions;
