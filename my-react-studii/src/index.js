import React from 'react';
import { createRoot } from 'react-dom/client'; 
import './index.css'; // Assuming you have a CSS file for styles



const helpText = "help Text";

const Element = (
<div id ="main">
        <form id="main-form">
            <span id="register">Register</span><br /><br />
            <label htmlFor="name">Name:</label><br />
            <input type="text" name="name" id="name" placeholder=" Numele" /><br /><br />
            <label htmlFor="password">Password</label><br />
            <input type="password" name="password" id="password" placeholder=" Parola" /><br /><br />
            <label htmlFor="repass">Password verification</label><br />
            <input type="password" name="repass" id="repass" placeholder=" Parola" /><br /><br />
            <label htmlFor="email">Email:</label><br />
            <input type="text" name="email" id="email" placeholder=" Email" /><br /><br />
            <span id="gen">Genul:</span><br /><br />
            <input type="radio" name="state" id="male" value="Masculin" />
            <label htmlFor="male">Masculin</label>
            <input type="radio" name="state" id="female" value="Femenin" />
            <label htmlFor="female">Femenin</label><br /><br />
            <div><span id="info-log">Deja aveți cont? Atunci <a  id ="info-log-link" href="login.html">pagina de logare</a></span></div>
            <div><span id="error"></span></div>
            <input type="submit"  value = "Submit" name="submit" />
        </form>
</div>
);

const app = document.getElementById('add');
const root = createRoot(app); // React 18+
root.render(Element);


