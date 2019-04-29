const React = require('react');
const { DefaultRoute, Route, NotFoundRoute, Redirect } = require('react-router');
const App = require('./components/app/app.component.jsx');
const Home = require('./components/home/home.component.jsx');
const Persons = require('./components/persons/persons.component.jsx');
const AddPerson = require('./components/persons/add-person.component.jsx');
const About = require('./components/about/about.component.jsx');
const NotFound404 = require('./components/404/notFound404.component.jsx');
const Courses = require('./components/courses/courses.component.jsx');
const AddCourse = require('./components/courses/add-course.component.jsx');

const routes = (
  <Route name="app" path="/" handler={App}>
    {/* COMMON */}
    <DefaultRoute handler={Home} />
    <NotFoundRoute handler={NotFound404} />

    {/* PERSONS */}
    <Route name="persons" handler={Persons} />
    <Route name="addPerson" path="persons/add" handler={AddPerson} />
    <Route name="managePerson" path="persons/add/:id" handler={AddPerson} />

    {/* COURSES */}
    <Route name="courses" handler={Courses} />
    <Route name="addCourse" path="courses/add" handler={AddCourse} />
    <Route name="manageCourse" path="courses/add/:id" handler={AddCourse} />

    {/*  ABOUT */}
    <Route name="about" handler={About} />
    <Redirect from="about-us" to="about" />
    <Redirect from="about/*" to="about" />
  </Route>
);

module.exports = routes;
