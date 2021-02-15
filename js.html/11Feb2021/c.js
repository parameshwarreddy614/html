class Customer{
    name;
    address;
    age;
    adhaarCard;
     createAccount(name,address,age,adhaarCard){

        this.name=name;
        this.address=address;
        this.adhaarCard=adhaarCard;
        this.age=age;
     }
}

var customer= new Customer();
customer.createAccount("ravi","hyd",21,9010101);
console.log(customer);