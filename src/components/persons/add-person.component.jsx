const _ = require('lodash');
const React = require('react');
const Router = require('react-router');
const toastr = require('toastr');
const AddPersonForm = require('./add-person-form.component.jsx');
const personsMockApi = require('../../mocks/persons.mock.api');

class AddPerson extends React.Component {
  constructor() {
    super();

    this.state = {
      person: {
        id: '',
        firstName: '',
        lastName: '',
      },
      errors: {},
      dirty: false,
    };
  }

  componentWillMount() {
    const personId = parseInt(this.props.params.id);
    if (personId) {
      this.setState({ person: personsMockApi.getById(personId) });
    }
  }

  onChange(e) {
    this.setState({ dirty: true });
    const key = e.target.id;
    const { value } = e.target;
    const { person } = _.cloneDeep(this.state);
    person[key] = value;
    this.setState({ person });
  }

  formIsValid() {
    let isValid = true;
    const { errors } = _.cloneDeep(this.state);

    if (this.state.person.firstName.length < 3) {
      errors.firstName = 'First name must be at least 3 characters.';
      isValid = false;
    } else {
      delete errors.firstName;
    }

    if (this.state.person.lastName.length < 3) {
      errors.lastName = 'Last name must be at least 3 characters.';
      isValid = false;
    } else {
      delete errors.lastName;
    }

    this.setState({ errors });
    return isValid;
  }

  onSave(e) {
    e.preventDefault();
    if (!this.formIsValid()) return;

    personsMockApi.add(this.state.person);
    toastr.success('Person saved');
    this.setState({ dirty: false });
    this.context.router.transitionTo('persons');
  }

  render() {
    return (
      <div>
        <h1>Add person Page</h1>
        <AddPersonForm
          person={this.state.person}
          onChange={this.onChange.bind(this)}
          onSave={this.onSave.bind(this)}
          errors={this.state.errors}/>
      </div>
    );
  }
}

AddPerson.contextTypes = {
  router: React.PropTypes.func.isRequired,
};

AddPerson.willTransitionFrom = ((transition, component) => {
  if (component.state.dirty && !window.confirm('Leave without saving?')) {
    transition.abort();
  }
});

module.exports = AddPerson;
