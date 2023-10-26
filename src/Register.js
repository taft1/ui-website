import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
    try {
        await axios.post('http://localhost:5000/register', { username, password });
        console.log('Registration successful');
    } catch (error) {
        console.error('Registration failed:', error.message);
    }
    };

    return (
    <div>
        <h2>Register</h2>
        <form>
        <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="button" onClick={handleRegister}>
            Register
        </button>
        </form>
    </div>
    );
};

export default Register;