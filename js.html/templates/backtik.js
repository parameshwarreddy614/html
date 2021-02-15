var clients=[
      {
            name: "First",
             company: "First Company", 
            location:"First Location",
      },
      {
            name: "Second",
             company: "Second Company", 
            location:"Second Location",
      },
      {
            name: "Third",
             company: "Third Company", 
            location:"Third Location",
      },
      {
            name: "Fourth",
             company: "Fourth Company", 
            location:"Fourth Location",
      }

]

var ceo="Ravi";

for(var i=0;i<clients.length;i++){

      var client=clients[i];

      console.log(`
      
      
        Hello ${client.name},

        We are visiting your ${client.company} to the location ${client.location} for 
        project discussion.

        Thanks,
        ${ceo}
      
      `)
}