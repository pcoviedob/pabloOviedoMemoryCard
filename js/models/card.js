export class Card{
    // constructor(id, icon, isDiscovered = false){
    //     this.id = id;
    //     this.icon = icon;
    //     this.isDiscovered = isDiscovered;
    // }
    constructor(identifier,id, src, isDiscovered = false){
        this.identifier = identifier;
        this.id = id;
        this.src = src;
        this.isDiscovered = isDiscovered;
    }
}