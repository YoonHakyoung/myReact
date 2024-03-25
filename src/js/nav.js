import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';

const Nav = () => {
    return (
        <nav>
            <Link to="/">HOME</Link>
            <Link to="/list">LIST</Link>
            <Link to="/map">MAP</Link>
            <Link to="/signin">SIGN IN</Link>
            <Link to="/signup">SIGN UP</Link>
        </nav>
    );
}

export default Nav;
