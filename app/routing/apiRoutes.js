// Setting dependencies
var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });
    
    app.post("/api/friends", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of the body parsing middleware
        var newFriend = req.body;
        console.log("new friend:", newFriend);
        friends.push(newFriend);
    
        // The JSON is then displayed to the user
        res.json(friends);
    });
}