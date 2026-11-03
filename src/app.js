//setting up express app with the right middleware and routes
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello from aquisitions!');
});

export default app;
