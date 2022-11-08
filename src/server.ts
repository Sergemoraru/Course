import express = require('express');
import router from './router';

const app = express();

app.get('/', (req, res) => {
    console.log('hello world');
    res.status(200)
    res.json({ message: 'hello world' });
});

app.use('/api', router);

export default app;
