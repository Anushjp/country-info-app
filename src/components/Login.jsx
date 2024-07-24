import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (email === 'anush.jayaprakash@gmail.com' && password === 'password') {
      navigate('/home');
    } else {
      setError('Invalid email or password');
    }
  }, [email, password, navigate]);

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Sign In</h2>
        <p>New user? <a href="#">Create an account</a></p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username or email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group checkbox">
            <input
              type="checkbox"
              className="checkbox-width"
              id="keep-signed-in"
              checked={keepSignedIn}
              onChange={() => setKeepSignedIn(!keepSignedIn)}
            />
            <label htmlFor="keep-signed-in" className="keep-signed-in">Keep me signed in</label>
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Sign In</button>
        </form>
        <div className="social-sign-in">
          <p>Or Sign In With</p>
          <div className="social-icons">
            <a href="https://www.google.com/"><img src="google-icon.png" alt="Google" /></a>
            <a href="https://www.facebook.com/"><img src="facebook-icon.png" alt="Facebook" /></a>
            <a href="https://www.linkedin.com/"><img src="linkedin-icon.png" alt="LinkedIn" /></a>
            <a href="https://www.twitter.com/"><img src="twitter-icon.png" alt="Twitter" /></a>
          </div>
        </div>
      </div>
      <div className="login-image">
        <img src="login-image.png" alt="Person holding a key" />
      </div>
    </div>
  );
};

export default Login;
