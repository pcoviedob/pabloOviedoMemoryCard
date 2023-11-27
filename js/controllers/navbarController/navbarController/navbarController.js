import { View } from "../../../views/view.js";
import { div,p } from "../../../libs/html.js";
import { MENU } from "../../../libs/constants.js";
import {Controller} from "../../controller.js";


export class NavbarController extends Controller{
    constructor(appManager, parent){
        super(appManager, parent);
        this.view = new View(parent);
        this.view.container.className ='navbarController';
        this.backBtn = div(this.view.container,{className: 'navbarController_backBtn', onclick: this.onBackBtn.bind(this), innerHTML: '〱' })
        // this.gameTittle = p(this.view.container,{className: 'gameTittle',  innerHTML: 'MEMORY GAME ' })
        this.hideBackBtn();
    }
    onBackBtn(){
    this.appManager.showController(MENU);
    }

    hideBackBtn(){
        this.backBtn.classList.add('hidden');

    }

    showBackBtn(){
        this.backBtn.classList.remove('hidden');
    }
}