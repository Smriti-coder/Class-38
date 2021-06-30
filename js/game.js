class Game {

  constructor(){



  }


     //getState is helping us to read state of the game
  getState(){

    //this whole line is helping us refer the gameState field
    var gameStateref = database.ref('gameState') .on('value', function(data){
        gameState = data.val();
    });
    
    
  }


  

  update(state){

    database.ref('/').update({
        gameState:state
        
    })


  }





}