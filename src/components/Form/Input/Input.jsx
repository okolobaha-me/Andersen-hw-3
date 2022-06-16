import { Component } from 'react';
import s from '../Form.module.css';
import PropTypes from 'prop-types';
import { ErrorMessage } from '../ErrorMessge/ErrorMessage';

export class Input extends Component {
  render() {
    const {
      title,
      type,
      isValid,
      value,
      validate,
      onChange,
      fieldName,
      placeholder,
    } = this.props;

    return (
      <label className={s.filed}>
        <span className={s.filedName}>{title}</span>
        <input
          className={s.input}
          name={fieldName}
          type={type}
          id={fieldName}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          onBlur={validate}
        />
        <ErrorMessage error={isValid} />
      </label>
    );
  }
}

Input.propTypes = {
  title: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
  isValid: PropTypes.string.isRequired,
};
