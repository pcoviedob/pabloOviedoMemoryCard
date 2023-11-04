
import { div } from "../libs/html.js";
import { View } from "./view.js";

export class ViewForController extends View {
    constructor(controller, parent) {
        super(parent);

        this.controller = controller;
        this.fade = div(this.container, { className: 'fade' });
        this.elementContainer = div(this.container, { className: 'elementContainer' });
        // container con background para botones
        // this.btnContainer = div(this.elementContainer, { className: 'btnContainer' });
    }

    setStartPosition(){
        this.elementContainer.style.transform= `translateX(${window.innerWidth}px`;
    }

    moveIn(){
        gsap.to(this.elementContainer, {x: 0, duration: 0.8, ease: "power1.in"});
        gsap.to(this.fade, {opacity: 1, duration: 0.5, ease: "power1.in"});
    }

    moveOut(){
         gsap.to(this.elementContainer, {x: window.innerWidth, duration: 0.8, ease: "power1.in", onComplete:this.moveOutOnComplete.bind(this)});
        gsap.to(this.fade, {opacity: 0, duration: 0.5, ease: "power1.in"});
    }

    moveOutOnComplete(){
        this.delete();
    }
}