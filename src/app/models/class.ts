export class Class {

    constructor(
        private _id : number,
        private _title : string,
        private _description : string
        ){}

    get id() : number {
        return this._id;
    }

    get title() : string{
        return this._title;
    }

    get description() : string{
        return this._description;
    }

    set id(id : number){
        this._id = id;
    }

    set title(title : string){
        this._title = title;
    }

    set description(description : string){
        this._description = description;
    }
}
