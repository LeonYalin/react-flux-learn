const React = require('react');
const Input = require('../common/input.component.jsx');
const Dropdown = require('../common/dropdown.component.jsx');

class AddCourseForm extends React.Component {
  render() {
    return (
      <form>
        <Input name="title"
          label="Title"
          value={this.props.course.title}
          onChange={this.props.onChange}
          error={this.props.errors.title} />

        <Dropdown name="author"
          label="Author"
          value={this.props.course.author}
          options={this.props.persons}
          optionValueProp="id"
          onChange={this.props.onChange}
          error={this.props.errors.author} />

        <Input name="category"
          label="Category"
          value={this.props.course.category}
          onChange={this.props.onChange}
          error={this.props.errors.category} />

        <Input name="length"
          label="Length"
          value={this.props.course.length}
          onChange={this.props.onChange}
          error={this.props.errors.length} />

        <button type="submit" className="btn btn-primary" onClick={this.props.onSave}>Save</button>
      </form>
    );
  }
}

AddCourseForm.propTypes = {
  person: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func.isRequired,
  errors: React.PropTypes.object,
};

module.exports = AddCourseForm;
