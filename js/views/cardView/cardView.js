import { View } from "../view.js";

export class CardView extends View{
    constructor(parent, card){
        super(parent)
        this.card = card;
        this.container.className = 'cardView';
        this.container.img =this.card.src;
        // this.container.onclick = onCardSelected.bind(this);

    }

    onCardSelected(){
        // const onCardSetectedEvent 
    }
}