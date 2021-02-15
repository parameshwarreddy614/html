var str="hellob1";

var pattern=/[^a-z]/;

console.log(pattern.test(str));


var str="hello h";
var pattern=/l/g;
console.log(str.match(pattern));