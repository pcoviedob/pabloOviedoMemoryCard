
import { Score } from "../../models/score.js";
import { PlayService } from "../../services/playService/playSevice.js";
import { Controller } from "../controller.js";
import { PlayView } from "./playView.js";



export class PlayController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new PlayView(this, parent);
        this.service = new PlayService(this);
       
       
        this.view.container.addEventListener('onCardSelected', this.onCardSelected.bind(this));
        this.view.container.addEventListener('onResetBtnEvent', this.resetGame.bind(this));
        this.gameComplete= false;
        this.cards = null;
        this.cardView1= null;
        this.cardView2= null;
        this.showingTimer = null;
        this.playingTimer = null;
        this.clicksCounter =0;
        this.timeCounter= 0;
        this.updateHUD();
        this.playingTimer = window.setInterval(this.updateTimeCounter.bind(this),1000);
    }


 getCards() {
        return this.service.getCards(this.appManager.getDifficulty(), this.appManager.getTheme(), this.appManager.getBaseURL());
    }
receiveCards(cards){
    this.cards = cards;
    this.view.showCards(this.cards);
     this.timeCounter = 0;
    this.clicksCounter =0;
    window.clearInterval(this.playingTimer);
    this.playingTimer=null;
    this.playingTimer = window.setInterval(this.updateTimeCounter.bind(this),1000);
}



onCardSelected(event){

    if(this.gameComplete)return;
    
    if(this.cardView1 != null && this.cardView2 != null)return;
    let  cardView = event.detail.cardView;
   
    if(this.cardView1 === null ){
     
        this.cardView1 = cardView;

       
        this.cardView1.card.selected = true;


          console.log("selected", this.cardView1.card.selected)
         
        this.cardView1.show();
        this.clicksCounter += 1;
        this.updateHUD();
          

    }else if(this.cardView2 === null && this.cardView1.card.identifier !== cardView.card.identifier){
        this.cardView2 = cardView;
         this.cardView1.card.selected = true;
      
        this.cardView2.show();
        this.clicksCounter += 1;
        this.updateHUD();
     
}
        


    if(this.cardView1 != null && this.cardView2 != null){
        this.checkCardViews()
    }


   

}




checkCardViews(){
    if(this.cardView1.card.id === this.cardView2.card.id ){
        this.cardView1.discovered();
        this.cardView2.discovered();
        this.clearCardView();
        this.isGameComplete();
        this.gameComplete= this.isGameComplete();
        if(this.isGameComplete()){
            console.log("GAME COMPLETED")
            window.clearInterval(this.playingTimer);
            this.playingTimer=null;
            let value = this.clicksCounter + this.timeCounter;
            let score = new Score(this.clicksCounter, this.appManager.getDifficulty(), value, this.timeCounter, this.appManager.getUsername());
            this.service.sendScore(score);
            

        }

    }else{

        this.showingTimer = window.setTimeout(this.hideCardDismatch.bind(this),1000);
      
    }
}
hideCardDismatch(){
    window.clearTimeout(this.showingTimer);
    this.showingTimer = null;
    this.cardView1.hide();
    this.cardView2.hide();
    this.clearCardView();


    
}
clearCardView(){
    this.cardView1=null;
    this.cardView2=null;
}

updateHUD(){
    this.view.updateHUD(this.clicksCounter, this.timeCounter);
}
updateTimeCounter(){
    this.timeCounter += 1;
    this.updateHUD();
}

isGameComplete(){
    for (let  i = 0; i< this.cards.length; i++){
        if(!this.cards[i].discovered){
            return false;
        }
        
    }
 return true;
}

resetGame(){
    this.cardView1 = null;
    this.cardView2 = null;
    this.gameComplete = false;
    this.timeCounter = 0;
    this.clicksCounter =0;
    window.clearInterval(this.playingTimer);
    this.playingTimer=null;
    this.showingTimer = null;
    this.updateHUD();
    this.view.removeCards();
    this.getCards(this.appManager.getDifficulty(), this.appManager.getTheme(), this.appManager.getBaseURL());
    

}
}