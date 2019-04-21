const React = require('react');
const { RouteHandler } = require('react-router');
const Header = require('../common/header.component.jsx');

const appStyle = { margin: '20px' };

class App extends React.Component {
  render() {
    return (
      <div style={appStyle}>
        <Header />
        <RouteHandler />
      </div>
    );
  }
}

module.exports = App;
