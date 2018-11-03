//DEPENDENCIES
var express = require('express');
var path = require('path');

//EXPRESS APP SET-UP
var app = express(); 
var PORT = process.env.PORT || 9090;

//SETS UP EXPRESS APP TO HANDLE DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/app/public'));

//ROUTES
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//START SERVER LISTENING
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});