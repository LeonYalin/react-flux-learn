const React = require('react');
const { DefaultRoute, Route, NotFoundRoute, Redirect } = require('react-router');
const App = require('./components/app/app.component.jsx');
const Home = require('./components/home/home.component.jsx');
const Persons = require('./components/persons/persons.component.jsx');
const AddPerson = require('./components/persons/add-person.component.jsx');
const About = require('./components/about/about.component.jsx');
const NotFound404 = require('./components/404/notFound404.component.jsx');

const routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Home} />
    <Route name="persons" handler={Persons} />
    <Route name="add" path="persons/add" handler={AddPerson} />
    <Route name="about" handler={About} />
    <NotFoundRoute handler={NotFound404} />
    <Redirect from="about-us" to="about" />
    <Redirect from="about/*" to="about" />
  </Route>
);

module.exports = routes;
