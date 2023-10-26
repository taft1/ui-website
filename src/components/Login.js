import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
    try {
        const response = await axios.post('http://localhost:5000/login', { username, password });
        const token = response.data.token;
        console.log('Login successful. Token:', token);
      // Store the token securely (e.g., in local storage or cookies)
    } catch (error) {
        console.error('Login failed:', error.message);
    }
    };

    return (
    <div>
        <h2>Login</h2>
        <form>
        <label>
                Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="button" onClick={handleLogin}>
            Login
        </button>
        </form>
    </div>
    );
};

export default Login;