import PropTypes from 'prop-types';
import s from './Title.module.css';

export const Title = ({ title }) => {
  return <h1 className={s.title}>{title}</h1>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
