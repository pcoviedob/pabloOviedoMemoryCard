
import { div, img, p } from "../../libs/html.js";
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

       

 

    let easyListed= easyList.reduce((minScore, score) => (score.score < minScore.score ? score : minScore), easyList[0]);
    let mediumListed= mediumList.reduce((minScore, score) => (score.score < minScore.score ? score : minScore), mediumList[0]);
    let hardListed = hardList.reduce((minScore, score) => (score.score < minScore.score ? score : minScore), hardList[0]);

    
  this.showScores(easyListed,mediumListed,hardListed)
     
      return hardList, mediumList, easyList;

    }
    showScores(easyListed,mediumListed,hardListed){
        this.addData(hardListed,mediumListed, easyListed)
    
    }

    addData(listH,listM,listE){

       
        
        this.difficultyHardLbl.innerHTML=`${listH.difficulty}`;
        this.scoreHardLbl.innerHTML= `SCORE: ${listH.score}`;
        this.timeHardLbl.innerHTML= `TIME: ${listH.time}`;
        this.usernameHardLbl.innerHTML=`USERNAME: ${listH.username}`;
        this.movesHardLbl.innerHTML= `MOVES: ${listH.clicks}`;
        
    
        this.difficultyEasyLbl.innerHTML= `${listE.difficulty}`;
        this.scoreEasyLbl.innerHTML= `SCORE: ${listE.score}`;
        this.timeEasyLbl.innerHTML=`SCORE: ${listE.score}`;
        this.usernameEasyLbl.innerHTML= `USERNAME: ${listE.username}`;
        this.movesEasyLbl.innerHTML= `MOVES: ${listE.clicks}`;

        
        this.difficultyMediumLbl.innerHTML= `${listM.difficulty}`;
        this.scoreMediumLbl.innerHTML= `SCORE: ${listM.score}`;
        this.timeMediumLbl.innerHTML= `TIME: ${listM.time}`;
        this.usernameMediumLbl.innerHTML=`USERNAME: ${listM.username}`;
        this.movesMediumLbl.innerHTML= `MOVES: ${listM.clicks}`;



    }
    
    addTopThree(list){

        if(list.difficulty === "HARD"){

        
            this.difficultyHardLbl2.innerHTML=`${list.difficulty}`;
            this.scoreHardLbl2.innerHTML= `SCORE: ${list.score}`;
            this.timeHardLbl2.innerHTML= `TIME: ${list.time}`;
            this.usernameHardLbl2.innerHTML=`USERNAME: ${list.username}`;
            this.movesHardLbl2.innerHTML= `MOVES: ${list.clicks}`;

            this.difficultyHardLbl3.innerHTML=`${list.difficulty}`;
            this.scoreHardLbl3.innerHTML= `SCORE: ${list.score}`;
            this.timeHardLbl3.innerHTML= `TIME: ${list.time}`;
            this.usernameHardLbl3.innerHTML=`USERNAME: ${list.username}`;
            this.movesHardLbl3.innerHTML= `MOVES: ${list.clicks}`;

        }else if(list.difficulty === "MEDIUM"){
            
            this.difficultyMediumLbl2.innerHTML= `${list.difficulty}`;
            this.scoreMediumLbl2.innerHTML= `SCORE: ${list.score}`;
            this.timeMediumLbl2.innerHTML= `TIME: ${list.time}`;
            this.usernameMediumLbl2.innerHTML=`USERNAME: ${list.username}`;
            this.movesMediumLbl2.innerHTML= `MOVES: ${list.clicks}`;

             this.difficultyMediumLbl3.innerHTML= `${list.difficulty}`;
            this.scoreMediumLbl3.innerHTML= `SCORE: ${list.score}`;
            this.timeMediumLbl3.innerHTML= `TIME: ${list.time}`;
            this.usernameMediumLbl3.innerHTML=`USERNAME: ${list.username}`;
            this.movesMediumLbl3.innerHTML= `MOVES: ${list.clicks}`;


        }else if(list.difficulty === "EASY"){
            
            this.difficultyEasyLbl2.innerHTML= `${list.difficulty}`;
            this.scoreEasyLbl2.innerHTML= `SCORE: ${list.score}`;
            this.timeEasyLbl2.innerHTML=`TIME: ${list.score}`;
            this.usernameEasyLbl2.innerHTML= `USERNAME: ${list.username}`;
            this.movesEasyLbl2.innerHTML= `MOVES: ${list.clicks}`;


            this.difficultyEasyLbl3.innerHTML= `${list.difficulty}`;
            this.scoreEasyLbl.innerHTML3= `SCORE: ${list.score}`;
            this.timeEasyLbl.innerHTML3=`TIME: ${list.score}`;
            this.usernameEasyLbl3.innerHTML= `USERNAME: ${list.username}`;
            this.movesEasyLbl3.innerHTML= `MOVES: ${list.clicks}`;
                
               
        }
          
         return list;

}

}
