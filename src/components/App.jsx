import { Form } from '../Pages/Form/Form';
import s from './App.module.css';
import { useState } from 'react';
import { Profile } from '../Pages/Profile/Profile';

import { Routes, Route, useNavigate } from 'react-router';

export const App = () => {
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleSubmitFirm = data => {
    setIsFormFilled(true);
    setFormData(data);

    navigate('/profile', { replace: true });
  };

  return (
    <div className={s.container}>
      <Routes>
        <Route path="/" element={<Form onSubmit={handleSubmitFirm} />} />
        <Route
          path="/profile"
          element={<Profile data={formData} isProfileFilled={isFormFilled} />}
        />
      </Routes>
    </div>
  );
};
