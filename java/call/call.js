var employee={
    name:"ravi",
    address:"hyd",
    eid:101,
    details: function(){
        console.log(this.name +"\t" + this.address);
    }
}
employee.details();

var emp={
    name:"ramu",
    address:"sec",
    eid:1001,
}
var emp2={
    name:"nit",
    address:"srd",
}
employee.details.call(emp);

employee.details.call(emp2);