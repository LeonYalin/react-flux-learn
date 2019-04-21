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
    };
  }

  onChange(e) {
    const key = e.target.id;
    const { value } = e.target;
    const { person } = _.cloneDeep(this.state);
    person[key] = value;
    this.setState({ person });
  }

  onSave(e) {
    e.preventDefault();
    personsMockApi.add(this.state.person);
    toastr.success('Person saved');
    this.context.router.transitionTo('persons');
  }

  render() {
    return (
      <div>
        <h1>Add person Page</h1>
        <AddPersonForm
          person={this.state.person}
          onChange={this.onChange.bind(this)}
          onSave={this.onSave.bind(this)} />
      </div>
    );
  }
}

// AddPerson.mixins = [
//   Router.Navigation,
// ];

AddPerson.contextTypes = {
  router: React.PropTypes.func.isRequired,
};

module.exports = AddPerson;
