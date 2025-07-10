import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/hedear';
import FormInput from './components/FormInput';
import Login from './components/LogIn';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div id="container">
          {/* Navigare simplă */}
          <nav>
            <Link to="/">Înregistrare</Link> | <Link to="/login">Login</Link>
          </nav>

          {/* Zona care se schimbă în funcție de pagină */}
          <main>
            <Routes>
              <Route path="/" element={<FormInput />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
