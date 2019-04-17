const React = require('react');

class PersonsList extends React.Component {
  render() {
    return (
      <div>
        {this.props.persons.map(this.createPersonRow)}
      </div>
    );
  }

  createPersonRow(person) {
    return (
      <div key={person.id}>
        <a href={`#persons/${person.id}`}>
          <span>{`${person.firstName} ${person.lastName}`}</span>&nbsp;
        </a>
      </div>
    );
  }
}

PersonsList.propTypes = {
  persons: React.PropTypes.array.isRequired,
};

module.exports = PersonsList;
