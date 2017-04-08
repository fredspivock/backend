var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    base32 = require('./base32'),
    date = require('./date');

//connect to db
var db = mongoose.connect('mongodb://localhost:27017');

//models
var Book = require('./models/bookModel');
var Flavor = require('./models/flavorModel');
var Nicotine = require('./models/nicotineModel');

//init express
var app = express();
var port = process.env.PORT || 3000;

//extend apps function
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//routes
var bookRouter = require('./Routes/bookRoutes')(Book);
var flavorRouter = require('./Routes/flavorRoutes')(Flavor);
var nicotineRouter = require('./Routes/nicotineRoutes')(Nicotine);
app.use('/api/books', bookRouter);
app.use('/api/flavors', flavorRouter);
app.use('/api/nicotines', nicotineRouter);

console.log(base32.padWithZero(base32.encode(322), 3), base32.decode(base32.padWithZero(base32.encode(322), 3)));

//Listen,
app.listen(port, function () {
    console.log("Running on PORT:" + port)
});
