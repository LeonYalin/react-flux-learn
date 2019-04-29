const React = require('react');
const { Link } = require('react-router');

const headerStyle = { margin: '10px 0px' };
const linkStyle = { marginRight: '5px' };

class Header extends React.Component {
  render() {
    return (
      <div style={headerStyle}>
        <Link to="app" style={linkStyle} className="btn btn-default">Home</Link>
        <Link to="persons" style={linkStyle} className="btn btn-default">Persons</Link>
        <Link to="courses" style={linkStyle} className="btn btn-default">Courses</Link>
        <Link to="about" style={linkStyle} className="btn btn-default">About</Link>
      </div>
    );
  }
}
module.exports = Header;
