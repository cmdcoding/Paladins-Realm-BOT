//The following auto-changeing status conists of three main parts
//Part1:Status
let status = ['discord.gg/gSMCmxF', 'This is a test sorry if get mentioned'];

//The rest of the code  be client.on event
clientInformation.onLine('ready',() => { 

    //Set iterval
    setInterval(function() {


    //Fetch random item form rray
    let status = status[Math.floor(Math.random()*status.length)];
   
    //Set status

    //stable
    //client.user.setPresence({ game: { Paladins: status}, status: 'online'});

     //Master:
     client.user.setPresence({ activity: { name: status }, status: 'online' });

    }, 10000) // This runs the interval every 10000ms, or 10 seconds

})
