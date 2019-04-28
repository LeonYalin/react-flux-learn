$ = jQuery = require('jquery');
const React = require('react');
const Router = require('react-router');
const routes = require('./routes');
const initializeActions = require('./actions/initialize.actions');

initializeActions.initApp();

// Router.run(routes, Router.HistoryLocation, (Handler) => {
Router.run(routes, (Handler) => {
  React.render(<Handler/>, document.getElementById('app'));
});
