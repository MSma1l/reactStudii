import React from 'react';
import './CSS/log.css'; 

class Login extends React.Component {

  render() {
    return (
      <div id="main-login">
        <form id="main-login-form">
          <span id="login">Login</span><br /><br />

          <label htmlFor="name">Name:</label><br />
          <input type="text" name="name" id="name" placeholder=" Numele" /><br /><br />
          <label htmlFor="password">Password</label><br />
          <input type="password" name="password" id="password" placeholder=" Parola" /><br /><br />
          <div><span id="info">Nu aveți cont? Accesați <a id="info-link" href="index.html">pagina de înregistrare</a></span></div>
          <div><span id="error"></span></div>
          <input type="submit" value="Login" name="submit" />
        </form>
      </div>
    )
  }
}
export default Login;



