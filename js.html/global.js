var a=100; //global variable

function f1(){
     console.log("the value of a in f1 is "+a);
     a=300;
}
function f2(){
    console.log("the value of a in f2 is "+a);
    a=400;
}
function f3(){
    console.log("the value of a in f3 is "+a);
}
console.log(a); // 100
f1(); // 100
f2(); //300
f3(); //400

/*

  a-> 1000x -> 400

*/