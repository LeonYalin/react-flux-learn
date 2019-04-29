const React = require('react');
const { Link } = require('react-router');
const toastr = require('toastr');
const personsActions = require('../../actions/persons.actions');

const deleteIconStyle = { fontStyle: 'normal', cursor: 'pointer', marginLeft: '5px' };

class PersonsList extends React.Component {
  render() {
    return (
      <div>
        {this.props.persons.map(this.createPersonRow.bind(this))}
      </div>
    );
  }

  onDeleteClick(person, e) {
    e.preventDefault();
    personsActions.deletePerson(person);
    toastr.success('Person deleted');
  }

  createPersonRow(person) {
    return (
      <div>
        <div key={person.id} className="person-row">
          <Link to="managePerson" params={{ id: person.id }}>
            {`${person.firstName} ${person.lastName}`}
          </Link>
          <i className="person-row-delete-icon" style={deleteIconStyle} onClick={this.onDeleteClick.bind(this, person)}>x</i>
        </div>
      </div>
    );
  }
}

PersonsList.propTypes = {
  persons: React.PropTypes.array.isRequired,
};

module.exports = PersonsList;
