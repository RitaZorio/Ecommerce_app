
//starts server and make it listen on port 3000
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send('Hello World!')
});

app.listen(port, ()=>{
    console.log(`app listening on port ${port}`)
}); 