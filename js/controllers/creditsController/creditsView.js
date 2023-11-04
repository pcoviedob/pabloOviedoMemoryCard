
import { div } from "../../libs/html.js";
import { ViewForController } from "../../views/viewForController.js";


export class CreditsView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'loginController';

        this.difficultyBtn = div(this.elementContainer,{className: 'GameBtn', innerHTML: 'CREDITS', onclick: this.onCreditsBtn.bind(this)});
        this.setStartPosition();
        this.moveIn();
    }

onCreditsBtn(){
    console.log()
}


}