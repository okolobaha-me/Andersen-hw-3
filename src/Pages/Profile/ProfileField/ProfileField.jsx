import PropTypes from 'prop-types';
import s from '../Profile.module.css';

export const ProfileField = ({ fieldName, value }) => {
  return (
    <p className={s.text}>
      <span className={s.fieldName}>{fieldName}: </span> {value}
    </p>
  );
};

ProfileField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
