// Setting dependencies 
var path = require('path');

// These routes pull the html files created in the public folder
module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/index.html"));
    })

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    })
}