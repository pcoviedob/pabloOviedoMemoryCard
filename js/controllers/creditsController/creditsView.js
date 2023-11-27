
import { div,p,img } from "../../libs/html.js";
import { ViewForController } from "../../views/viewForController.js";


export class CreditsView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'creditsController';
        this.mainCreditsContainer = div(this.elementContainer,{ className:'mainCreditsContainer'});
         this.creditsTittle = p(this.mainCreditsContainer,{ className:'creditsTittle', innerHTML: 'CREDITS'});
         this.creditsContainer = div(this.mainCreditsContainer,{ className:'creditsContainer'});
        this.developerSubtittle = p(this.creditsContainer,{ className:'creditsSubtittle', innerHTML: 'DEVELOPER:'});
        this.developerName = p(this.creditsContainer,{ className:'creditsSubtittle', innerHTML: 'PABLO OVIEDO BRENES'});
         this.rudder_Img = img(this.mainCreditsContainer,{src: '../assets/timon.png', className: 'rudder_img'});
        this.setStartPosition();
        this.moveIn();
    }

onCreditsBtn(){
    console.log()
}


}