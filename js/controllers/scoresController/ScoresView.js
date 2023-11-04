
import { div } from "../../libs/html.js";
import { ViewForController } from "../../views/viewForController.js";



export class ScoresView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'loginController';

        this.scoresBtn = div(this.elementContainer,{className: 'GameBtn', innerHTML: 'SCORES', onclick: this.onScoresBtn.bind(this)});
        this.setStartPosition();
        this.moveIn();
    }

onScoresBtn(){
    console.log()
}


}