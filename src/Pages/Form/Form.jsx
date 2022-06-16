import { useState } from 'react';
import s from './Form.module.css';
import * as formValidation from '../../utils/formValidation';
import { TextArea } from './TextArea/TextArea';
import { Title } from '../../components/Title/Title';
import PropTypes from 'prop-types';
import { VALIDATION_MESSAGES } from '../../utils/formValidation';
import { Input } from './Input/Input';
import { maskPhone } from '../../utils/phoneMask';

export const Form = ({ onSubmit }) => {
  const { NOT_ENTERED, EMPTY } = VALIDATION_MESSAGES;

  const [values, setValues] = useState({
    name: '',
    lastName: '',
    birthDate: '',
    phone: '',
    website: 'https://',
    about: '',
    tech: '',
    project: '',
  });
  const [validStatus, setValidStatus] = useState({
    name: NOT_ENTERED,
    lastName: NOT_ENTERED,
    birthDate: NOT_ENTERED,
    phone: NOT_ENTERED,
    website: NOT_ENTERED,
    about: NOT_ENTERED,
    tech: NOT_ENTERED,
    project: NOT_ENTERED,
  });

  const setFieldValue = (fieldName, value) => {
    setValues(prevState => ({ ...prevState, [fieldName]: value }));
  };

  const setIsValidField = (fieldName, value) => {
    setValidStatus(prevState => ({ ...prevState, [fieldName]: value }));
  };

  const validate = e => {
    const fieldName = e.currentTarget.name;
    const value = e.currentTarget.value.trim();

    switch (fieldName) {
      case 'name':
      case 'lastName':
        setIsValidField(fieldName, formValidation.name(value));
        break;

      case 'phone':
        setIsValidField(fieldName, formValidation.phone(value));
        break;

      case 'birthDate':
        setIsValidField(fieldName, formValidation.date(value));
        break;

      case 'website':
        setIsValidField(fieldName, formValidation.webSite(value));
        break;

      case 'about':
      case 'tech':
      case 'project':
        setIsValidField(fieldName, formValidation.textArea(value));
        break;

      default:
        break;
    }
  };

  const handleChange = e => {
    const fieldName = e.currentTarget.name;
    let value = e.currentTarget.value;

    if (fieldName === 'phone') {
      //remove hyphens from phone number
      value = value.replaceAll('-', '');

      //avoid adding something except numbers to phone value
      const lastSymbol = value[value.length - 1];
      if (
        !formValidation.validPhoneSymbols.includes(lastSymbol) &&
        !!value.length
      )
        return;
    }

    setFieldValue(fieldName, value);

    validate(e);
  };

  const clearForm = () => {
    setValues({
      name: '',
      lastName: '',
      birthDate: '',
      phone: '',
      website: 'https://',
      about: '',
      tech: '',
      project: '',
    });
    setValidStatus({
      name: 'notEntered',
      lastName: 'notEntered',
      birthDate: 'notEntered',
      phone: 'notEntered',
      website: 'notEntered',
      about: 'notEntered',
      tech: 'notEntered',
      project: 'notEntered',
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!formValidation.isValidForm(Object.values(validStatus))) {
      setValidStatus(
        ({
          name,
          lastName,
          birthDate,
          phone,
          website,
          about,
          tech,
          project,
        }) => {
          return {
            name: name === NOT_ENTERED ? EMPTY : name,
            lastName: lastName === NOT_ENTERED ? EMPTY : lastName,
            birthDate: birthDate === NOT_ENTERED ? EMPTY : birthDate,
            phone: phone === NOT_ENTERED ? EMPTY : phone,
            website: website === NOT_ENTERED ? EMPTY : website,
            about: about === NOT_ENTERED ? EMPTY : about,
            tech: tech === NOT_ENTERED ? EMPTY : tech,
            project: project === NOT_ENTERED ? EMPTY : project,
          };
        }
      );
      return;
    }

    onSubmit(values);
  };

  const { name, lastName, phone, website, project, tech, about, birthDate } =
    values;

  return (
    <>
      <Title title={'Создание анкеты'} />

      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.nameWrapper}>
          {/*name input*/}
          <Input
            title={'Имя'}
            fieldName={'name'}
            type={'text'}
            placeholder={'Введите имя'}
            value={name}
            onChange={handleChange}
            validate={validate}
            isValid={validStatus.name}
          />

          {/*last name input*/}
          <Input
            title={'Фамилия'}
            fieldName={'lastName'}
            type={'text'}
            placeholder={'Введите фамилию'}
            value={lastName}
            onChange={handleChange}
            validate={validate}
            isValid={validStatus.lastName}
          />
        </div>

        {/*birthdate input*/}
        <Input
          title={'Дата рождения'}
          fieldName={'birthDate'}
          type={'date'}
          placeholder={'Ввыберите дату рождения'}
          value={birthDate}
          onChange={handleChange}
          validate={validate}
          isValid={validStatus.birthDate}
        />

        {/*phone input*/}
        <Input
          title={'Телефон'}
          fieldName={'phone'}
          type={'tel'}
          placeholder={'Укажите ваш телефон'}
          value={maskPhone(phone)}
          onChange={handleChange}
          validate={validate}
          isValid={validStatus.phone}
        />

        {/*website input*/}
        <Input
          title={'Сайт'}
          fieldName={'website'}
          type={'url'}
          placeholder={'Укажите ваш сайт'}
          value={website}
          onChange={handleChange}
          validate={validate}
          isValid={validStatus.website}
        />

        {/*about yourself input*/}
        <TextArea
          title={'О себе'}
          onBlur={validate}
          isValid={validStatus.about}
          onChange={handleChange}
          name={'about'}
          value={about}
        />

        {/*technologies stack input*/}
        <TextArea
          title={'Стек технологий'}
          onBlur={validate}
          isValid={validStatus.tech}
          onChange={handleChange}
          name={'tech'}
          value={tech}
        />

        {/*last project input*/}
        <TextArea
          title={'Описание последнего проекта'}
          onBlur={validate}
          isValid={validStatus.project}
          onChange={handleChange}
          name={'project'}
          value={project}
        />

        {/*form controls*/}
        <div className={s.formControlWrapper}>
          <button type="button" className={s.formControl} onClick={clearForm}>
            Отмена
          </button>
          <button type="submit" className={s.formControl}>
            Сохранить
          </button>
        </div>
      </form>
    </>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
