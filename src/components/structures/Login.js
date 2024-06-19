import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';
import LoginStyling from '../styles/Login.css'

const Login = () => {
  const dispatch = useDispatch()
  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const sendRequest = async () => {
      const res = await axios.post('http://localhost:5000/api/login', {
        email, password
      }).catch((err) => console.log("incorrect credentials",err));
      const data = await res.data;
      return data;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let arr = [email, password];
    sendRequest().then(()=>dispatch(authActions.login())).then(() => 
      history("/user")
    )
  }
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    // <div className={`content ${menuOpen ? 'shifted' : ''}`}>
      <form className='main-body' onSubmit={handleSubmit}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            onChange={handleEmail}
            type="email"
            className="form-control"
            placeholder="Enter email"
            required="true"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            onChange={handlePassword}
            type="password"
            className="form-control"
            placeholder="Enter password"
            required="true"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Not a user? <a href="/signup">SignUp</a>
        </p>
      </form>
    // </div>
  )
}

export default Login
    // try{
    //   const res = await axios.post('http://localhost:5000/api/login', {
    //     email, password
    //   })
    //   const data = await res.data;
    //   return data;
    // }
    // catch(err){
    //   console.log("send request failed", err);
    // }