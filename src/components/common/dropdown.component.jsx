const React = require('react');

class Dropdown extends React.Component {
  render() {
    let wrapperClass = 'form-group';
    if (this.props.error && this.props.error.length) {
      wrapperClass += ' has-error';
    }

    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        {/* <div className="field">
          <input id={this.props.name}
            className="form-control"
            placeholder={this.props.label}
            ref={this.props.name}
            value={this.props.value}
            onChange={this.props.onChange} />
            <div className="input">{this.props.error}</div>
        </div> */}
        <select className="form-control"
          id={this.props.name}
          ref={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}>
          {this.props.options.map(this.createOptionsRow.bind(this))}
        </select>
        <div className="input">{this.props.error}</div>
      </div>
    );
  }

  createOptionsRow(option) {
    const value = this.props.optionValueFormatter(option);
    const isSelected = value === this.props.value;

    const opts = {};
    opts.key = option.id;
    opts.value = value;
    if (isSelected) {
      opts.selected = 'selected';
    }
    return (
      <option {...opts}>{`${option.firstName} ${option.lastName}`}</option>
    );
  }
}

Dropdown.propTypes = {
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  error: React.PropTypes.string,
};

module.exports = Dropdown;
