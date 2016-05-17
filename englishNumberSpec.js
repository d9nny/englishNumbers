describe('englishNumber', function() {
  it('it converts a number to a grammatically-correct English phrase', function() {
    var numbers = [-3, 0, 7, 14, 25, 112, 469, 782, 999, 1000, 1005],
    		englishVersion = ["Please enter a number between 0 and 1000", 'zero', 'seven', 'fourteen', 'twenty-five', 'one hundred and twelve', 'four hundred and sixty-nine', 'seven hundred and eighty-two', 'nine hundred and ninety-nine', 'one thousand', "Please enter a number between 0 and 1000"];
    for(var i=0; i < numbers.length; i++) {
    	expect(englishNumber(numbers[i])).toEqual(englishVersion[i]);
    }
  });
});