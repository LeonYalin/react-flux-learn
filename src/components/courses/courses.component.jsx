const React = require('react');
const { Link } = require('react-router');
const CoursesList = require('./courses-list.component.jsx');
const coursesStore = require('../../stores/courses.store');

class Courses extends React.Component {
  constructor() {
    super();

    this.state = {
      courses: coursesStore.getAllCourses(),
    };
  }

  componentWillMount() {
    coursesStore.addchangeListener(this.onChange.bind(this));
  }

  componentWillUnmount() {
    coursesStore.removeChangeListener(this.onChange.bind(this));
  }

  onChange() {
    this.setState({ courses: coursesStore.getAllCourses() });
  }

  render() {
    return (
      <div>
        <h3>Courses</h3>
        <Link to="addCourse" className="btn btn-default">Add course</Link>
        <CoursesList courses={this.state.courses} />
      </div>
    );
  }
}

module.exports = Courses;
