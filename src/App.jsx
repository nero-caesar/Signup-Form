import React, { useState } from 'react';
import './App.css';

function App(){
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const click = (e) => {
    e.preventDefault();

    let valid = true;

    setFormSubmitted(valid);

    if (firstName.trim() === '') {
      setFirstNameError(true);
      valid = false;
    } else {
      setFirstNameError(false);
    }

    if (lastName.trim() === '') {
      setLastNameError(true);
      valid = false;
    } else {
      setLastNameError(false);
    }

    if (email.trim() === '' || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      valid = false;
    } else {
      setEmailError(false);
    }

    if (password.trim() === '' || password.length < 6) {
      setPasswordError(true);
      valid = false;
    } else {
      setPasswordError(false);
    }

    if (valid) {
      alert("Form submitted!");
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
    }
  }

  return (
    <>
      <section>
        <div className='div1'>
          <h1>Learn to code by watching others</h1>
          <p>
            See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
            but understanding how developers think is invaluable.
          </p>
        </div>

        <div className='div2'>
          <div className='div3'>
            <p><b>Try it free 7 days</b> then $20/mo. thereafter</p>
          </div>
          <form onSubmit={click} style={{ gap: formSubmitted ? '5px' : '20px' }}>
            <input 
              type="text" 
              placeholder="First Name" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)} 
            />
            {firstNameError && <p className='formp'>First Name cannot be empty</p>}

            <input 
              type="text" 
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {lastNameError && <p className='formp'>Last Name cannot be empty</p>}

            <input 
              type="email" 
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className='formp'>Please enter a valid email</p>}

            <input 
              type="password" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className='formps'>Password must be at least 6 characters</p>}

            <button id='button' type="submit">CLAIM YOUR FREE TRIAL</button>

            <p>
              By clicking the button, you are agreeing to our 
              <b><a href="#"> Terms and Services</a></b>
            </p>
          </form>
        </div>
      </section>

      <footer>
        <p>
          Challenge by {""}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">
            Frontend Mentor
          </a>{""}
          Coded by <a href="#">Nero Caesar</a>
        </p>
      </footer>
    </>
  );
}

export default App;
