import PropTypes from 'prop-types';
import { Title } from '../Title/Title';
import { maskPhone } from '../../utils/phoneMask';
import { Component } from 'react';
import { ProfileField } from './ProfileField/ProfileField';

export class Profile extends Component {
  render() {
    const { name, lastName, birthDate, phone, website, about, tech, project } =
      this.props.data;

    return (
      <>
        <Title title={`${name} ${lastName}`} />
        <ProfileField fieldName={'Дата рождения'} value={birthDate} />
        <ProfileField fieldName={'Телефон'} value={maskPhone(phone)} />
        <ProfileField fieldName={'Сайт'} value={website} />
        <ProfileField fieldName={'О себе'} value={about} />
        <ProfileField fieldName={'Стэк технологий'} value={tech} />
        <ProfileField fieldName={'О последнем проекте'} value={project} />
      </>
    );
  }
}

Profile.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};
