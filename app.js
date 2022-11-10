const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); 

app.use(bodyParser.json())


app.post('/example', (req, res) => {
   
    
  res.send(`Full name is:${req.body.fname} ${req.body.lname}.`);
});

app.get('/',(req,res) =>{
    res.send("Hello localhost")
})

const port = 8080;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});