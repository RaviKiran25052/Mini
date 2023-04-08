// FormData.js
import { useState } from 'react';

const useFormData = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return { formData, handleChange };
};

export default useFormData;
