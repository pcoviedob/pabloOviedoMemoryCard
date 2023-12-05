import { Score } from "../../models/score.js";
import { Service } from "../service.js";

export class ScoresService extends Service{
    constructor(controller){
        super(controller);
    }
  
 getScores() {
  let url = `https://pablo-oviedo-memory-card-backend-39a1.vercel.app/scores`;
  // let url = `http://localhost:3000/scores`;
  let request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = () => {
    console.log(request);
      let data = JSON.parse(request.response);

      let scores =[];
      data.forEach((scoreData,i )=> {
        let score = new Score(scoreData.clicks, scoreData.difficulty, scoreData.score, scoreData.time, scoreData.username);
        scores.push(score);
               
      });
      this.controller.receiveScores(scores); 
      
  }
  request.send();


}
}