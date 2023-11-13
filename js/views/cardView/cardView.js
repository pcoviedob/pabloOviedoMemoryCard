import { View } from "../view.js";

import { img } from "../../libs/html.js";


export class CardView extends View{
    constructor(parent, card){
        super(parent)
        this.card = card;
        this.container.className = 'cardView_normal';
        
        // this.container.classList.add('cardView_normal');
        // this.imgElement = img(this.container, { src: this.card.src, className: 'cardView_img' });
       
       
        this.container.onclick = this.onCardSelected.bind(this);

    }

    show(){
        // this.container.classList.add('cardView_show');
        this.imgElement = img(this.container, { src: this.card.src, className: 'cardView_img' });
       
    }
    // discovered(){
        //   this.imgElement = img(this.container, { src: this.card.src, className: 'cardView_img' });
       
        // this.container.classList.remove('cardView_show');
        // this.container.classList.add('cardView_discovered');

    // }
    hide(){
        this.container.innerHTML = '';
        // this.container.classList.remove('cardView_show');
        // this.container.classList.remove('cardView_discovered');
        //  this.imgElement2 = img(this.container, { src:'assets/wood.jpg', className: 'cardView_hidden' });
    }

    onCardSelected(){
       const onCardSelectedEvent = new CustomEvent("onCardSelected",{
        bubbles: true,
        detail:{ cardView: this},
       });
       this.container.dispatchEvent(onCardSelectedEvent);
    }
}

