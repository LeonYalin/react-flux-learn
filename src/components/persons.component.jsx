const React = require('react');
const personsMockApi = require('../mocks/persons.mock.api');

class Persons extends React.Component {
  getInitialState() {
    return {
      persons: [],
    };
  }

  componentWillMount() {
    this.setState({ persons: personsMockApi.getAll() });
  }

  render() {
    return (
      <div>
        <h3>Persons</h3>
        {this.state.persons.map(this.createPersonRow)}
      </div>
    );
  }

  createPersonRow(person) {
    return (
      <div>
        <a key={person.id} href={`#persons/${person.id}`}>
          <span>{`${person.firstName} ${person.lastName}`}</span>&nbsp;
        </a>
      </div>
    );
  }
}

module.exports = Persons;
