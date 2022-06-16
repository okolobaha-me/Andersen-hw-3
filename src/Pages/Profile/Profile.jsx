import PropTypes from 'prop-types';
import { Title } from '../../components/Title/Title';
import { maskPhone } from '../../utils/phoneMask';
import { ProfileField } from './ProfileField/ProfileField';
import { Link } from 'react-router-dom';
import s from './Profile.module.css';

export const Profile = ({ data, isProfileFilled }) => {
  const { name, lastName, birthDate, phone, website, about, tech, project } =
    data;

  return (
    <>
      {isProfileFilled ? (
        <>
          <Title title={`${name} ${lastName}`} />
          <ProfileField fieldName={'Дата рождения'} value={birthDate} />
          <ProfileField fieldName={'Телефон'} value={maskPhone(phone)} />
          <ProfileField fieldName={'Сайт'} value={website} />
          <ProfileField fieldName={'О себе'} value={about} />
          <ProfileField fieldName={'Стэк технологий'} value={tech} />
          <ProfileField fieldName={'О последнем проекте'} value={project} />
        </>
      ) : (
        <p>
          Вы еще не заполнили профиль, для заполнения перейдите на{' '}
          <Link to={'/'} className={s.link}>
            страницу формы
          </Link>
        </p>
      )}
    </>
  );
};

Profile.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
  isProfileFilled: PropTypes.bool.isRequired,
};
