var data = require("../data.json");

exports.addFriend = function(req, res) { 
	name = req.query.name;
	description = req.query.description;
	res.render('add', data)   
	var newFriend = {
		'name': name,
		'description': description,
		'imageURL': "http://lorempixel.com/400/400/people" 
	};

	data["friends"].push(newFriend);



 }