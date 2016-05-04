module.exports = function(robot) {

	// // robot.hear() will have the robot listen in on any channel it's in
	// robot.hear(/badger/i, function(response) {
	// 	response.send("Badgers? BADGERS? WE DON'T NEED NO STINKIN BADGERS")
	// })

	// robot.hear(/i like (.+)/i, function(response) {
	// 	var like = response.match[1]
	// 	// response.reply() will have the robot at-mention you when it responds
	// 	response.reply('I also like ' + like)
	// })

	// robot.respond() means the robot will only reply when at-mentioned or DMed
	// robot.respond(/who should i call on today\?/i, function(response) {
	// 	var user = robot.brain.userForName('gordo')
	//  	response.reply('Call on ' + user.real_name + '!')
	// })

	// gives you a picture of a dang pizza
	robot.hear(/gimme pizza/i, function(response) {
		response.send("https://media.giphy.com/media/uN1u4nLw0HIe4/giphy.gif")
	})

	//gives you the most recent release from a band on bandcamp
	robot.respond(/bandcamp (.+)/i, function(response) {
		var band = response.match[1]
		var band = band.replace(/\s/g,'')
		response.reply("https://" + band + ".bandcamp.com/releases")
	})

	//tells you if it's free lunch monday at backstop
	robot.respond(/do i need to bring lunch today\?/i, function(response) {
		var dateObj = new Date()
		var day = dateObj.getDate()
		var weekday = dateObj.getDay()
		if (weekday === 1 && day <= 7) {
			response.reply("Nah, Backstop's got ya.")
		} else if (weekday === 1 && day > 7){
			response.reply("Maybe, but don't hold your breath.")
		} else if (weekday > 1 && weekday < 7){
			response.reply("Yeah, you should probably get on that. But there will probably be donuts.")
		} else {
			response.reply("Come on man, it's the weekend. Get off slack.")
		}
	})

	//sends pizza to a random user
	robot.respond(/send pizza/i, function(response) {
		var userIds = Object.keys(robot.brain.data.users);
		var randomUsername = robot.brain.data.users[userIds[Math.floor(Math.random() * userIds.length)]].name
		response.send("\@" + randomUsername + " http://a.fod4.com/misc/Internet%20Pizza.gif")
	})


}