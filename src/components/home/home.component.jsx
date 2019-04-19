const React = require('react');
const { Link } = require('react-router');

class Home extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 >Hello from Home Component!</h1>
        <p>By Leon Yalin</p>
        <Link to="about" className="btn btn-primary">Learn more</Link>
      </div>
    );
  }
}

module.exports = Home;
