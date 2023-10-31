import { div } from "../libs/html.js";
import { ViewForController } from "./viewForController.js";

export class MenuView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'menuController';
       

        this.loginBtn = div(this.elementContainer,{className: 'gameBtn', innerHTML: 'Login', onclick: this.onLoginBtn.bind(this)});
        this.playBtn = div(this.elementContainer,{className: 'gameBtn', innerHTML: 'PLAY', onclick: this.onPlayBtn.bind(this)});
        this.scoresBtn = div(this.elementContainer,{className: 'gameBtn', innerHTML: 'SCORES', onclick: this.onScoresBtn.bind(this)});
        this.difficultyBtn = div(this.elementContainer,{className: 'gameBtn', innerHTML: 'DIFFICULTY', onclick: this.onDifficultyBtn.bind(this)});
        this.themesBtn = div(this.elementContainer,{className: 'gameBtn', innerHTML: 'THEMES', onclick: this.onThemesBtn.bind(this)});
        this.creditsBtn = div(this.elementContainer,{className: 'gameBtn', innerHTML: 'CREDITS', onclick: this.onCreditsBtn.bind(this)});
    }

onLoginBtn(){
    this.controller.appManager.showController(LOGIN);
}
onLoginBtn(){
    this.controller.appManager.showController(PLAY);
}
onPlayBtn(){
    this.controller.appManager.showController(SCORES);
}
onScoresBtn(){
    this.controller.appManager.showController(DIFFICULTY);
}
onDifficultyBtn(){
    this.controller.appManager.showController(THEMES);
}
onThemesBtn(){
    this.controller.appManager.showController(CREDITS);
}
onCreditsBtn(){
    this.controller.appManager.showController(CREDITS);
}
}