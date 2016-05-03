module.exports = function(robot) {

	// robot.hear() will have the robot listen in on any channel it's in
	robot.hear(/badger/i, function(response) {
		response.send("Badgers? BADGERS? WE DON'T NEED NO STINKIN BADGERS")
	})

	robot.hear(/i like (.+)/i, function(response) {
		var like = response.match[1]
		// response.reply() will have the robot at-mention you when it responds
		response.reply('I also like ' + like)
	})

	// robot.respond() means the robot will only reply when at-mentioned or DMed
	robot.respond(/who should i call on today\?/i, function(response) {
		var user = robot.brain.userForName('gordo')
		response.reply('Call on ' + user.real_name + '!')
	})

	// gives you a picture of a dang pizza
	robot.hear(/gimme pizza/i, function(response) {
		response.send("https://media.giphy.com/media/uN1u4nLw0HIe4/giphy.gif")
	})

	robot.hear(/bandcamp (.+)/i, function(response) {
		var band = response.match[1]
		response.reply("https://" + band + "bandcamp.com/releases")
	})
}