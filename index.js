const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mainCtrl = require('./controllers/mainCtrl');


const app = express();
app.use(bodyParser.json());

app.get('/monies', mainCtrl.getBalance);
app.get('/name', mainCtrl.getName);
app.put('/deposit', mainCtrl.deposit);
app.put('/withdraw', mainCtrl.withdraw);




app.listen(8000, function(){
    console.log('yo')
})