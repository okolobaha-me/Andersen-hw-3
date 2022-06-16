import s from '../Form.module.css';
import * as fieldValidation from '../../../utils/formValidation';
import PropTypes from 'prop-types';
import { ErrorMessage } from '../ErrorMessge/ErrorMessage';
import { Component } from 'react';

export class TextArea extends Component {
  render() {
    const { name, onChange, value, isValid, onBlur, title } = this.props;

    return (
      <label className={s.filed}>
        <span className={s.filedName}>{title}</span>
        <textarea
          className={s.input}
          rows={7}
          name={name}
          id={name}
          placeholder={'Опишите ваш последний проект'}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
        />
        <ErrorMessage error={isValid} />
        <span className={s.symbolsLeft}>
          {fieldValidation.symbolsLeft(value)}
        </span>
      </label>
    );
  }
}

TextArea.propTypes = {
  isValid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
