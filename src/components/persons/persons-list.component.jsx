const React = require('react');
const { Link } = require('react-router');

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
        <Link to="manage" params={{ id: person.id }}>
          {`${person.firstName} ${person.lastName}`}
        </Link>
      </div>
    );
  }
}

PersonsList.propTypes = {
  persons: React.PropTypes.array.isRequired,
};

module.exports = PersonsList;
