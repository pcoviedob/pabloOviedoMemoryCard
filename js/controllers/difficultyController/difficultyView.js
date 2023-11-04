
import { div } from "../../libs/html.js";
import { ViewForController } from "../../views/viewForController.js";


export class DifficultyView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'loginController';

        this.difficultyBtn = div(this.elementContainer,{className: 'GameBtn', innerHTML: 'DIFFICULTY', onclick: this.onDifficultyBtn.bind(this)});
        this.setStartPosition();
        this.moveIn();
    }

onDifficultyBtn(){
    console.log()
}


}