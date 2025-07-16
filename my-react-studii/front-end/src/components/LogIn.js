import React from 'react';
import './CSS/log.css'; 

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    document.getElementById("error").innerHTML = "";

    const { name, password } = this.state;

    if (name === "" || password === "") {
      document.getElementById("error").innerHTML = "Toate câmpurile sunt obligatorii!";
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          password
        })
      });

      const result = await response.json();

      if (response.ok) {
        document.getElementById("error").innerHTML = result.message || "Login reușit!";
        this.setState({
          name: "",
          password: ""
        });
      } else {
        document.getElementById("error").innerHTML = result.message ||"Login eșuat! Verificați numele și parola.";
      }
    } catch (error) {
      document.getElementById("error").innerHTML = "Eroare la conectare!";
    }
  }
  render() {
    return (
      <div id="main-login">
        <form id="main-login-form" onSubmit={this.handleSubmit}>
          <span id="login">Login</span><br /><br />

          <label htmlFor="name">Name:</label><br />
          <input
            type="text"
            name="name"
            id="name"
            placeholder=" Numele"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          /><br /><br />
          <label htmlFor="password">Password</label><br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder=" Parola"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          /><br /><br />
          <div><span id="info">Nu aveți cont? Accesați <a id="info-link" onClick={()=> this.props.navigate("/login")} >pagina de înregistrare</a></span></div>
          <div><span id="error"></span></div>
          <input type="submit" value="Login" name="submit" />
        </form>
      </div>
    );
  }
}
export default Login;



