
import { PlayService } from "../../services/playService/playSevice.js";
import { Controller } from "../controller.js";
import { PlayView } from "./playView.js";



export class PlayController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new PlayView(this, parent);
        this.service = new PlayService(this);
        this.view.updateHUD(0,0);
        // this.cards = [];
        // this.service.getCards();
        // this.cards= this.service.getCards();
        // this.view.showCards(this.cards);
        // this.service.getCards().then(cards => {
        // this.cards = cards;
        // this.view.showCards(this.cards);
        // });

//         this.service.getCards().then(cards => {
//         this.cards = cards;
//         this.view.showCards(this.cards);
//     	}).catch(error => {
//     console.error(error);
// });


    }

// receiveCards(cards){
//     this.cards = cards;
//     this.view.showCards(this.cards);
// }
 getCards() {
        return this.service.getCards();
    }
receiveCards(cards){
    this.cards = cards;
    this.view.showCards(this.cards);
}


}
