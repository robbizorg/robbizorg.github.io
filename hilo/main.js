$(document).ready(function() {
	function AI(secretNum) {
		this.min = 1;
		this.max = 100;
		var secret = secretNum;

		function nextMove() {
			console.log("PreChange: ");
			console.log(this.max);
			console.log(this.min);

			var guess = Math.floor((Math.random() * this.max) + this.min);

			console.log("Computer Debug");
			console.log(guess);
			if (guess == secret) {
				return "Computer's Right! You lose!";
			}
			if (guess > secret) {
				this.max = guess;
				console.log("Max: " + this.max);
				return "Computer guessed too High, being " + (this.max - secret) + " off from being right";
			} else {
				this.min = guess;
				console.log("Min: " + this.min);
				return "Computer guessed too Low, being "  + (secret - this.min) + " off from being right"
			}

		}

		return {
			nextMove: nextMove,
			min: this.min,
			max: this.max
		}
	}

	var secret = Math.floor((Math.random() * 100) + 1); 
	var chris = AI(secret); // Generating the AI

	$("#submit").click(function() {
		var player = $("#playerInp").val();
		if (player == secret) {
			$("#playerOut").text("You guessed the Number and Beat the Computer! Congrats!");
		} else {
			if (player < secret) {
				$("#playerOut").text("Your guess was too low");
				$("#compOut").text(chris.nextMove());
			} else {
				$("#playerOut").text("Your guess was too high");
				$("#compOut").text(chris.nextMove());
			}
		}
	});
});