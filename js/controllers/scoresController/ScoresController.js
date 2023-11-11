
import { Controller } from "../controller.js";
import { ScoresView } from "./ScoresView.js";




export class ScoresController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new ScoresView(this, parent);
    }


}
