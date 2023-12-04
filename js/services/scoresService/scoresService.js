import { Service } from "../service";

export class ScoresService extends Service{
    constructor(controller){
        super(controller);
    }
  
 getScores() {
  // let url = `https://pablo-oviedo-memory-card-backend-39a1.vercel.app/scores`;
  let url = `http://localhost:3000/scores`;
  let request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = () => {
    // console.log(request);
    if (request.status === 200) {
      let data = JSON.parse(request.responseText);

    //   let cards =[];
    //   data.cards.forEach((cardData,i )=> {
    //     let card = new Card(i,cardData.id, cardData.src, cardData.selected)
    //     cards.push(card)
               
    //   });
    //   this.controller.receiveCards(cards);
    // } else {
    //   console.error('Error al cargar el archivo JSON');
    // }
  };
  request.send();
}

}
}