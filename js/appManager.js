
import { CreditsController } from "./controllers/creditsController/creditsController.js";
import { DifficultyController } from "./controllers/difficultyController/difficultyController.js";
import { LoginController } from "./controllers/loginController/loginController.js";
import { MenuController } from "./controllers/navbarController/menuController/menuController.js";
import { NavbarController } from "./controllers/navbarController/navbarController/navbarController.js";
import { PlayController } from "./controllers/playController/playController.js";
import { ScoresController } from "./controllers/scoresController/scoresController.js";
import { ThemesController } from "./controllers/themesController/themesController.js";
import { DIFFICULTY_MEDIUM, SCORES, THEMES_CHARACTERS } from "./libs/constants.js";
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
        this.isDevelopment = true;
        this.mainContainer = div(document.body, {className: 'mainContainer'})

        // this.navbarConroller = div(this.mainContainer,{className: 'navbarConroller'})
        this.navbarController = new NavbarController(this, this.mainContainer);

        this.controllerContainer = div(this.mainContainer, { className: 'controllerContainer' })

        this.menuController = new MenuController(this, this.controllerContainer);
        this.currentController = null;
        this.showController(MENU);

        if(!localStorage.getItem('difficulty') ){
             window.localStorage.setItem('difficulty', DIFFICULTY_MEDIUM)
        }

        if(!localStorage.getItem('theme') ){
             window.localStorage.setItem('themes', THEMES_CHARACTERS)
        }

    }

    async showController(type){
        this.navbarController.showBackBtn();
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
                this.currentController = new PlayController(this, this.controllerContainer)
                this.currentController.getCards();
                break;
            case SCORES:
                this.currentController = new ScoresController(this, this.controllerContainer)
                break;
            case DIFFICULTY:
                    this.currentController = new DifficultyController(this, this.controllerContainer)
                break;
            case THEMES:
                this.currentController = new ThemesController(this, this.controllerContainer)
                break;
            case CREDITS:
                this.currentController = new CreditsController(this, this.controllerContainer)
                break;
            default:
                break;
        }

    }
getDifficulty(){
    
    return localStorage.getItem('difficulty')
        
}

    
getTheme(){
    
    return localStorage.getItem('themes');
        
}
getBaseURL(){
    return this.isDevelopment ? 'http://localhost:3000/' : 'https://pablo-oviedo-memory-card-backend-39a1.vercel.app/';
}

    
getUsername(){
    
    return localStorage.getItem('username')
        
}

}

