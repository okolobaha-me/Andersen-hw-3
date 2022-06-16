import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Title.module.css';

export class Title extends Component {
  render() {
    return <h1 className={s.title}>{this.props.title}</h1>;
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
