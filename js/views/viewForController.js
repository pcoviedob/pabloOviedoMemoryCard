
import { div } from "../libs/html.js";
import { View } from "./view.js";

export class ViewForController extends View {
    constructor(controller, parent) {
        super(parent);

        this.controller = controller;
        this.fade = div(this.container, { className: 'fade' });
        this.elementContainer = div(this.container, { className: 'elementContainer' });
    }

    setStartPosition(){
        this.elementContainer.style.transform= `translateX(${window.innerWidth}px`;
    }
}