const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const users = [];

app.post('/register', async (req, res) => {
    try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = { username: req.body.username, password: hashedPassword };
    users.push(user);
    res.status(201).send('User registered successfully');
    } catch (error) {
    console.error('Registration failed:', error.message);
    res.status(500).send('Internal Server Error');
    }
});

// User login
app.post('/login', async (req, res) => {
    try {
    const user = users.find((u) => u.username === req.body.username);
    if (user && (await bcrypt.compare(req.body.password, user.password))) {
        const token = jwt.sign({ username: user.username }, 'your-secret-key', { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).send('Invalid username or password');
    }
    } catch (error) {
    console.error('Login failed:', error.message);
    res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});