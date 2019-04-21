const React = require('react');
const { Link } = require('react-router');

const homeStyle = { padding: '20px' };

class Home extends React.Component {
  render() {
    return (
      <div style={homeStyle} className="jumbotron">
        <h1 >Hello from Home Component!</h1>
        <p>By Leon Yalin</p>
        <Link to="about" className="btn btn-primary">Learn more</Link>
      </div>
    );
  }
}

module.exports = Home;
