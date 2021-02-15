class Bank{
    username;
    password;
    login(username, password){
         if(username == "abc" && password =="abc"){
            console.log("logged in")
         }
         else
         {
             console.log("username/password incorrect");
         }
    }
}

var customer1=new Bank();
customer1.login("abc","ab")
