
import { MenuView } from "../../../views/menuView.js";
import { Controller } from "../controller.js";

export class LoginController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new MenuView(this, parent);
    }
}
