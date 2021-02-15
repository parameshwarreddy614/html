/*

 Create an arrow function that takes username,password 
    as input values and checks whether the username is sai
    and password is sai, based on the logic, return the 
    result  i.e, boolean value.

*/
/*function validate(username="guest",password="guest"){
  
    if(username == "guest" && password == "guest"){
        console.log("guest login");
    }
    else
    {
        console.log("user login");
    }

}*/

validate("sai","sai");


var validate= (username,password) => username == "Sai" && password == "Sai";

console.log(validate("Sai123","Sai"));
