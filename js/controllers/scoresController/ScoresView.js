
import { div, p } from "../../libs/html.js";
import { ViewForController } from "../../views/viewForController.js";



export class ScoresView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'loginController';

        // this.scoresBtn = div(this.elementContainer,{className: 'GameBtn', innerHTML: 'SCORES', onclick: this.onScoresBtn.bind(this)});
        this.setStartPosition();
        this.moveIn();

        
        // this.playTittleContainer = div(this.elementContainer, {className:'playTittleContainer'})
         this.scoreLbl = p(this.elementContainer, {className:'scoreController_scoreLbl', innerHTML: 'SCORES'})
         let scoreContainer1 = div(this.elementContainer, {className:'playController_hudContainer'})
         
         let scoreContainer2 = div(this.elementContainer, {className:'playController_hudContainer'})
         let scoreContainer3 = div(this.elementContainer, {className:'playController_hudContainer'})
        let hudContainer= div(this.elementContainer, {className:'playController_hudContainer2'})
    }

// onScoresBtn(){
    // console.log()
// }


}