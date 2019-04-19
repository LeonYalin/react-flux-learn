const React = require('react');
const { RouteHandler } = require('react-router');
const Header = require('../header/header.component.jsx');

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <RouteHandler />
      </div>
    );
  }
}

module.exports = App;
