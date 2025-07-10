import express from 'express';

const app = express();
const PORT = 5000;

app.get('/welcome/:username', (req, res) => {
    const username = req.params.username;
    if (!username) {
        return res.status(400).send('Username is required');
    }
    const role = req.query.role || 'guest'; // Default to 'guest' if no role is provided
    res.send( `Welcome ${username}! You are logged in as a ${role}.`);
});


app.listen(PORT, () => {  console.log(`Server is running on http://localhost:${PORT}`);
});