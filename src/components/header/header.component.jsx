const React = require('react');

class Header extends React.Component {
  render() {
    return (
      <div>
        <a href="#/persons">Persons</a>
        <a href="#/about">About</a>
      </div>
    );
  }
}
module.exports = Header;
