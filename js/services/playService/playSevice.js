import { Card } from "../../models/card.js";
import { Service } from "../service.js";

export class PlayService extends Service{
    constructor(controller){
        super(controller);
    }
  
  async getCards(difficulty, theme,baseURL) {
  // let url = `https://pablo-oviedo-memory-card-backend-39a1.vercel.app/cards/${difficulty}/${theme}`;
  // let url = `http://localhost:3000/cards/${difficulty}/${theme}`;
  let url = `${baseURL}cards/${difficulty}/${theme}`;

  fetch(url).then(response =>{
    response.json().then(data =>{
      let cards =[];
        data.cards.forEach((cardData,i )=> {
          let card = new Card(i,cardData.id, cardData.src, cardData.selected)
            cards.push(card);
  });
    this.controller.receiveCards(cards);

    }).catch(error => {
        console.log('Error parsing json:',error );
    });
  }).catch(error => {
        console.log('Error requesting Cards:',error );
    });

  }

   
async sendScore(baseURL,score){
  

  let url = `${baseURL}score`;
 
  let params = {
    method: "POST",
    headers: {
      "Content-Type":"application/json;charset=UTF-8"
    },
    body: JSON.stringify(score),
   
  };
fetch(url,params).then(response => {
  response.json().then(data => {
    console.log(data);
  }).catch(error =>{
    console.log(error);
  });
}).catch(error =>{
  console.log(error);
});

}
}