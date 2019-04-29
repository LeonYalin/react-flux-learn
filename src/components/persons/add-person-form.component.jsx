const React = require('react');
const Input = require('../common/input.component.jsx');

class AddPersonForm extends React.Component {
  render() {
    return (
      <form>
        <Input name="firstName"
          label="First name"
          value={this.props.person.firstName}
          onChange={this.props.onChange}
          error={this.props.errors.firstName} />

        <Input name="lastName"
          label="Last name"
          value={this.props.person.lastName}
          onChange={this.props.onChange}
          error={this.props.errors.lastName} />

        <button type="submit" className="btn btn-primary" onClick={this.props.onSave}>Save</button>
      </form>
    );
  }
}

AddPersonForm.propTypes = {
  person: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func.isRequired,
  errors: React.PropTypes.object,
};

module.exports = AddPersonForm;
