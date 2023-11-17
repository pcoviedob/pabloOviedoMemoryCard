
import { PlayService } from "../../services/playService/playSevice.js";
import { Controller } from "../controller.js";
import { PlayView } from "./playView.js";



export class PlayController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new PlayView(this, parent);
        this.service = new PlayService(this);
        this.view.updateHUD(0,0);
        // this.service.getCards();
        // this.cards= this.service.getCards();
        // this.view.showCards(this.cards);
        
        this.view.container.addEventListener('onCardSelected', this.onCardSelected.bind(this));

        this.cardView1= null;
        this.cardView2= null;
        this.showingTimer = null;




    }


 getCards() {
        return this.service.getCards();
    }
receiveCards(cards){
    this.cards = cards;
    this.view.showCards(this.cards);
}

onCardSelected(event){
    if(this.cardView1 != null && this.cardView2 != null)return;
    let  cardView = event.detail.cardView;

    console.log(event.detail.cardView)

    

   

    if(this.cardView1 === null ){
        this.cardView1 = cardView;
        this.cardView1.show();

    
    // }else if(this.cardView2 === null){
    //     this.cardView2 = cardView;
    //     this.cardView2.show();

    // }

    }else if(this.cardView2 === null && this.cardView1.card.identifier !== cardView.card.identifier){
        this.cardView2 = cardView;
        this.cardView2.show();

    }else{
        return;
    }

    if(this.cardView1 != null && this.cardView2 != null){
        this.checkCardViews()
    }


   

}
checkCardViews(){
    if(this.cardView1.card.id === this.cardView2.card.id ){
       
        this.clearCardView();


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
}
