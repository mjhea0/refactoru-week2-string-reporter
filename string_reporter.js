
var string_reporter = function(word) {

	alert(
	"Your entered " + word + "\n" +
	"There are " + word.length + " characters in the word.\n" +
	"The third character is " + word[2] + "\n" +
	"Lowercase: " + word.toLowerCase() + "\n" +
	"Uppercase: " + word.toUpperCase() + "\n" +
	"Example: I have wanted a " + word + " since I was a little boy.\n" +
	"Subword: " + word.substring(1,4)
	);

};


var word = prompt("Enter a word. Any word.");

string_reporter(word)
