	//
	// Program: Code Central Countdown Timer
	//
	// Programmed by: Samuel Willowvayle Cornelius
	// Appended by: Mikian Musser github.com/mm909
	//
	// Last Edited: 08/17/2017
	//
	// Purpose: This program is designed to be a tab opened in the main computer browser.
	// 	The tab will hold multiple timers to help keep track of the centers many switch
	// 	off points. An alarm for snack time, end of snack time, 5 minute warning,
	// 	end of hour, and end of the day.


	// Audio alarm variable declarations
	var snackAlarm = new Audio('timer/sounds/SnackAlarm.wav'); // Nyan Cat
	var endOfSnackAlarm = new Audio('timer/sounds/Megalovania(endOfSnack).wav'); // Undertale
	var almostOverAlarm = new Audio('timer/sounds/PokemonThemeSong(almostEndOfSession).wav'); // Pokemon
	var endOfSessionAlarm = new Audio('timer/sounds/FlyAway(endOfSession).wav'); // Fly Away Fat Rat?

	// Array to randomize the final song
	var ran = 0; // Number that will be set randomly to an index to play
	var closingTimeSrcs = [ // array of audio sources
	  "timer/sounds/ClosingTime.wav",
	  "timer/sounds/Fanfare(Closing).wav",
	  "timer/sounds/SoLongFarewell(Closing).wav",
	  "timer/sounds/SuperMarioWorldLevels(Closing).wav",
	  "timer/sounds/AllStar(Closing).mp3"
	];
	var closingTime = new Audio("timer/sounds/ClosingTime.wav"); // Actual Audio file with default location


	// Set the time we're counting down to
	var countDownDate = new Date();
	// Check whether the day is Saturday or not, hours are different on Saturdays
	if (countDownDate.getDay() == 6) {
	  // Alarm ends at 2 PM
	  countDownDate.setHours(14);
	} else if (countDownDate.getDay() == 0) {
	  // Alarm end at 3 PM
	  countDownDate.setHours(15);
	} else {
	  // Alarm ends at 7 PM
	  countDownDate.setHours(19);
	}

	// Set the minute and seconds to 0
	countDownDate.setMinutes(0);
	countDownDate.setSeconds(0);

	// Update the count down every 1 second
	var x = setInterval(function() {

	  // Get todays time
	  var now = new Date().getTime();

	  // Find the distance between now and the end of the centers hours
	  var distance = countDownDate - now;

	  // Time calculations for hours, minutes and seconds
	  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	  // Display the result in the element with id="timer"
	  // document.getElemsounds/entById("timer").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

	  // Various triggers for the many alarms that will be going off...

	  // Alarm for snack time
	  if (minutes == 30 && seconds == 0) {
	    snackAlarm.play();
	  }

	  // Alarm for end of snack time
	  if (minutes == 23 && seconds == 0) {
	    endOfSnackAlarm.play();
	  }

	  // Alarm for 5 minute warning
	  if (minutes == 5 && seconds == 0) {
	    almostOverAlarm.play();
	  }

	  // Alarm for end of hour!!! Make sure that it's not the end of the center
	  if (hours != 0 && minutes == 2 && seconds == 0) {
	    endOfSessionAlarm.play();
	  }

	  // If the count down is finished, write some text
	  if (distance <= 0) {
	    clearInterval(x);

	    // Set the random variable to a whole number between 0 and the total amount of end song options
	    ran = Math.floor(Math.random() * closingTimeSrcs.length);

	    // Play it!
	    closingTime.src = closingTimeSrcs[ran]; // Change the source
	    closingTime.play();


	    // document.getElementById("timer").innerHTML = "Thank you Code Central and good night!!!";
	  }
	}, 1000);