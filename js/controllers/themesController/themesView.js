
import { THEMES_CHARACTERS, THEMES_FLAGS, THEMES_FRUITS } from "../../libs/constants.js";
import { div, p, img } from "../../libs/html.js";
import { ViewForController } from "../../views/viewForController.js";



export class ThemesView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'loginController';

        // this.themesBtn = div(this.elementContainer,{className: 'GameBtn', innerHTML: 'THEMES', onclick: this.onThemesBtn.bind(this)});
        this.themesTittle = p(this.elementContainer,{innerHTML:'THEMES', className: 'themesController_tittle '});
        this.themesCharactersBtn = div(this.elementContainer,{className: 'themesCharactersBtn', innerHTML: 'CHARACTERS', onclick: this.onThemesCharactersBtn.bind(this)});
        this.themesFlagsBtn = div(this.elementContainer,{className: 'themesFlagsBtn', innerHTML: 'FLAGS', onclick: this.onThemesFlagsBtn.bind(this)});
        this.themesFruitsBtn = div(this.elementContainer,{className: 'themesFruitsBtn', innerHTML: 'FRUITS', onclick: this.onThemesFruitsBtn.bind(this)});
        this.rudder_Img = img(this.elementContainer,{src: '../assets/timon.png', className: 'rudder_img'});
        this.setStartPosition();
        this.moveIn();
    }


onThemesCharactersBtn(){
    window.localStorage.setItem(THEMES_CHARACTERS);
}
onThemesFlagsBtn(){
     window.localStorage.setItem(THEMES_FLAGS);
}
onThemesFruitsBtn(){
     window.localStorage.setItem(THEMES_FRUITS);
}
}