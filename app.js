var express = require ('express');
var app = express();
var cors = require('cors')
//var read = require ("./routes/read.js");
//var modify = require ("./routes/modify.js");
var bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use("/", read);
//app.use("/modify", modify);

app.listen(3000);