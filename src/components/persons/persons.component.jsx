const React = require('react');
const PersonsList = require('./persons-list.component.jsx');
const personsMockApi = require('../../mocks/persons.mock.api');

class Persons extends React.Component {
  constructor() {
    super();

    this.state = {
      persons: [],
    };
  }

  /**
   * Not working with ES6 classes. Instead, set the state in constructor
   */
  // getInitialState() {
  //   return {
  //     persons: [],
  //   };
  // }

  componentDidMount() {
    /**
     *  Not working with ES6 classes
     */
    // if (this.isMounted()) { ..setState() }

    this.setState({ persons: personsMockApi.getAll() });
  }

  render() {
    return (
      <div>
        <h3>Persons</h3>
        <PersonsList persons={this.state.persons} />
      </div>
    );
  }
}

module.exports = Persons;
