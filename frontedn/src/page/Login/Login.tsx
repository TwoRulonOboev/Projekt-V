import { useState } from 'react';
import './log.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here, e.g., send login request to server
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <p>Glad you're back.!</p>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="form-group">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit">Login</button>
        <a href="#">Forgot password?</a>
        <div className="social-login">
          <p>Or</p>
          <div className="social-icons">
            <a href="#">
              <img src="" alt="Google" />
            </a>
            <a href="#">
              <img src="" alt="Facebook" />
            </a>
            <a href="#">
              <img src="" alt="GitHub" />
            </a>
          </div>
        </div>
        <p>
          Don't have an account? <a href="#">Signup</a>
        </p>
        <div className="footer">
          <a href="#">Terms & Conditions</a>
          <a href="#">Support</a>
          <a href="#">Customer Care</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
