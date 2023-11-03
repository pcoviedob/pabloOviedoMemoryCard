import { LOGIN } from "../libs/constants.js";
import { PLAY } from "../libs/constants.js";
import { SCORES } from "../libs/constants.js";
import { DIFFICULTY } from "../libs/constants.js";
import { THEMES } from "../libs/constants.js";
import { CREDITS } from "../libs/constants.js";
import { div } from "../libs/html.js";
import { ViewForController } from "./viewForController.js";

export class MenuView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'menuController';
       

        this.loginBtn = div(this.elementContainer,{className: 'gameBtn', innerHTML: 'LOGIN', onclick: this.onLoginBtn.bind(this)});
        this.playBtn = div(this.elementContainer,{className: 'gameBtn', innerHTML: 'PLAY', onclick: this.onPlayBtn.bind(this)});
        this.scoresBtn = div(this.elementContainer,{className: 'gameBtn', innerHTML: 'SCORES', onclick: this.onScoresBtn.bind(this)});
        this.difficultyBtn = div(this.elementContainer,{className: 'gameBtn', innerHTML: 'DIFFICULTY', onclick: this.onDifficultyBtn.bind(this)});
        this.themesBtn = div(this.elementContainer,{className: 'gameBtn', innerHTML: 'THEMES', onclick: this.onThemesBtn.bind(this)});
        this.creditsBtn = div(this.elementContainer,{className: 'gameBtn', innerHTML: 'CREDITS', onclick: this.onCreditsBtn.bind(this)});
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