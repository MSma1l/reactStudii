import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginWrapper from './components/LoginWrapper';
import AppHomeWrapper from './components/AppHomeWrapper';
import FromInputWrapper from './components/FromInputWrapper';

class App extends React.Component {
  render() {
    return (
      <div id="container">
        <main>
          <Routes>
            <Route path="/" element={<LoginWrapper />} />
            <Route path="/login" element={<FromInputWrapper />} />
            <Route path="/AppHome" element={<AppHomeWrapper />} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
