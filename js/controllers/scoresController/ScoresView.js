
import { div, p } from "../../libs/html.js";
// import { ScoreView } from "../../views/cardView/scoreView.js";
import { ViewForController } from "../../views/viewForController.js";



export class ScoresView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'loginController';

        
        this.setStartPosition();
        this.moveIn();

        
        this.scoreLbl = p(this.elementContainer, {className:'scoreController_scoreLbl', innerHTML: 'SCORES'});
        this.scoreHardContainer= div(this.elementContainer, {className:'scoreController_scoreHardContainer '});
                      
      
         this.difficultyHardLbl = p(this.scoreHardContainer, {className:'scoreController_difficultyHardLbl' });
         this.scoreHardLbl = p(this.scoreHardContainer, {className:'scoreController_scoreHardLbl'});
         this.timeHardLbl = p(this.scoreHardContainer, {className:'scoreController_timeHardLbl'});
         this.usernameHardLbl = p(this.scoreHardContainer, {className:'scoreController_usernameHardLbl'});
         this.movesHardLbl = p(this.scoreHardContainer, {className:'scoreController_movesHardLbl'});


         
          this.scoreMediumContainer= div(this.elementContainer, {className:'scoreController_scoreMediumContainer '});
         
         this.difficultyMediumLbl = p(this.scoreMediumContainer, {className:'scoreController_difficultyMediumLbl'});
         this.scoreMediumLbl = p(this.scoreMediumContainer, {className:'scoreController_scoreMediumLbl'});
         this.timeMediumLbl = p(this.scoreMediumContainer, {className:'scoreController_timeMediumLbl'});
         this.usernameMediumLbl = p(this.scoreMediumContainer, {className:'scoreController_usernameMediumLbl'});
         this.movesMediumLbl = p(this.scoreMediumContainer, {className:'scoreController_movesMediumLbl'});

        
         this.scoreEasyContainer= div(this.elementContainer, {className:'scoreController_scoreEasyContainer '});
        this.difficultyEasyLbl = p(this.scoreEasyContainer, {className:'scoreController_difficultyEasyLbl'});
         this.scoreEasyLbl = p(this.scoreEasyContainer, {className:'scoreController_scoreEasyLbl'});
         this.timeEasyLbl = p(this.scoreEasyContainer, {className:'scoreController_timeEasyLbl',});
         this.usernameEasyLbl = p(this.scoreEasyContainer, {className:'scoreController_usernameEasyLbl'});
         this.movesEasyLbl = p(this.scoreEasyContainer, {className:'scoreController_movesEasyLbl'});

     
        
    }



    orderScores(scores){
     
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



 console.log( "easy",easyList, mediumList, hardList)

    let easyListed= easyList.reduce((minScore, score) => (score.score < minScore.score ? score : minScore), easyList[0]);
    let mediumListed= mediumList.reduce((minScore, score) => (score.score < minScore.score ? score : minScore), mediumList[0]);
    let hardListed = hardList.reduce((minScore, score) => (score.score < minScore.score ? score : minScore), hardList[0]);
    console.log("hardlist", hardListed,"medium", mediumListed, "easy",easyListed);
    
  this.showScores(easyListed,mediumListed,hardListed)


}
showScores(easyListed,mediumListed,hardListed){
    this.addHardData(hardListed);
    this.addMediumData(mediumListed);
    this.addEasyData(easyListed);
}

addHardData(list){
      
    this.difficultyHardLbl.innerHTML=`${list.difficulty}`;
    this.scoreHardLbl.innerHTML= `SCORE: ${list.score}`;
    this.timeHardLbl.innerHTML= `TIME: ${list.time}`;
    this.usernameHardLbl.innerHTML=`USERNAME: ${list.username}`;
    this.movesHardLbl.innerHTML= `MOVES: ${list.clicks}`;
        

       
        
    }

 addEasyData(list){
   
  
    this.difficultyEasyLbl.innerHTML= `${list.difficulty}`;
    this.scoreEasyLbl.innerHTML= `SCORE: ${list.score}`;
    this.timeEasyLbl.innerHTML=`SCORE: ${list.score}`;
    this.usernameEasyLbl.innerHTML= `USERNAME: ${list.username}`;
    this.movesEasyLbl.innerHTML= `MOVES: ${list.clicks}`;

 }

  addMediumData(list){
   
    this.difficultyMediumLbl.innerHTML= `${list.difficulty}`;
    this.scoreMediumLbl.innerHTML= `SCORE: ${list.score}`;
    this.timeMediumLbl.innerHTML= `TIME: ${list.time}`;
    this.usernameMediumLbl.innerHTML=`USERNAME: ${list.username}`;
    this.movesMediumLbl.innerHTML= `MOVES: ${list.clicks}`;



 }

}