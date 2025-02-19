import React, { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

// import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate()
  const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mobileNo && password) {
      alert("Login successful!");
      axios.post("http://localhost:5000/api/admin/login", {
        mobileNumber: mobileNo,
        password: password    
      })
      .then(response => {
        console.log('login_res-', response)
        if(response.data.status === "loggedIn") {
          navigate("/")
        }
      })
      .catch(error => {
        console.log("error-", error)
      })
    } else {
      setError("Invalid mobile no. or password");
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${resetEmail}`);
    setIsResetModalOpen(false);
    setResetEmail('');
  };

  return (
    
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>WELCOME BACK</h2>
        <h4>login using your mobile no.</h4>
        <div className="login">
        <img src="/venuevows.jpg" alt="Company Logo" className="venuevows" />
         </div>
        <div className="form-group">
          <label htmlFor="Mobile No.">Mobile No.:</label>
          <input
            type="text"
            id="mobileNumber"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-button">Login</button>
        <p className="signup-link">
          Don't have an account? 
          <a href="/signup">Signup</a>
        </p>
        <p className="forgot-password">
          <a href="/forgot password" onClick={() => setIsResetModalOpen(true)}>Forgot Password?</a>
        </p>
      </form>

      {isResetModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Reset Password</h3>
            <form onSubmit={handleResetPassword}>
              <div className="form-group">
                <label htmlFor="reset-email">Email:</label>
                <input
                  type="email"
                  id="reset-email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="reset-button">Send Reset Link</button>
              <button type="button" className="close-button" onClick={() => setIsResetModalOpen(false)}>Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginPage;