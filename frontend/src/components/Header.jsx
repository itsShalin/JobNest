import './Header.css';

import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Header() {
    const [token, setToken] = useState(localStorage.getItem('token'));
    console.log('TOKEN:', token);

    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setOpen(false);
        navigate('/login');
    };
    return (
        <header>
            <Link to="/" className="logo">
                ☕ JobNest
            </Link>

            <nav className="nav-links">
                <NavLink to="/">Home</NavLink>

                <NavLink to="/jobs">Jobs</NavLink>

                <NavLink to="/about">About</NavLink>

                <NavLink to="/contact">Contact</NavLink>
            </nav>

            {token ? (
                <div className="user-menu">
                    <button
                        className="account-btn"
                        onClick={() => setOpen(!open)}
                    >
                        ✿ My Account
                        <span>✿</span>
                    </button>

                    {open && (
                        <div className="dropdown">
                            <Link to="/profile">Profile</Link>

                            <Link to="/create-job">Create Job</Link>

                            <Link to="/my-jobs">My Jobs</Link>

                            <Link to="/my-applications">My Applications</Link>

                            <button
                                className="logout-btn"
                                onClick={handleLogout}
                            >
                                🚪 Logout
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="auth-buttons">
                    <Link to="/login">Login</Link>

                    <Link to="/register">Register</Link>
                </div>
            )}
        </header>
    );
}

export default Header;
