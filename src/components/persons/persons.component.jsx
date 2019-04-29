const React = require('react');
const { Link } = require('react-router');
const PersonsList = require('./persons-list.component.jsx');
const personsStore = require('../../stores/persons.store');

class Persons extends React.Component {
  constructor() {
    super();

    this.state = {
      persons: personsStore.getAllPersons(),
    };
  }

  componentWillMount() {
    personsStore.addchangeListener(this.onChange.bind(this));
  }

  componentWillUnmount() {
    personsStore.removeChangeListener(this.onChange.bind(this));
  }

  onChange() {
    this.setState({ persons: personsStore.getAllPersons() });
  }

  render() {
    return (
      <div>
        <h3>Persons</h3>
        <Link to="addPerson" className="btn btn-default">Add person</Link>
        <PersonsList persons={this.state.persons} />
      </div>
    );
  }
}

module.exports = Persons;
