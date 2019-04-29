const _ = require('lodash');
const React = require('react');
const toastr = require('toastr');
const AddCourseForm = require('./add-course-form.component.jsx');
const coursesStore = require('../../stores/courses.store');
const courseActions = require('../../actions/courses.actions');
const personsStore = require('../../stores/persons.store');

class AddCourse extends React.Component {
  constructor() {
    super();

    this.state = {
      course: {
        id: '',
        title: '',
        author: '',
        length: '',
        category: '',
      },
      persons: personsStore.getAllPersons(),
      errors: {},
      dirty: false,
    };
  }

  componentWillMount() {
    const courseId = parseInt(this.props.params.id, 10);
    if (courseId) {
      this.setState({ course: coursesStore.getCourseById(courseId) });
    }
  }

  onChange(e) {
    this.setState({ dirty: true });
    const key = e.target.id;
    const { value } = e.target;
    const { course } = _.cloneDeep(this.state);
    course[key] = value;
    this.setState({ course });
  }

  formIsValid() {
    let isValid = true;
    const { errors } = _.cloneDeep(this.state);

    if (this.state.course.title.length < 3) {
      errors.title = 'Title must be at least 3 characters.';
      isValid = false;
    } else {
      delete errors.title;
    }

    if (this.state.course.author.length < 3) {
      errors.author = 'Author must be at least 3 characters.';
      isValid = false;
    } else {
      delete errors.author;
    }

    this.setState({ errors });
    return isValid;
  }

  onSave(e) {
    e.preventDefault();
    if (!this.formIsValid()) return;

    if (!this.state.course.id) {
      courseActions.saveCourse(this.state.course);
    } else {
      courseActions.updateCourse(this.state.course);
    }
    toastr.success('Course saved');
    this.setState({ dirty: false });
    this.context.router.transitionTo('courses');
  }

  render() {
    return (
      <div>
        <h1>Add courses Page</h1>
        <AddCourseForm
          course={this.state.course}
          persons={this.state.persons}
          onChange={this.onChange.bind(this)}
          onSave={this.onSave.bind(this)}
          errors={this.state.errors} />
      </div>
    );
  }
}

AddCourse.contextTypes = {
  router: React.PropTypes.func.isRequired,
};

AddCourse.willTransitionFrom = ((transition, component) => {
  if (component.state.dirty && !window.confirm('Leave without saving?')) {
    transition.abort();
  }
});

module.exports = AddCourse;
