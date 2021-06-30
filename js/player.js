class Player {


  constructor(){

  }

  //getCount is helping us read how many players are there
  getCount(){

    //This line stores the player count through value field on database
    var playerCountref = database.ref('playerCount') .on('value', function(data){
        playerCount = data.val();
    });
    
    
  }


  

  updateCount(count){

    database.ref('/').update({
        playerCount:count
        
    })


  }


  update(name){

    var playerindex = 'player'+ playerCount;
    database.ref(playerindex).set({
        name:name
    })
  }



}