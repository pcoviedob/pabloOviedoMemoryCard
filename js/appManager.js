
// import { LoginController } from "./controllers/loginController/loginController.js";
import { LoginController } from "./controllers/loginController/loginController.js";
import { MenuController } from "./controllers/navbarController/menuController/menuController.js";
import { NavbarController } from "./controllers/navbarController/navbarController/navbarController.js";
import { SCORES } from "./libs/constants.js";
import { NONE } from "./libs/constants.js";
import { LOGIN } from "./libs/constants.js";
import { PLAY } from "./libs/constants.js";
import { DIFFICULTY } from "./libs/constants.js";
import { THEMES } from "./libs/constants.js";
import { CREDITS } from "./libs/constants.js";
import { MENU } from "./libs/constants.js";
import { div, p, img } from "./libs/html.js";

export class AppManager {
    constructor() {

        this.mainContainer = div(document.body, { className: 'mainContainer' })

        // this.navbarConroller = div(this.mainContainer,{className: 'navbarConroller'})
        this.navbarController = new NavbarController(this, this.mainContainer);

        this.controllerContainer = div(this.mainContainer, { className: 'controllerContainer' })

        this.menuController = new MenuController(this, this.controllerContainer);
        this.currentController = null;
    }

    showController(type){
        switch (type){
            case NONE:
                break;
            case MENU:
                if(this.currentController !== null){
                    this.currentController.delete();
                    this.currentController = null;
                    this.navbarController.hideBackBtn();
                }

                break;
            case LOGIN:
                this.currentController = new LoginController(this, this.controllerContainer)
                break;
            case PLAY:
                break;
            case SCORES:
                break;
                case DIFFICULTY:
                break;
            case THEMES:
                break;
            case CREDITS:
                break;
            default:
                break;
        }

    }
}

