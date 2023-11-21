
import { DIFFICULTY_EASY, DIFFICULTY_HARD, DIFFICULTY_MEDIUM } from "../../libs/constants.js";
import {p, div, img } from "../../libs/html.js";
import { ViewForController } from "../../views/viewForController.js";


export class DifficultyView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'loginController';


        this.difficultyTittle = p(this.elementContainer,{innerHTML:'DIFFICULTY', className: 'difficultyController_tittle '});
        this.difficultyEasyBtn = div(this.elementContainer,{className: 'difficultyEasyBtn', innerHTML: 'EASY', onclick: this.onDifficultyEasyBtn.bind(this)});
        this.difficultyBtn = div(this.elementContainer,{className: 'difficultyMediumBtn', innerHTML: 'MEDIUM', onclick: this.onDifficultyMediumBtn.bind(this)});
        this.difficultyHardBtn = div(this.elementContainer,{className: 'difficultyHardBtn', innerHTML: 'HARD', onclick: this.onDifficultyHardBtn.bind(this)});
        this.rudder_Img = img(this.elementContainer,{src: '../assets/timon.png', className: 'rudder_img'});
        this.setStartPosition();
        this.moveIn();
    }

onDifficultyEasyBtn(){
  window.localStorage.setItem('difficulty', DIFFICULTY_EASY)
}

onDifficultyMediumBtn(){
    window.localStorage.setItem('difficulty', DIFFICULTY_MEDIUM)
}

onDifficultyHardBtn(){
    window.localStorage.setItem('difficulty', DIFFICULTY_HARD)
}
}