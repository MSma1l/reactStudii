import React from 'react';
import './CSS/form.css'; 

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      repass: "",
      email: "",
      state: ""
    }
  }

  handleSubmit = async (e)=> {

      document.getElementById("error").innerHTML = "";

    e.preventDefault();
     const {
      name,
      password,
      repass,
      email,
      state
     } = this.state;

    if (name === "" || password === "" || repass === "" || email === "" || state === "") {
      document.getElementById("error").innerHTML = "Toate câmpurile sunt obligatorii!";
      return;
    }
    if (password !== repass) {
      document.getElementById("error").innerHTML = "Parolele nu se potrivesc!";
      return;
    }
    if (!email.includes("@")) {
      document.getElementById("error").innerHTML = "Emailul nu este valid!";
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          password,
          email,
          state
        })
      });

      if (response.ok) {
        document.getElementById("error").innerHTML = "Înregistrare reușită!";
        this.setState({
          name: "",
          password: "",
          repass: "",
          email: "",
          state: ""
        });
        setTimeout(()=> {
          this.props.navigate("/");
        },1000);

      } else {
        const errorData = await response.json();
        document.getElementById("error").innerHTML = errorData.message || "Eroare la înregistrare!";
      }
    } catch (error) {
      document.getElementById("error").innerHTML = "Eroare de rețea!";
    }
  }

  render() {
    return (
      <div id ="main">
        <form id="main-form" onSubmit={this.handleSubmit}>
            <span id="register">Register</span><br /><br />
            <label htmlFor="name">Name:</label><br />
            <input type="text" name="name" id="name" placeholder=" Numele"  onChange={(e) => this.setState({name:e.target.value})}/><br /><br />
            <label htmlFor="password">Password</label><br />
            <input type="password" name="password" id="password" placeholder=" Parola" onChange={(e) => this.setState({password:e.target.value})} /><br /><br />
            <label htmlFor="repass">Password verification</label><br />
            <input type="password" name="repass" id="repass" placeholder=" Parola" onChange={(e) => this.setState({repass:e.target.value})} /><br /><br />
            <label htmlFor="email">Email:</label><br />
            <input type="text" name="email" id="email" placeholder=" Email" onChange={(e) => this.setState({email:e.target.value})} /><br /><br />
            <span id="gen">Genul:</span><br /><br />
            <input type="radio" name="state" id="male" value="Masculin" checked={this.state.state === "Masculin"} onChange={(e) => this.setState({state:e.target.value})} />
            <label htmlFor="male">Masculin</label>
            <input type="radio" name="state" id="female" value="Femenin" checked={this.state.state === "Femenin"} onChange={(e) => this.setState({state:e.target.value})}/>
            <label htmlFor="female">Femenin</label><br /><br />
            <div><span id="info-log">Deja aveți cont? Atunci <a  id ="info-log-link" onClick={()=> this.props.navigate("/")}>pagina de logare</a></span></div>
            <div><span id="error"></span></div>
            <input type="submit"  value = "Submit" name="submit" />
        </form>
</div>
    )
  }
}
export default FormInput;