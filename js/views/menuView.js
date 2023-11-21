import { LOGIN } from "../libs/constants.js";
import { PLAY } from "../libs/constants.js";
import { SCORES } from "../libs/constants.js";
import { DIFFICULTY } from "../libs/constants.js";
import { THEMES } from "../libs/constants.js";
import { CREDITS } from "../libs/constants.js";
import { div,p } from "../libs/html.js";
import { ViewForController } from "./viewForController.js";

export class MenuView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'menuController';
       
       this.subTittleMenu = p(this.elementContainer,{className: 'subTittleMenu', innerHTML: 'CARD MATCH'});

        this.loginBtn = div(this.elementContainer,{className: 'gamenBtn gameLoginBtn', innerHTML: 'LOGIN', onclick: this.onLoginBtn.bind(this)});
        this.playBtn = div(this.elementContainer,{className: 'gamenBtn gamePlayBtn', innerHTML: 'PLAY', onclick: this.onPlayBtn.bind(this)});

        this.themesAndScoreBtns =div(this.elementContainer,{className: 'div_btns'});
        this.scoresBtn = div(this.themesAndScoreBtns,{className: ' gameScoresBtn', innerHTML: 'SCORES', onclick: this.onScoresBtn.bind(this)});
        this.themesBtn = div(this.themesAndScoreBtns,{className: '  gameThemesBtn', innerHTML: 'THEMES', onclick: this.onThemesBtn.bind(this)});
        this.difficultyBtn = div(this.elementContainer,{className: '  gameDifficultyBtn', innerHTML: 'DIFFICULTY', onclick: this.onDifficultyBtn.bind(this)});
        this.creditsBtn = div(this.elementContainer,{className: ' gameCreditsBtn', innerHTML: 'CREDITS', onclick: this.onCreditsBtn.bind(this)});
        this.scoresDisplay = div(this.elementContainer,{className: 'scoresDisplay'});
        this.scoresTittle = p(this.scoresDisplay,{className: ' scoresTitle', innerHTML: 'TOP SCORES'});
        this.firstPlaceHard = div(this.scoresDisplay,{className: ' firstPlaceHard'});
        this.firstPlaceMedium = div(this.scoresDisplay,{className: ' firstPlaceMedium'});
        this.firstPlaceEasy = div(this.scoresDisplay,{className: ' firstPlaceEasy'});
    }

onLoginBtn(){
    this.controller.appManager.showController(LOGIN);
}

onPlayBtn(){
    this.controller.appManager.showController(PLAY);
}

onScoresBtn(){
    this.controller.appManager.showController(SCORES);
}

onDifficultyBtn(){
    this.controller.appManager.showController(DIFFICULTY);
}

onThemesBtn(){
    this.controller.appManager.showController(THEMES);
}

onCreditsBtn(){
    this.controller.appManager.showController(CREDITS);
}
}