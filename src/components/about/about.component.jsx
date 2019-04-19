const React = require('react');

class About extends React.Component {
  render() {
    return (
      <div>Hello from <b>About</b> page!</div>
    );
  }
}

About.willTransitionTo = ((transition, params, query, next) => {
  if (!window.confirm('Are you sure want to read this?')) {
    transition.abort();
  } else {
    next();
  }
});

About.willTransitionFrom = ((transition, component) => {
  if (!window.confirm('Are you sure want to exit?')) {
    transition.abort();
  }
});

module.exports = About;
