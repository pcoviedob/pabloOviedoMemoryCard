
import { div, input,p,img } from "../../libs/html.js";
import { ViewForController } from "../../views/viewForController.js";


export class LoginView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'loginController';

        this.loginTittle = p(this.elementContainer,{innerHTML:'LOGIN', className: 'loginController_tittle '});
        this.loginDisplay = div(this.elementContainer,{className: 'loginDisplay'});
        this.userLogin = img(this.loginDisplay,{src: '../assets/user.svg',className: 'userDisplay', });
        this.loginUser = p(this.loginDisplay,{className:'loginUser', innerHTML:'USER'});
        this.usernameIn = input(this.loginDisplay,{className: 'loginController_input'});
        this.loginBtn = div(this.loginDisplay,{className: 'loginBtn', innerHTML: 'GO', onclick: this.onLoginBtn.bind(this)});
        this.rudder_Img = img(this.elementContainer,{src: '../assets/timon.png', className: 'rudder_img'});
        
         this.setStartPosition();
        
        this.moveIn();

    }

onLoginBtn(){
    let username = this.usernameIn.value;

    if(username !== ''){

    window.localStorage.setItem('username', username);
    }
}


}