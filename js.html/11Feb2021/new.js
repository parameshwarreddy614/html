function f1(a,b,...restparams){
    console.log(a,b);
   console.log(restparams);
  
   restparams.forEach(function(e){
       console.log(e);
   })
  }
  
  f1(10,20,40,50);
 