
import { div, p, img } from "../../libs/html.js";
import { CardView } from "../../views/cardView/cardView.js";
import { ViewForController } from "../../views/viewForController.js";




export class PlayView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'loginController';
        
        let mainHudContainer = div(this.elementContainer, {className:'playController_mainHudContainer'})
        let hudContainer2= div(mainHudContainer, {className:'playController_hudContainer2'})
        let hudContainer = div(mainHudContainer, {className:'playController_hudContainer'})
        this.timeLbl = p(hudContainer, {className:'playController_timeLbl'})
        this.playLbl = p(hudContainer, {className:'playController_playLbl', innerHTML: 'PLAY'})
        this.resetBtn = div(hudContainer,{className: 'gameResetBtn', innerHTML: 'RESET', onclick: this.onResetBtn.bind(this)});
        
        this.cardsLbl = p(hudContainer2, {className:'playController_cardsLbl'})
        this.movesLbl = p(hudContainer2, {className:'playController_movesLbl'})

       
        this.cardsContainer = img(this.elementContainer,{ className: 'playController_cardsContainer'})

        this.setStartPosition();
        this.moveIn();
    }

onResetBtn(){
   
}
updateHUD(moves, time){
    this.movesLbl.innerHTML =`MOVES: ${moves}`;
    this.timeLbl.innerHTML= `00:00: ${time}`;
    
}

showCards(cards){

    cards.forEach(card =>{
        let cardView = new CardView(this.cardsContainer, card);

    })
}

// showCards(cards) {
//         // Verificar que 'cards' no sea undefined y sea un arreglo antes de intentar iterar sobre él
//         if (cards && Array.isArray(cards)) {
//             cards.forEach(card => {
//                 let cardView = new CardView(this.cardsContainer, card);
//                 // Aquí se puede agregar lógica adicional si es necesario.
//             });
//         } else {
//             console.error("Error: 'cards' no es un arreglo válido.");
//         }
//     }

}