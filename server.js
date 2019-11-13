const express = require('express')
const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (request, response) => {
    response.send('welcome to get')
})

app.put('/product', (request, response) => {
    response.send('welcome to put')
})

app.listen(4000, () => {
    console.log(`Server started on port 4000`);
});