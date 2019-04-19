const React = require('react');
const { Link } = require('react-router');

class Header extends React.Component {
  render() {
    return (
      <div>
        <Link to="app">Home</Link>
        <Link to="persons">Persons</Link>
        <Link to="about">About</Link>
      </div>
    );
  }
}
module.exports = Header;
