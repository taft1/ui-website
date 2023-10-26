import React, { useState } from "react";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {

    };

    return (
        <div>
            <h2>Sign Up</h2>
            <from>
            <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="button" onClick={handleSignup}>
            Sign Up
        </button>
            </from>
        </div>
    )
}

export default Signup;