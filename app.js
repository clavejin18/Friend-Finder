// Setting dependcies
const express = require('express');
const path = require('path');
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3600;

// Using body-parser to help verify user input
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// The following code take the get routes defined in htmlRoutes and apiRoutes
require(path.join(__dirname, "./app/routing/htmlRoutes.js"))(app);
require(path.join(__dirname, "./app/routing/apiRoutes.js"))(app);

app.listen(PORT, function() {
    console.log(`App is listening on port ${PORT}`);
})