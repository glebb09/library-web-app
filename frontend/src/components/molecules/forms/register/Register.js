
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from '../../../../features/user/userFormSlice';

import s from './Register.module.scss';

const Register = () => {

  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ middleName, setMiddleName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const { status } = useSelector((state) => state.register);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFormRegistretion = (e) => {
    e.preventDefault();

    const newUser = {
      first_name: firstName,
      last_name: lastName,
      middle_name: middleName,
      email,
      password
    };
    try {
       const user = dispatch(registerUser(newUser)).unwrap();
       console.log("Register USer", user);
    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() => {
    if (status) navigate('/')
  }, [status])


  return (
    <div className={s.container}>
      <form onSubmit={handleFormRegistretion} className={s.form}>
        <h3>Create New Account</h3>
        <label htmlFor="first_name" className={s.label}>
          First Name
        </label>
        <input 
          type='text' 
          className={s.input}
          placeholder='Enter Your First Name'
          id='first_name'
          name='first_name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label 
          htmlFor='last_name'
          className={s.label}
        >
          Last Name
        </label>
        <input 
          type='text' 
          className={s.input}
          placeholder='Enter Your Last Name'
          id='last_name'
          name='last_name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label 
          htmlFor='middle_name'
          className={s.label}
        >
          Middle Name
        </label>
        <input 
          type='text' 
          className={s.input}
          placeholder='Enter Your Middle Name'
          id='middle_name'
          name='middle_name'
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
        />
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
          value="Registration"
          className={s.button}
          //onClick={() => handleFormRegistretion()}
        />

      </form>
    </div>
  )
};

export default Register;