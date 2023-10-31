
import { MenuController } from "./controllers/navbarController/menuController/menuController.js";
import { NavbarController } from "./controllers/navbarController/navbarController/navbarController.js";
import { div, p, img } from "./libs/html.js";

export class AppManager {
    constructor() {

        this.mainContainer = div(document.body, { className: 'mainContainer' })

        // this.navbarConroller = div(this.mainContainer,{className: 'navbarConroller'})
        this.navbarController = new NavbarController(this, this.mainContainer);

        this.controllerContainer = div(this.mainContainer, { className: 'controllerContainer' })

        this.menuController = new MenuController(this, this.controllerContainer);
    }
}