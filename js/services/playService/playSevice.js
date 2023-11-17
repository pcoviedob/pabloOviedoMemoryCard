import { Card } from "../../models/card.js";
import { Service } from "../service.js";

export class PlayService extends Service{
    constructor(controller){
        super(controller);
    }


   



  // async getCards() {
  // let request = new XMLHttpRequest();
  // request.open('GET', '../js/services/playService/cards.json');
  // request.onload = () => {
  //   if (request.status === 200) {
  //     let data = JSON.parse(request.responseText);
  //     this.controller.receiveCards(data.cards);
  //   } else {
  //     console.error('Error al cargar el archivo JSON');
  //   }
  // };
  // request.send();
  // }

 async getCards() {
  let request = new XMLHttpRequest();
  request.open('GET', '../js/services/playService/cards.json');
  request.onload = () => {
    if (request.status === 200) {
      let data = JSON.parse(request.responseText);

      let cards =[];
      data.cards.forEach((cardData,i )=> {
        let card = new Card(i,cardData.id, cardData.src)
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