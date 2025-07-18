import React from 'react';
import './CSS/header.css';
// import logo from './ImgComponents/logo.png';

class Header extends React.Component {
  render () {
  return (
    <header className='header'>
      <div id="header-content">
        <div className="logo">
          <img src="logo" alt="Logo" />
        </div>
        <div className="nav-links">
          <nav>
            <link to="/Home">Home</link>
            <link to="/Portofolio">Portofolio</link>
            <link to="/Experients">Experients</link>
          </nav>
        </div>
      </div>
    </header>   
    
  )
}
}
export default Header;