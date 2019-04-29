const coursesMockAPI = require('../mocks/courses.mock.api');
const Dispatcher = require('../dispatcher/dispatcher');
const CONSTS = require('../constants/courses.constants');

const courseActions = {
  saveCourse(course) {
    const newCourse = coursesMockAPI.add(course);
    Dispatcher.dispatch({ type: CONSTS.SAVE_COURSE, data: newCourse });
  },
  updateCourse(course) {
    const updatedCourse = coursesMockAPI.update(course);
    Dispatcher.dispatch({ type: CONSTS.UPDATE_COURSE, data: updatedCourse });
  },
  deleteCourse(course) {
    coursesMockAPI.remove(course);
    Dispatcher.dispatch({ type: CONSTS.DELETE_COURSE, data: course });
  },
};

module.exports = courseActions;
