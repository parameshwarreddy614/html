
var employees=[
    {
       name:"ravi",
       currentCTC:"4.5",
       role:"Software engineer",
       newRole: "Senior Software Engineer",
       hike:"10%",
       newCTC: "5.5",
       reportingManager:"raghav"
    },
    {
          name:"kiran",
          currentCTC:"7.5",
          role:"Software engineer",
          newRole: "Senior Software Engineer",
          hike:"10%",
          newCTC: "9.5",
          reportingManager:"anitha"
       },
       {
          name:"krishna",
          currentCTC:"14.5",
          role:"Software engineer",
          newRole: "tehnical manager",
          hike:"10%",
          newCTC: "15.5",
          reportingManager:"madhhu"
       }
];

for(var i=0;i<employees.length;i++){

    console.log(`
    
    
           Dear ${employees[i].name},
           
            Greetings from XYZ Company,

            Your current ctc is  ${employees[i].currentCTC} and you have got 
            hike of ${employees[i].hike} and you new ctc will be 
            ${employees[i].newCTC} with new role ${employees[i].newRole}


            Thanks,
            ${employees[i].reportingManager}
    
    `)

}