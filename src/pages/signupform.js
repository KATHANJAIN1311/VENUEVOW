// import React, { Component } from "react";

// export class Signupform extends Component {
//   render() {
//     return (
//       <div>
//         <form class="modal-content" action="/action_page.php">
//           <div class="container">
//             <h1>Sign Up</h1>
//             <p>Please fill in this form to create an account.</p>

//             <label for="name">
//               <b>Name</b>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter User name"
//               name="name"
//               required
//             />

//             <label for="mobileNumber">
//               <b>Mobile Number</b>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Mobile number"
//               name="mobileNumber"
//               required
//             />
//             <label for="email">
//               <b>Email</b>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Email"
//               name="email"
//               required
//             />

//             <label for="psw">
//               <b>Password</b>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               name="psw"
//               required
//             />

//             <label>
//               <input type="checkbox" checked="checked" name="remember" />{" "}
//               Remember me
//             </label>

//             <p>
//               By creating an account you agree to our{" "}
//               <a href="/">Terms & Privacy</a>.
//             </p>

//             <div class="clearfix">
//               <button
//                 type="button"
//                 onclick="document.getElementById('id01').style.display='none'"
//                 class="cancelbtn"
//               >
//                 Cancel
//               </button>
//               <button type="submit" class="signupbtn">
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default Signupform;

import React, { useState } from "react";
// import Signupform from "./signupform";
import { useNavigate } from "react-router-dom";
import axios from "axios"

// import './LoginPage.css';

function SignupPage() {
  const navigate = useNavigate()
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mobileNo && password && username && email) {
      alert("Login successful!");
      axios.post("http://localhost:5000/api/admin/signup", {
        name: username,
        mobileNumber: mobileNo,
        email: email,
        password: password    
      })
      .then(response => {
        console.log('signup_res-', response)
        if(response.data.status === "registered") {
          navigate("/login")
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
    setResetEmail("");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <h4>Enter user info</h4>
        <div className="login">
          <img src="/venuevows.jpg" alt="Company Logo" className="venuevows" />
        </div>

        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Mobile No.">Mobile No.:</label>
          <input
            type="text"
            id="username"
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

        <button type="submit" className="login-button">
          Register
        </button>

      </form>

      {/* {isResetModalOpen && (
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
              <button type="submit" className="reset-button">
                Send Reset Link
              </button>
              <button
                type="button"
                className="close-button"
                onClick={() => setIsResetModalOpen(false)}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default SignupPage;
