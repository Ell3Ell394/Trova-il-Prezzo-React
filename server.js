

var fs = require('fs');

var  express = require("express");
var app = express();



//Ricordarsi, mettere prima il modello poi routes altrimenti non trova lo schema.


app.use(express.static(__dirname));


require('./models/game'); 


require('./routes/routes')(app);
app.use(express.static(__dirname));


app.get('/', function(req, res){
 res.render('index.html')
});



app.listen(process.env.PORT || 3001);
console.log('Listening on port 3001...');
