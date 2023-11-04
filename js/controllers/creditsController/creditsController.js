
import { Controller } from "../navbarController/controller.js";
import { CreditsView } from "./creditsView.js";


export class CreditsController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new CreditsView(this, parent);
    }


}
