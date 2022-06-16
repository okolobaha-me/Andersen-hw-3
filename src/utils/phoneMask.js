export const maskPhone = phone => {
  const hyphenIndexes = [1, 5, 7];
  let maskedPhone = '';

  for (let i = 0; i < phone.length; i++) {
    if (hyphenIndexes.includes(i)) {
      maskedPhone += ['-', phone[i]].join('');
      continue;
    }
    maskedPhone += phone[i];
  }

  return maskedPhone;
};
