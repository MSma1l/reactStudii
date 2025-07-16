import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/hedear';
import FormInput from './components/FormInput';
import Login from './components/LogIn';
import LoginWrapper from './components/LoginWrapper';
import FromInputWrapper from './components/FromInputWrapper';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div id="container">

          <nav>
            <Link to="/">Logare</Link> | <Link to="/login">Register</Link>
          </nav>

          <main>
            <Routes>
              <Route path="/" element={<LoginWrapper />} />
              <Route path="/login" element={<FromInputWrapper />} />
            </Routes>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
