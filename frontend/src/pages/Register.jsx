import { useState } from 'react';
import api from '../services/api';
import './Register.css';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            const response = await api.post('/auth/register', {
                name,
                email,
                password,
            });

            console.log(response.data);

            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
            }

            alert('Account created successfully!');

            window.location.href = '/';
        } catch (error) {
            console.log(error.response?.data);
        }
    };

    return (
        <div className="register-page">
            <div className="floating-card card-one">🚀 New Opportunities</div>

            <div className="floating-card card-two">💼 Build Your Career</div>

            <div className="register-brand">
                <div className="logo-circle">🍫</div>

                <h1>JobNest</h1>

                <p>Where careers find their next destination.</p>

                <div className="feature-list">
                    <p>✨ Discover amazing jobs</p>
                    <p>🤝 Connect with companies</p>
                    <p>📈 Grow professionally</p>
                </div>
            </div>

            <div className="register-box">
                <h1>Create Account</h1>

                <p className="register-subtitle">
                    Start your career journey today
                </p>

                <input
                    className="register-input"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    className="register-input"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className="register-input"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    className="register-btn"
                    onClick={handleRegister}
                >
                    Create Account ✨
                </button>

                <p className="login-link">
                    Already have an account? Welcome back!
                </p>
            </div>
        </div>
    );
}

export default Register;