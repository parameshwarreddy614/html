class Test{
    a=10;
    b=20;
    static x=90;
    static y=900;

    m1(){
        console.log("this is m1()");
    }

    static m2(){
        console.log("this is m2()");
    }
}
var test= new Test();

console.log(test.a);
console.log(test.b);
test.m1();
Test.m2();
console.log(Test.x);
console.log(Test.y);

