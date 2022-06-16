import s from '../Form.module.css';
import PropTypes from 'prop-types';
import { VALIDATION_MESSAGES } from '../../../utils/formValidation';

export const ErrorMessage = ({ error }) => {
  const { NOT_ENTERED, VALID } = VALIDATION_MESSAGES;

  return (
    <>
      {error !== NOT_ENTERED && error !== VALID && (
        <span className={s.error}>{error}</span>
      )}
    </>
  );
};

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
};
