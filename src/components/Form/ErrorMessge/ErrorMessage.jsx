import { Component } from 'react';
import s from '../Form.module.css';
import PropTypes from 'prop-types';
import { VALIDATION_MESSAGES } from '../../../utils/formValidation';

const { NOT_ENTERED, VALID } = VALIDATION_MESSAGES;

export class ErrorMessage extends Component {
  render() {
    const { error } = this.props;
    return (
      <>
        {error !== NOT_ENTERED && error !== VALID && (
          <span className={s.error}>{error}</span>
        )}
      </>
    );
  }
}

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
};
