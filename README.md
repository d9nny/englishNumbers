English Number
===============

Task
-----

Given any number between 0 and 1,000, write a program which shows the grammatically-correct English phrase for this number (e.g. given 111 it shows "one hundred and eleven", given 21 it shows "twenty-one"). 

Installation
------------

Choose folder to clone project into.

```sh
$ git clone https://github.com/d9nny/englishNumbers
```
To Run:

Copy and paste the code from englishNumber.js into a browser console, press 'enter'. Then write 'englishNumber(anyNumberYouChoose)', press 'enter'.
Testing
-------

To run tests, open specRunner.html in your browser and the test should automatically run.

Or in the console use 

```sh
for(var i=0; i < 1001; i++) { 
  console.log(englishNumber(i));
}
```
to check all numbers between 0 and 1000.
