class Form {


  constructor(){




  }



  display(){

    //createElement is a function to create text
    //createInput is a function to create a Input box
    //createButton creates an automatic button you can press

    var title = createElement("h2"); 
    title.html("Adrenaline");
    title.position(350,100);

    var name = createElement("h2"); 
    name.html("Playername");
    name.position(350,150);

    var input = createInput("");
    input.position(500, 170);


    var button = createButton("Click to play!")
    button.position(550, 200);

    var greetings = createElement("h2");
    

    button.mousePressed(function(){
      
      
      input.hide();
      button.hide();

      var name = input.value();
      
      player = new Player()
      playerCount +=1; 
      player.updateCount(playerCount);
      player.update(name);
      greetings.html("Welcome to the race!")
    greetings.position(430, 500);
      
       
    })
  
    
  }






}

