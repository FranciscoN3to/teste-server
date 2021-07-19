const express = require('express');

const app = express();

app.use(express.json())

app.get('/', (_, res) => {
    res.json({message: 'olá teste123 agora vai'})
})

app.listen(3333, () => console.log('Server is running on port 8080'))