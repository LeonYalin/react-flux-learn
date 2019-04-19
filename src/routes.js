const React = require('react');
const { DefaultRoute, Route } = require('react-router');
const App = require('./components/app/app.component.jsx');
const Home = require('./components/home/home.component.jsx');
const Persons = require('./components/persons/persons.component.jsx');
const About = require('./components/about/about.component.jsx');

const routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Home} />
    <Route name="persons" handler={Persons} />
    <Route name="about" handler={About} />
  </Route>
);

module.exports = routes;
