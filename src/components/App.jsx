import { Form } from './Form/Form';
import s from './App.module.css';
import { useState } from 'react';
import { Profile } from './Profile/Profile';

export const App = () => {
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [formData, setFormData] = useState({});

  const handleSubmitFirm = data => {
    setIsFormFilled(true);
    setFormData(data);
  };

  return (
    <div className={s.container}>
      {isFormFilled ? (
        <Profile data={formData} />
      ) : (
        <Form onSubmit={handleSubmitFirm} />
      )}
    </div>
  );
};
