
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
        console.log(scores);
    }


}
