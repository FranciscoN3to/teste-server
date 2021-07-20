const express = require('express');

const app = express();

app.use(express.json())

app.get('/', (_, res) => {
    res.json({message: 'hello world'})
})

app.listen(3333, () => console.log('Server is running on port 8080'))