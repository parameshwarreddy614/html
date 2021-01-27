var emp={
    name:"rajesh",
    place:"hyd",
    area:"madhapur",
    details:function(){
        console.log(this.name + "\t" +this.place +"\t" + this.area);
    }
}
emp.details();

var emp1={
    name:"apple",
    place:"j&k",
    area:"sik"
}
emp.details.call(emp1)