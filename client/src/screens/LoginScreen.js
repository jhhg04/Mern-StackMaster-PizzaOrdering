import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/userActions';
import Loading from '../components/Loading';
import Success from '../components/Success';
import Error from '../components/Error';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginstate = useSelector((state) => state.loginUserReducer);
  const { error, loading } = loginstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      window.location.href = '/';
    }
  }, []);

  function login() {
    const user = {
      email,
      password,
    };
    dispatch(loginUser(user));
  }

  return (
    <div>
      <div className='row justify-content-center'>
        <div className='col-md-5 mt-2 text-start shadow-lg p-3 mb-5 bg-body rounded'>
          <h2 className='text-center' style={{ fontSize: '35px' }}>
            Login
          </h2>
          {loading && <Loading />}
          {error && <Error error='Invalid Creentials' />}
          <div>
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

            <button className='btn mt-3 mb-3' onClick={login}>
              LOGIN
            </button>
            <a className='nav-link' href='/register'>
              Click Here To Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
