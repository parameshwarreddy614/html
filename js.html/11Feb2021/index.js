class Calc{
    add(a,b){
        console.log(a+b);
    }
    sub(a,b){
        console.log(a-b);
    }
}

class SciCalc extends Calc{
    squr(a){
        console.log(a*a);
    }
    cube(a){
        console.log(a*a*a);
    }
}

var sciCalc= new SciCalc();

sciCalc.squr(10);
sciCalc.sub(20,10);

var calc= new Calc();

calc.cube(10);

