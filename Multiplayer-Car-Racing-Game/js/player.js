class Player {
    constructor(){
      // adding the properties to the player
      this.index = null;
      this.distance = 0;
      this.name = null;
    }
  // to read the value from the database for checking player count
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  // to update the player count value
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  // to update properties of each player into data base
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
  // to read properties of all players from database
  // static is keyword in javascript which allows you to use function without objects
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
  }