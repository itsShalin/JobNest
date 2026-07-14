import { useState } from 'react';
import api from '../services/api';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await api.post('/auth/login', {
                email,
                password,
            });

            console.log('LOGIN RESPONSE');
            console.log(response.data);
            console.log('TOKEN:', response.data.token);
            console.log('USER:', response.data.user);

            localStorage.setItem('token', response.data.token);

            window.location.href = '/';

            alert('Login successful!');
        } catch (error) {
            console.log(error.response?.data);
        }
    };

    return (
        <div className="login-page">
            <div className="login-left">
                <h1>🍫 Welcome Back</h1>

                <h2>Your next opportunity is waiting.</h2>

                <p>
                    Log in to JobNest and continue building your career journey.
                    Discover opportunities, connect with companies, and take
                    your next big step.
                </p>

                <div className="quote-box">
                    ✨ "Success comes to those who keep searching for better
                    opportunities."
                </div>
            </div>

            <div className="login-card">
                <h1>Login</h1>

                <p className="login-subtitle">Welcome back! We missed you.</p>

                <input
                    className="login-input"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className="login-input"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="login-btn" onClick={handleLogin}>
                    Login 🚀
                </button>

                <p className="signup-text">
                    New here? Create an account and start your journey.
                </p>
            </div>
        </div>
    );
}

export default Login;
