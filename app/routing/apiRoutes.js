// ===============================================================================
// LOAD DATA

// ===============================================================================

var user = require('../data/friends');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  //
  // ---------------------------------------------------------------------------

  app.get('/api/friends', function(req, res) {
    res.json(user);
  });

  // API POST Requests

  // ---------------------------------------------------------------------------

  app.post('/api/friends', function(req, res) {
  
  var myBestFriend = {  

    name:"",
    picture: "",
    scoreDelta: 99999
  }

  var newFriend= req.body;
  var friendName= newFriend.name;
  var picture = newFriend.photo;
  var score = newFriend.scores;

  var difference = 0;

  //loop thru existing "Friends" & calculate delta score

  for(var i=0 ; i < user.length; i++){

    difference=0

    for(var j=0; j< 10; j++){

      difference+= Math.abs(parseInt(score[j])- parseInt(user[i].scores[j]));

      if(difference <= myBestFriend.scoreDelta){

        myBestFriend.name = user[i].name;
        myBestFriend.picture = user[i].photo;
        myBestFriend.scoreDelta = difference;
      }

    }
  }
    user.push(req.body);
    res.json(myBestFriend);
  });

};
