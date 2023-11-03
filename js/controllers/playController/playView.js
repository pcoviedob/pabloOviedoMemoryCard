
import { div } from "../../libs/html.js";
import { ViewForController } from "../../views/viewForController.js";



export class PlayView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'loginController';

        this.playBtn = div(this.elementContainer,{className: 'GameBtn', innerHTML: 'PLAY', onclick: this.onPlayBtn.bind(this)});

    }

onPlayBtn(){
    console.log()
}


}