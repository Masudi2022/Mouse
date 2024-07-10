import React, { useState } from 'react';
import axios from 'axios';
// import { } from 'react-router-dom';
import {  useNavigate,useParams, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Check if user is already authenticated
    const isAuthenticated = !!localStorage.getItem('userId');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validate form inputs
        if (validateForm()) {
            try {
                // Authenticate the user
                const response = await axios.post('http://127.0.0.1:8000/api/community/login/', values, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                console.log('User logged in successfully', response.data);

                // Store the username and userId in local storage
                localStorage.setItem('username', response.data.username);
                localStorage.setItem('userId', response.data.id);

                // Navigate to the chatting page after successful login
                navigate('/chat');
            } catch (error) {
                console.error('There was an error logging in the user!', error.response ? error.response.data : error.message);
                setError('Invalid email or password');
            }
        }
        setSubmitted(true);
    };

    const validateForm = () => {
        if (!values.email.trim() || !values.password.trim()) {
            setError('Please enter email and password');
            return false;
        }
        return true;
    };

    // Redirect if user is already authenticated
    if (isAuthenticated) {
        navigate('/chat');
        return null; // Render nothing if redirecting
    }

    return (
        <div className='log'>
            
            <div className="login-container">
            <h2>Login</h2> 
            <form className="form-group" onSubmit={handleSubmit}>
                <input
                    className="form-field"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                />
                {submitted && !values.email && <span id="email-error">Please enter an email address</span>}

                <input
                    className="form-field"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={values.password}
                    onChange={handleInputChange}
                /><br/>
                {submitted && !values.password && <span id="password-error">Please enter a password</span>}

                {error && <span id="login-error">{error}</span>}<br/>

                <button className="btn-field" type="submit">
                    Log In
                </button><br/>
                <Link to="/community" className="form-field">Back</Link>
            </form>
            
        </div>
        
        </div>

    );
};

export default Login;
