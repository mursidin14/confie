import React, { useEffect, useState } from 'react';
import AsideLogin from 'components/Aside/AsideLogin';
import AuthService from 'services/Auth/AuthService';
import ModalError from 'components/Modal/ModalError';
import TargetCard from 'components/Dashboard/TargetCard';
export default function Login() {
  const [error, setError] = useState(false)
  const [error_msg, setError_msg] = useState('')
  useEffect(() => {
    document.title = 'Login';
  }, []);
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  function closeModal() {
    setError(false);
  }
  
  return (
    <main className="min-h-screen lg:flex">
    <TargetCard></TargetCard>
    </main>
  );
}



