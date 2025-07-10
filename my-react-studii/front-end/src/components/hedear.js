import React from 'react';
import './CSS/header.css';

class Header extends React.Component {
  render () {
  return (
    <header className='header'>
      <div id="header-content">
        <h1 id="title">Register</h1>
        <p id="subtitle">Vă rugăm să completați formularul de mai jos pentru a vă înregistra.</p>
      </div>
    </header>   
    
  )
}
}
export default Header;