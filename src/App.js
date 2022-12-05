import React, { useState } from 'react';


function App() {
  

  const [input, setInput] = useState({
    username: '',
    email: '',
    mobile: '',
    gender: '',
    password: '',
    confirmPassword: ''
    
  });

  const validate = () => {
    return input.username.length && input.email.length && input.mobile.length && input.password.length && input.confirmPassword.length;
  };
  

  const [error, setError] = useState({
    username: '',
    email: '',
    mobile: '',
    gender: '',
    password: '',
    confirmPassword: ''
  })
 
 

  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }


  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      const regex1 = /^[0-9\b]+$/;

      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = "Please enter Username.";
          }
          break;
        case "email":
          if (!value) {
            stateObj[name] = "please enter email.";
          } else if(!regex.test(value)) {
            stateObj["email"] = "Invalid email id";
          }
          break;
        case "mobile":
          if (!value) {
            stateObj[name] = "please enter mobile number";
          } else if(!regex1.test(value)) {
            stateObj["mobile"] = "Invalid mobile number";
          }
          break;
        case "gender":
          if(!value) {
            stateObj[name] = "please select one option";
          }
        break;
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  }


  return (
    <div className="app">
      <h1>Login form validaion </h1>
      <form>
        <div className='form-inputs'>
        <label htmlFor="username" className="form-label">
                Username 
            </label>
        <input
          type="text"
          name="username"
          placeholder='Enter Username'
          value={input.username}
          onChange={onInputChange}
          onBlur={validateInput}></input>
        {error.username && <span className='err'>{error.username}</span>}
        </div>
        <div className='form-inputs'>
        <label htmlFor="email" className="form-label">
                email 
            </label>
        <input
          type="text"
          name="email"
          placeholder='Enter email'
          value={input.email}
          onChange={onInputChange}
          onBlur={validateInput}></input>
        {error.email && <span className='err'>{error.email}</span>}
        </div>
        <div className='form-inputs'>
        <label htmlFor="mobile" className="form-label">
                mobile 
            </label>
        <input
          type="tel"
          name="mobile"
          placeholder='Enter mobile number'
          value={input.mobile}
          onChange={onInputChange}
          onBlur={validateInput}></input>
        {error.mobile && <span className='err'>{error.mobile}</span>}
        </div>
        
        <div className='field'>
                  <label htmlFor='gender' className='gender'>Gender</label><br></br>
                  <input type="radio" id='male' name="male" value="male" onChange={onInputChange}/><label htmlFor='Male'>Male</label>
                  <input type="radio" id='male' name="male" value="male" onChange={onInputChange}/><label htmlFor='Male'>Female</label>
                </div>
          {error.gender && <span className='err'>{error.gender}</span>}

        <div className='form-inputs'>
        <label htmlFor="username" className="form-label">
                Password
            </label>
        <input
          type="password"
          name="password"
          placeholder='Enter Password'
          value={input.password}
          onChange={onInputChange}
          onBlur={validateInput}></input>
        {error.password && <span className='err'>{error.password}</span>}
        </div>
        <div className='form-inputs'>
        <label htmlFor="username" className="form-label">
                Re-enter password
            </label>
        <input
          type="password"
          name="confirmPassword"
          placeholder='Enter Confirm Password'
          value={input.confirmPassword}
          onChange={onInputChange}
          onBlur={validateInput}></input>
        {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
        </div>
        <div class="checkbox">
          <input id="checkbox" type="checkbox" />
          <label for="checkbox"> I agree to these Terms and Conditions.</label>
        </div>
        <button type="button" disabled={!validate()}>
        Submit
      </button>
      </form>
    </div>
  );
}

export default App;