
import { div } from "../../libs/html.js";
import { ViewForController } from "../../views/viewForController.js";



export class ThemesView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'loginController';

        this.themesBtn = div(this.elementContainer,{className: 'GameBtn', innerHTML: 'THEMES', onclick: this.onThemesBtn.bind(this)});
        this.setStartPosition();
        this.moveIn();
    }

onThemesBtn(){
    console.log()
}


}