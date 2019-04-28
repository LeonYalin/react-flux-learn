const React = require('react');
const { Link } = require('react-router');
const PersonsList = require('./persons-list.component.jsx');
const personsStore = require('../../stores/person-store');
const personActions = require('../../actions/persons.actions');

class Persons extends React.Component {
  constructor() {
    super();

    this.state = {
      persons: personsStore.getAllPersons(),
    };
  }

  render() {
    return (
      <div>
        <h3>Persons</h3>
        <Link to="add" className="btn btn-default">Add person</Link>
        <PersonsList persons={this.state.persons} />
      </div>
    );
  }
}

module.exports = Persons;
