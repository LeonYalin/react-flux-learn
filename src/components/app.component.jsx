const React = require('react');
const Home = require('./home.component.jsx');
const Persons = require('./persons.component.jsx');

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <Persons />
      </div>
    );
  }
}

module.exports = App;
