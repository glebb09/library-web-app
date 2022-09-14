import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../../../features/user/userFormSlice';

import { LocalUserIn, LocalUser, LocalTokenIn } from '../../../../hooks/useLocalUser/useLocalUser';

import s from './Login.module.scss';

const Login = () => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ token, setToken ] = useState('');

  const { status } = useSelector((state) => state.register);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFormLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password
    };
    try {
      const user = await dispatch(loginUser(loginData)).unwrap();
      const { token } = user;
      LocalTokenIn(token);
      LocalUserIn(user);

    } catch (error) {
      console.log(error);
    }

  };

  
  useEffect(() => {
    if (status) navigate('/')
  }, [status]);

  return (
    <div className={s.container}>
      <form onSubmit={handleFormLogin} className={s.form}>
        <h3>Login</h3>
        <label 
          htmlFor='email'
          className={s.label}
        >
          Email
        </label>
        <input 
          type='email' 
          className={s.input}
          placeholder='Enter Your Email'
          id='email_name'
          name='email_name'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label 
          htmlFor='password'
          className={s.label}
        >
          Password
        </label>
        <input 
          type='password' 
          className={s.input}
          placeholder='Enter Your Password'
          id='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input 
          type='submit' 
          value="Sing in"
          className={s.button}
        />

      </form>
    </div>
  )
};

export default Login;