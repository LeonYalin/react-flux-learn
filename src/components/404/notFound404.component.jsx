const React = require('react');
const { Link } = require('react-router');

class NotFound404 extends React.Component {
  render() {
    return (
      <div>
        <h1>Page not found</h1>
        <p>Whoops! the page you requested does not exists. Check your URL</p>
        <p><Link to="app">Back to Home</Link></p>
      </div>
    );
  }
}

module.exports = NotFound404;
