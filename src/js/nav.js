import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';

const Nav = () => {
    const isLoggedIn = sessionStorage.getItem('userId');
    return (
        <nav>
            <Link to="/">HOME</Link>
            <Link to="/list">LIST</Link>
            <Link to="/map">MAP</Link>
            {isLoggedIn ? (
                <>
                    <Link to="/mypage">MY PAGE</Link>
                    <Link to="/logout">LOGOUT</Link>
                </>
            ) : (
                <>
                    <Link to="/signin">SIGN IN</Link>
                    <Link to="/signup">SIGN UP</Link>
                </>
            )}
        </nav>
    );
}

export default Nav;
