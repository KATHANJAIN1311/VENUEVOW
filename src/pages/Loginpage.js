import React, { Component } from "react";
import LoginPage from "../pages/login";

export class Login extends Component {
  render() {
    return (
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <div>
                <LoginPage />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
