var englishNumber = function(number) {
	var   ones = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
  			tens = ["ten", "twenty", "thirty", "fory", "fifty", "sixty", "seventy", "eighty", "ninety"],
  			teens = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

  function calculateHundreds(number) {
    if (number > 99) {
      return ones[Math.floor(number/100) - 1] + ' hundred and ' + calculateTens(number % 100);
    } else {
      return calculateTens(number);
    }
  }

  function calculateTens(number) {
    if (number < 10) {
      return ones[number - 1];
    } else if (number < 20) {
      return teens[Math.floor(number % 10) - 1];
    } else {
      return tens[Math.floor(number/10) - 1] + '-' + ones[number % 10 - 1];
    }
  }

  if (number === 1000) {
    return 'one thousand';
  }
  else if (number === 0) {
  	return "zero";
  }
  else if (number < 0 || number > 1000) {
    return "Please enter a number between 0 and 1000";
  }
  else {
  	return calculateHundreds(number);
  }
}