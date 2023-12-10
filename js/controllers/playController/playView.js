
import { div, p, img } from "../../libs/html.js";
import { CardView } from "../../views/cardView/cardView.js";
import { ViewForController } from "../../views/viewForController.js";




export class PlayView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
       

        this.playTittleContainer = div(this.elementContainer, {className:'playTittleContainer'})
        this.playLbl = p(this.playTittleContainer, {className:'playController_playLbl', innerHTML: 'PLAY'})
        let hudContainer2 = div(this.elementContainer, {className:'playController_hudContainer'})
        let hudContainer= div(this.elementContainer, {className:'playController_hudContainer2'})
       
       
        
        this.resetBtn = div(hudContainer,{className: 'gameResetBtn', innerHTML: 'RESET', onclick: this.onResetBtn.bind(this)});
        this.timeLbl = p(hudContainer2, {className:'playController_timeLbl'})
        this.movesLbl = p(hudContainer2, {className:'playController_movesLbl'})

       
        this.cardsContainer = div(this.elementContainer,{ className: 'playController_cardsContainer'})

        this.setStartPosition();
        this.moveIn();
    }

    onResetBtn(){
        const onResetBtnEvent = new CustomEvent("onResetBtnEvent",{
            bubbles: true,
            detail:null,
        });
        this.container.dispatchEvent(onResetBtnEvent);
        
    }
   

    updateHUD(moves, time){
        this.movesLbl.innerHTML =`MOVES: ${moves}`;
        this.timeLbl.innerHTML= `TIME: ${time}`;
        
    }

    showCards(cards){

    

        cards.forEach(card=>{
            let cardView = new CardView(this.cardsContainer, card);

        });
    }
    removeCards(){
        this.cardsContainer.innerHTML ='';
    }
}
