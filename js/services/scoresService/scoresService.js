import { Score } from "../../models/score.js";
import { Service } from "../service.js";

export class ScoresService extends Service{
    constructor(controller){
        super(controller);
    }
  
 getScores(baseURL) {
  // let url = `https://pablo-oviedo-memory-card-backend-39a1.vercel.app/scores`;
  // let url = `http://localhost:3000/scores`;
  let url = `${baseURL}scores`;

  fetch(url).then(response =>{
    response.json().then(data =>{
      let scores =[];
      data.forEach((scoreData,i) =>{
        let score = new Score(scoreData.clicks, scoreData.difficulty, scoreData.score, scoreData.time, scoreData.username);
         scores.push(score);
      });
      this.controller.receiveScores(scores);

    }).catch(error => {
        console.log('Error parsing scores:',error );
    });
  }).catch(error => {
        console.log('Error requesting scores:',error );
    });
  
        
  }
 

}
