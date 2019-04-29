const React = require('react');
const { Link } = require('react-router');
const toastr = require('toastr');
const coursesActions = require('../../actions/courses.actions');

const deleteIconStyle = { fontStyle: 'normal', cursor: 'pointer', marginLeft: '5px' };

class CoursesList extends React.Component {
  render() {
    return (
      <div>
        {this.props.courses.map(this.createCourseRow.bind(this))}
      </div>
    );
  }

  onDeleteClick(course, e) {
    e.preventDefault();
    coursesActions.deleteCourse(course);
    toastr.success('Course deleted');
  }

  createCourseRow(course) {
    return (
      <div>
        <div key={course.id} className="person-row">
          <Link to="manageCourse" params={{ id: course.id }}>{`${course.title}`}</Link>
          <span> ({course.category}, {course.length})</span>
          <span>, by </span>
          <span>{course.author}</span>
          <i className="person-row-delete-icon" style={deleteIconStyle} onClick={this.onDeleteClick.bind(this, course)}>x</i>
        </div>
      </div>
    );
  }
}

CoursesList.propTypes = {
  courses: React.PropTypes.array.isRequired,
};

module.exports = CoursesList;
