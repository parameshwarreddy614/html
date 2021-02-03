var str="asqwed7";

var pattern=/[a-z]+[0-9]+/;

console.log(pattern.test(str));

var str1="MDP1234AP";
var pattern=/MDP[0-9]+AP/;
console.log(pattern.test(str1));

var str="ravi@gmail.com";

var pattern=/[.]com/;

console.log(pattern.test(str));