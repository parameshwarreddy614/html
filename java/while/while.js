var messages=[
    { 
        sender: "ravi",
        message: "hello",
        time: "10:20"

    },
    { 
        sender: "ramu",
        message: "how",
        time: "10:40"

    },
    { 
        sender: "kittu",
        message: "sorry",
        time: "10:10"

    },
    { 
        sender: "rahul",
        message: "happy new year",
        time: "12:20"

    },
    { 
        sender: "ramesh",
        message: "hello",
        time:   " 11:20 "

    },
 ]
 var index=0;
 

 while(index < messages.length){
    
    var currentMessage=messages[index];

    cosole.log(currentMessage.sender + ":    " +currentMessage.message +"   " +currentMessage.time ); 

        index++;

}