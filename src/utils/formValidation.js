export const MAX_INPUT_LENGTH = 600;

export const VALIDATION_MESSAGES = {
  NOT_ENTERED: 'not entered',
  EMPTY: 'Это поле обязательно',
  VALID: 'valid',
};

export const name = name => {
  if (!name.length) return VALIDATION_MESSAGES.EMPTY;

  if (name[0] !== name[0].toUpperCase())
    return 'Имя должно начинаться с большой буквы';
  else return VALIDATION_MESSAGES.VALID;
};

export const phone = phone => {
  if (!phone.length) return VALIDATION_MESSAGES.EMPTY;

  if (phone.length > 12) return 'В телефоне не может быть больше 9 цыфр';
  else return VALIDATION_MESSAGES.VALID;
};

export const date = date => {
  if (!date.length) return VALIDATION_MESSAGES.EMPTY;
  else return VALIDATION_MESSAGES.VALID;
};

export const webSite = site => {
  if (!site.length) return VALIDATION_MESSAGES.EMPTY;

  if (site.slice(0, 8) !== 'https://')
    return 'Сайт должен начинаться с "https://"';

  return VALIDATION_MESSAGES.VALID;
};

export const textArea = text => {
  if (!text.length) return VALIDATION_MESSAGES.EMPTY;

  if (text.length > MAX_INPUT_LENGTH)
    return 'В поле не должно быть больше 600 символов';

  return VALIDATION_MESSAGES.VALID;
};

export const symbolsLeft = text => {
  const maxSymbols = MAX_INPUT_LENGTH;
  const symbolsLeft = maxSymbols - text.length;
  if (text.length > maxSymbols) {
    return '';
  }

  return `Осталось ${symbolsLeft}/${maxSymbols} символов`;
};

export const isValidForm = values => {
  for (const value of values) {
    if (value !== VALIDATION_MESSAGES.VALID) return false;
  }
  return true;
};

export const validPhoneSymbols = '1234567890'.split('');
