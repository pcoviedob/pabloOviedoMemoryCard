
import { div, p, img } from "../../libs/html.js";
import { CardView } from "../../views/cardView/cardView.js";
import { ViewForController } from "../../views/viewForController.js";




export class PlayView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'playView_container';

        
        let mainHudContainer = div(this.elementContainer, {className:'playController_mainHudContainer'})
        let hudContainer = div(mainHudContainer, {className:'playController_hudContainer'})
        let hudContainer2= div(mainHudContainer, {className:'playController_hudContainer2'})
        let divTittle= div(mainHudContainer, {className:'playController_divTittle'})

        this.tittle = p(divTittle, {className:'playView_tittle',innerHTML: 'MEDIUM'})
        this.timeLbl = p(hudContainer, {className:'playController_timeLbl'})
        this.playLbl = p(hudContainer, {className:'playController_playLbl', innerHTML: 'PLAY'})
        this.resetBtn = div(hudContainer,{className: 'gameResetBtn', innerHTML: 'RESET', onclick: this.onResetBtn.bind(this)});
        
        this.cardsLbl = p(hudContainer2, {className:'playController_cardsLbl',innerHTML: 'CARDS:'})
        this.movesLbl = p(hudContainer2, {className:'playController_movesLbl'})

       
        this.cardsContainer = div(this.elementContainer,{ className: 'playController_cardsContainer'})

        this.setStartPosition();
        this.moveIn();
    }

onResetBtn(){
   
}
updateHUD(moves, time){
    this.movesLbl.innerHTML =`MOVES: ${moves}`;
    this.timeLbl.innerHTML= `00:00 ${time}`;
    
}

showCards(cards){

  

    cards.forEach(card=>{
        let cardView = new CardView(this.cardsContainer, card);

    })
}

}