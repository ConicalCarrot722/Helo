class Player{
    constructor(){
this.name=null;
this.distance=0;
this.index=null;
this.rank=null;
    }
    getCount(){
        var playerref=database.ref("playerCount") 
        playerref.on("value",(data)=>{

        
            playerCount=data.val()
        })
        }
        updateCount(Count){
            database.ref("/").update({
                playerCount:Count
            })
        }
        update(){
            var playerindex="players/player"+this.index
            database.ref(playerindex).set({
                name:this.name,distance:this.distance
            })
        }
        static getInfo(){
            var playerref=database.ref("players")
            playerref.on("value",(data)=>{
                playerDetail=data.val()
            })
        }
       getRank(){
           database.ref("carRank").on("value",(data)=>{
               this.rank=data.val()
           })
           
            
        }
        static updateRank(rank){
            database.ref("/").update({
            carRank:rank    
            })
        }
        deletePlayer(){
            database.ref("/").update({
               players:"" 
            })
        }
}