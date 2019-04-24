const React = require('react');

class Input extends React.Component {
  render() {
    let wrapperClass = 'form-group';
    if (this.props.error && this.props.error.length) {
      wrapperClass += ' has-error';
    }

    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <div className="field">
          <input id={this.props.name}
            className="form-control"
            placeholder={this.props.label}
            ref={this.props.name}
            value={this.props.value}
            onChange={this.props.onChange} />
            <div className="input">{this.props.error}</div>
        </div>
      </div>
    );
  }
}

Input.propTypes = {
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  error: React.PropTypes.string,
};

module.exports = Input;
