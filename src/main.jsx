$ = jQuery = require('jquery');
const React = require('react');
const Router = require('react-router');
const routes = require('./routes');

// Router.run(routes, Router.HistoryLocation, (Handler) => {
Router.run(routes, (Handler) => {
  React.render(<Handler/>, document.getElementById('app'));
});
