import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/userActions';
import Loading from '../components/Loading';
import Success from '../components/Success';
import Error from '../components/Error';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const registerstate = useSelector((state) => state.registerUserReducer);
  const { error, loading, success } = registerstate;
  const dispatch = useDispatch();

  function register() {
    if (password != cpassword) {
      alert('Password not Matched');
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
      dispatch(registerUser(user));
    }
  }

  return (
    <div>
      <div className='row justify-content-center'>
        <div className='col-md-5 mt-2 text-start shadow-lg p-3 mb-5 bg-body rounded'>
          {loading && <Loading />}
          {success && <Success success='User Registered Successfully' />}
          {error && <Error error='Email already registered' />}
          <h2 className='text-center' style={{ fontSize: '35px' }}>
            Register
          </h2>
          <div>
            <input
              type='text'
              placeholder='name'
              className='form-control'
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type='text'
              placeholder='email'
              className='form-control'
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type='text'
              placeholder='password'
              className='form-control'
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type='text'
              placeholder='confirm password'
              className='form-control'
              required
              value={cpassword}
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
            />
            <button className='btn mt-3 mb-3' onClick={register}>
              REGISTER
            </button>
            <a className='nav-link' href='/login'>
              Click Here To Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
