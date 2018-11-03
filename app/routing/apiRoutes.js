//DEPENDENCIES
var path = require('path');
var friendsData = require("../data/friends.js");

//ROUTES
module.exports = function(app) {

    //API GET ROUTE FOR FRIENDS.JS    
    app.get("/api/friends", function(req, res) {
        res.json(friendsData)
    });

    //API POST ROUTE FOR SURVEY RESULTS
    app.post("/api/friends", function(req, res) {

        var bestFriend = {
            name: "",
            photo: "",
            difference: 100

        };

        var userInput = req.body;
        var userScores = userInput.scores;

        //Loop through friends.js array 
        for (var i = 0; i < friendsData.length; i++) {
            var totalDifference = 0;

            //Loop through scores and calculate total difference
            for (var j = 0; j < friendsData[i].scores[j]; j++) {
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendsData[i].scores[j]));

                //Sets best friend to lowest sum of differences
                if (totalDifference <= bestFriend.difference) {
                    bestFriend.name = friendsData[i].name;
                    bestFriend.photo = friendsData[i].photo;
                    bestFriend.difference = totalDifference
                }
            }
        }
        //Save new user to database
        friendsData.push(userInput);

        res.json(bestFriend);
    });

}