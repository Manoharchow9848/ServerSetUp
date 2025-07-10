import express from 'express';

const app = express();
const PORT = 4000;

app.get('/products', (req, res) => {
   res.send('Here is the list of all products.');
});
app.post('/products', (req, res) => {
   res.send('A new product has been added.');
});

app.get('/categories', (req, res) => {
   res.send('Here is the list of all categories.');
});
app.post('/categories', (req, res) => {
   res.send('A new category has been created.');
});

// Handle unknown routes
app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1><p>The requested resource was not found on this server.</p>');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
