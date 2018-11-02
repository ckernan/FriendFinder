//DEPENDENCIES
var path = require("path");

//ROUTES
module.exports = function(app) {

    //SENDS TO SURVEY PAGE
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //SENDS TO HOME PAGE
    app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    //SENDS TO HOME PAGE IF USER TYPES IN ROUTE THAT DOES NOT EXIST
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });


}
