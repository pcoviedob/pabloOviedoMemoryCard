import { Card } from "../../models/card.js";
import { Service } from "../service.js";

export class PlayService extends Service{
    constructor(controller){
        super(controller);
    }
  
 async getCards(difficulty, theme) {
  let url = `https://pablo-oviedo-memory-card-backend-lwiyy42z8.vercel.app/${difficulty}/${theme}`;
  // let url = `http://localhost:3000/cards/${difficulty}/${theme}`
  let request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = () => {
    // console.log(request);
    if (request.status === 200) {
      let data = JSON.parse(request.responseText);

      let cards =[];
      data.cards.forEach((cardData,i )=> {
        let card = new Card(i,cardData.id, cardData.src, cardData.selected)
        cards.push(card)
               
      });
      this.controller.receiveCards(cards);
    } else {
      console.error('Error al cargar el archivo JSON');
    }
  };
  request.send();
}

}