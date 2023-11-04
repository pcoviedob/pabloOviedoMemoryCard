
// import {div} from "../libs/html.js";

export class Controller{
 constructor(appManager, parent){
    this.appManager = appManager;
    this.view = null;
    
 }
 delete(){
   //  this.view.delete()
    this.view.moveOut();
 }

}