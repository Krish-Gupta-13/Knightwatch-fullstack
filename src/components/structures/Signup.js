import React, { useState } from 'react'
import SignupStyling from "../styles/Signup.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Signup = () => {

  const history = useNavigate();

  // state hooks
  const [name, setName]  = useState('');
  const [email, setEmail]  = useState('');
  const [password, setPassword]  = useState('');


  const handleName = (e) => {
    setName(e.target.value)
    // console.log(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const sendRequest = async () => {
    const res = await axios.post("http://localhost:5000/api/signup", {
      name: name,
      email: email,
      password: password,
    }).catch((err) => console.log("email already exists!", err));
      const data = await res.data;
      return data;
  }

  // submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.name)
    let arr = [name, email, password]
    // console.log(arr)
    sendRequest().then(() => 
      history("/login")
    )
  }
   
 

  return (
    <form className='main-body' onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>Full Name</label>
        <input
          onChange={handleName}
          type="text"
          className="form-control"
          placeholder="Enter Full Name"
          required="true"
        />
      </div>
      
      <div className="mb-3">
        <label>Email address</label>
        <input
         onChange={handleEmail}
          type="email"
          className="form-control"
          placeholder="Enter your email"
          required="true"
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          onChange={handlePassword}
          type="password"
          className="form-control"
          placeholder="Enter the password"
          required="true"
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-success">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/login">sign in?</a>
      </p>
    </form>
  )
}

export default Signup

  // const sendRequest = async () => {
  //   try {
  //     const res = await axios.post("http://localhost:5000/api/signup", {
  //       name: name,
  //       email: email,
  //       password: password,
  //     });
  //     const data = await res.data;
  //     return data;
  //   } catch (err) {
  //     console.log("email already exists", err.response ? err.response.data : err.message);

  //   }
  // };
