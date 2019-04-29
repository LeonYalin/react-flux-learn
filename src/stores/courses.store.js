const { EventEmitter } = require('events');
const Dispatcher = require('../dispatcher/dispatcher');
const CONSTS = require('../constants/courses.constants');

const CHANGE = 'change';
let _courses = [];

const coursesStore = Object.assign({}, EventEmitter.prototype, {
  addchangeListener(callback) {
    this.on(CHANGE, callback);
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE, callback);
  },
  emitChange() {
    this.emit(CHANGE);
  },
  getAllCourses() {
    return _courses;
  },
  getCourseById(id) {
    return _courses.find(i => i.id === id);
  },
});

Dispatcher.register((action) => {
  switch (action.type) {
    case CONSTS.INITIALIZE: {
      _courses = action.data.courses;
      coursesStore.emitChange();
      break;
    }
    case CONSTS.SAVE_COURSE: {
      // _persons.push(action.data);
      coursesStore.emitChange();
      break;
    }
    case CONSTS.UPDATE_COURSE: {
      // const personToUpdate = action.data;
      // const personIndex = _persons.findIndex(p => p.id === personToUpdate.id);
      // _persons.splice(personIndex, 1, personToUpdate);
      coursesStore.emitChange();
      break;
    }
    case CONSTS.DELETE_COURSE: {
      // const personToDelete = action.data;
      // const personIndex = _persons.findIndex(p => p.id === personToDelete.id);
      // _persons.splice(personIndex, 1);
      coursesStore.emitChange();
      break;
    }
    default: break;
  }
});

module.exports = coursesStore;
