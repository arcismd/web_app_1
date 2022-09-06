import React from 'react';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth, selectIsAuth } from '../../redux/slices/auth';
import { useState } from 'react';

import './loginpage.scss'

export const LoginPage = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const [errLog, seterrLog] = useState('');

  const { 
    register, 
    handleSubmit, 
 } = useForm({
    defaultValues: {
        AdminLogin: '',
        AdminPassword: ''
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));

    if (!data.payload) {
      return seterrLog('Nume sau parolă greșită')
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    } 
  };

  if (isAuth) {
    return <Navigate to='ap'/>
  }

  return (
    <div className='login-wrapper'>
          <h1>Panel <span>Administrator</span></h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex-items'>
            <label>
              <div className='flex-item'>
              <input 
                type='text'
                placeholder='Nume administrator'
                { ...register('AdminLogin', { required: 'Scrie numele' })}
                className=''
              />
              </div>
            </label>

            <label>
              <input 
                type='password'
                placeholder='Parolă'
                { ...register('AdminPassword', { required: 'Scrie parola' })}
                className=''
              />
            </label>

            <button type='submit' className='log-btn'>Intră</button>
        <p style={{color: '#B15557'}}>{errLog}</p>
        </div>
        </form>
    </div>
  )
}