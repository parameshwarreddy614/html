

function f1(){
    var a=100; 
    if(a>10){
        let a=900; // block scoped 
        console.log(a); //
    }
    console.log(a); //
}
f1();

/*

function f1(){
     var a;
     a=100;
     if(a>10){
         a=900;
         console.log(a); // 900
     }
     console.log(a);// 900
    }
*/