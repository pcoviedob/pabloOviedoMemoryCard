export class Card{
    
    constructor(identifier,id, src, isDiscovered = false){
        this.identifier = identifier;
        this.id = id;
        this.src = src;
        this.isDiscovered = isDiscovered;
    }
}