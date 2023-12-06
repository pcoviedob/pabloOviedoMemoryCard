
import { div, p } from "../../libs/html.js";
import { ViewForController } from "../../views/viewForController.js";



export class ScoresView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'loginController';

        
        this.setStartPosition();
        this.moveIn();

        
        this.scoreLbl = p(this.elementContainer, {className:'scoreController_scoreLbl', innerHTML: 'SCORES'});
         this.scoreHardContainer= div(this.elementContainer, {className:'scoreController_scoreHardContainer '});
         this.difficultyHardLbl = p(this.scoreHardContainer, {className:'scoreController_difficultyHardLbl', innerHTML: 'HARD:'});
         this.scoreHardLbl = p(this.scoreHardContainer, {className:'scoreController_scoreHardLbl', innerHTML: 'SCORE:'});
         this.timeHardLbl = p(this.scoreHardContainer, {className:'scoreController_timeHardLbl', innerHTML: 'TIME:'});
         this.usernameHardLbl = p(this.scoreHardContainer, {className:'scoreController_usernameHardLbl', innerHTML: 'Juan:'});
         this.movesHardLbl = p(this.scoreHardContainer, {className:'scoreController_movesHardLbl', innerHTML: 'MOVES:'});

         
         this.scoreMediumContainer= div(this.elementContainer, {className:'scoreController_scoreMediumContainer '});
         
        this.scoreMediumLbl = p(this.scoreMediumContainer, {className:'scoreController_scoreMediumLbl', innerHTML: 'SCORE:'});
         this.difficultyMediumLbl = p(this.scoreMediumContainer, {className:'scoreController_difficultyMediumLbl', innerHTML: 'MEDIUM:'});
         this.timeMediumLbl = p(this.scoreMediumContainer, {className:'scoreController_timeMediumLbl', innerHTML: 'TIME:'});
         this.usernameMediumLbl = p(this.scoreMediumContainer, {className:'scoreController_usernameMediumLbl', innerHTML: 'Juan:'});
         this.movesMediumLbl = p(this.scoreMediumContainer, {className:'scoreController_movesMediumLbl', innerHTML: 'MOVES:'});

          
         this.scoreEasyContainer= div(this.elementContainer, {className:'scoreController_scoreEasyContainer '});
         this.difficultyEasyLbl = p(this.scoreEasyContainer, {className:'scoreController_difficultyEasyLbl', innerHTML: 'EASY:'});
         this.scoreEasyLbl = p(this.scoreEasyContainer, {className:'scoreController_scoreEasyLbl', innerHTML: 'SCORE:'});
         this.timeEasyLbl = p(this.scoreEasyContainer, {className:'scoreController_timeEasyLbl', innerHTML: 'TIME:'});
         this.usernameEasyLbl = p(this.scoreEasyContainer, {className:'scoreController_usernameEasyLbl', innerHTML: 'Juan:'});
         this.movesEasyLbl = p(this.scoreEasyContainer, {className:'scoreController_movesEasyLbl', innerHTML: 'MOVES:'});


        
    }



}