
import { div } from "../../libs/html.js";
import { ViewForController } from "../../views/viewForController.js";


export class LoginView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'loginController';

        this.loginBtn = div(this.elementContainer,{className: 'GameBtn', innerHTML: 'LOGIN', onclick: this.onLoginBtn.bind(this)});

    }

onLoginBtn(){
    console.log()
}


}