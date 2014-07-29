$(document).ready(function(){

	var boxDiv = $('.box'); 

  	boxDiv.mouseenter(function() {
  		$(this).css('background-color', 'purple');
  		$(this).css('width', '100px');
	});
	boxDiv.click(function() {
  		$(this).css('background-color', 'green');
  		$(this).css('width', '200px');
	});

	$("#calculate-form").submit(function(){
		var numberOfBananas = $("#bananas-per-day").val();
		calculate(numberOfBananas);
		// I forgot the "return false" earlier -- if your browser was immediately reloading
		// the page and you couldn't see your results, that's why. Sorry!
		return false; 
	});

	$("#event-form").submit(function() {
		var eventType = $('#event-type').val();
		getEvents(eventType); 
		return false;
	});

});

function getEvents(eventType) {
	$.ajax({
  		url: "https://api.meetup.com/2/open_events",
  		data: {
  			state: "CO",
  			city: "Boulder",
  			country: "US",
  			zip: "80302",
  			text: eventType,
  			sign: true,
  			key: "5f59736c7011c4455a121355282"
  		},
  		type: "GET",
  		crossDomain: true,
  		dataType: 'jsonp',
  		success: function(data) {
  			console.log("It worked!");
  			console.log(data);

  			var events = data.results;
  			$('#events').html('');
  			for(var i = 0; i < events.length; i++) {
  				var meetup = events[i];
  				console.log(meetup);
  				$("#events").append('<h3 class="meetup-title">' + meetup.name + "</h3>");
  				$("#events").append("<div>" + meetup.description + "</div>");
  			}
  		},
  		error: function(data) {
  			console.log("Something went wrong.");
  		}
	});
}

function calculate(bananasPerDay) {
	var myAge = 33;
	var maxAge = 99;

	var yearsLeft = maxAge - myAge;
	var daysLeft = yearsLeft * 365;

	var bananasNeeded = bananasPerDay * daysLeft;
	var calculateDiv = $('#calculate');

	if(bananasNeeded > 50000) {
		calculateDiv.html('<p>Holy cannoli, that\'s a lot of bananas!</p>');
	} else if(bananasNeeded > 20000) {
		calculateDiv.html('<p>Only moderate bananas required</p>');
	} else {
		calculateDiv.html('<p>Well, you probably should take a multi-vitamin</p>');
	}

	calculateDiv.prepend('<p>You need this many bananas: ' + bananasNeeded + '</p>');
}

function favoriteThings() {
	var things = ['Rachel', 'Cojo', 'Deb', 'Valerie', 'Pippa', 25];
	var thingsDescription = 'These are my favorite things: ';
	for(var i = 0; i < things.length; i++) {
		thingsDescription = thingsDescription + things[i] + ' ';
		console.log(things[i]);
	}
	console.log(thingsDescription);
}


function myFriends() {
	var friends = [
		{
			name: 'Rachel',
			hairColor: 'brown'
		},
		{
			name: 'Cojo',
			hairColor: 'blonde'
		},
		{
			name: 'Craig',
			hairColor: 'red'
		}
	];
	for(var i = 0; i < friends.length; i++) {
		var friend = friends[i];
		describeFriend(friend);
	}
}

function describeFriend(friend) {
	console.log('I have a friend named: ' + friend.name + ' whose hair color is '
			+ friend.hairColor);
}











