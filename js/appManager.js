export class AppManager{
    constructor(){
        this.mainContainer = document.createElement('div');
        this.mainContainer.className= 'mainContainer'; 
        document.body.appendChild(this.mainContainer);

        this.navbarViewConroller = document.createElement('div');
        this.navbarViewConroller.className = 'navbarViewConroller';
        this.mainContainer.appendChild(this.navbarViewConroller);

        this.controllerContainer = document.createElement('div');
        this.controllerContainer.className = 'controllerContainer';
        this.mainContainer.appendChild(this.controllerContainer);
    }
}