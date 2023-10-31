import { div } from "../libs/html.js";
import { ViewForController } from "./viewForController.js";

export class LoginView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'menuController';

        this.loginBtn = div(this.EleemntsContainer,{className: 'GameBtn', innerHTML: 'Login', onclick: this.onLoginBtn.bind(this)});
        this.playBtn = div(this.EleemntsContainer,{className: 'GameBtn', innerHTML: 'PLAY', onclick: this.onLoginBtn.bind(this)});
        this.scoresBtn = div(this.EleemntsContainer,{className: 'GameBtn', innerHTML: 'SCORE', onclick: this.onLoginBtn.bind(this)});
        this.difficultyBtn = div(this.EleemntsContainer,{className: 'GameBtn', innerHTML: 'DIFFICULTY', onclick: this.onLoginBtn.bind(this)});
        this.loginBtn = div(this.EleemntsContainer,{className: 'GameBtn', innerHTML: 'Login', onclick: this.onLoginBtn.bind(this)});
        this.loginBtn = div(this.EleemntsContainer,{className: 'GameBtn', innerHTML: 'Login', onclick: this.onLoginBtn.bind(this)});
    }

onLoginBtn(){
    console.log()
}
onLoginBtn(){}
onLoginBtn(){}
onLoginBtn(){}
onLoginBtn(){}
onLoginBtn(){}

onLoginBtn(){}
}