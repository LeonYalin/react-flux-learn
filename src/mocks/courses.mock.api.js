const courses = require('./courses.mock');

class CoursesApi {
  constructor() {
    this.courses = courses;
  }

  getAll() {
    return this.courses;
  }

  size() {
    return this.courses.length;
  }

  getById(id) {
    return this.courses.find(p => p.id === id);
  }

  add(course) {
    const newCourse = { ...course };
    newCourse.id = new Date().getTime();
    this.courses.push(newCourse);
    return newCourse;
  }

  update(course) {
    const courseToUpdate = this.courses.find(p => p.id === course.id);
    if (!courseToUpdate) {
      return null;
    }

    Object.assign(courseToUpdate, course);
    return courseToUpdate;
  }

  contains(course) {
    const index = this.courses.findIndex(p => p.id === course.id);
    if (index > -1) {
      return index;
    }
    return null;
  }

  remove(course) {
    const index = this.contains(course);
    if (index > -1) {
      this.courses.splice(index, 1);
    }
  }
}

module.exports = new CoursesApi();
