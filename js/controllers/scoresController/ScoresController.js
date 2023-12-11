
import { ScoresService } from "../../services/scoresService/scoresService.js";
import { Controller } from "../controller.js";
import { ScoresView } from "./scoresView.js";



export class ScoresController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new ScoresView(this, parent);
         this.service = new ScoresService(this);
         this.service.getScores(this.appManager.getBaseURL());
    }
    receiveScores(scores){

        const easyList = [];
        const mediumList = [];
        const hardList = [];

 

        scores.forEach(score => {
        const difficulty = parseInt(score.difficulty);
        
            if (difficulty === 4) {
            
                easyList.push({ ...score, difficulty: 'EASY' });
                
            } else if (difficulty === 8) {
          
                 mediumList.push({ ...score, difficulty: 'MEDIUM' });
           
            } else if (difficulty === 12) {
           
                hardList.push({ ...score, difficulty: 'HARD' });
                

            }
            
           
        });
        
        this.view.orderScores(scores);
     
        // console.log(scores);
        // View show scores
    }

 

}
