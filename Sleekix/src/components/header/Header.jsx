import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; // Importing the CSS file

const Header = () => {
  const navbar = [
    { name: 'HOME', path: '/home' },
    { name: 'ABOUT', path: '/about-us' },
    { name: 'PRODUCTS', path: '/products' },
    { name: 'SUPPORT', path: '/support' }
  ];

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <NavLink to="/home">Sleekix</NavLink>
      </div>
      <nav>
        <ul className="navbar-menu">
          {navbar.map((item) => (
            <li key={item.name} className="navbar-item">
              <NavLink to={item.path} className="navbar-link" activeClassName="active-link">
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className='navbar-auth'>
        <NavLink to= 'login'>LOGIN</NavLink>
      </div>
    </header>
  );
}

export default Header;
