import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class LoginForm extends Component {
  render() {
    return (
      <div>
         <form className="login-form">
          <input placeholder="Username" />
          <input placeholder="Password" />
          <Button variant="outlined" color="primary">Login</Button>
        </form>
      </div>
    )
  }
}


export default LoginForm
