export class PostDTO{
    constructor(dateCreated, id, text, type, userDisplayName, userId){
        this._dateCreated = dateCreated;
        this._id = id;
        this._text = text;
        this._type = type;
        this._userDisplayName = userDisplayName;
        this._userId = userId;
    }

    get dateCreated() {
        return this._dateCreated;
    }
    set dateCreated(newValue) {
        this._dateCreated = newValue;
    }
    get id() {
        return this._id;
    }
    set id(newValue) {
        this._id = newValue;
    }
    get text() {
        return this._text;
    }
    set type(newValue) {
        this._type = newValue;
    }
    get type() {
        return this._type;
    }
    set text(newValue) {
        this._text = newValue;
    }
    get userDisplayName() {
        return this._userDisplayName;
    }
    set userDisplayName(newValue) {
        this._userDisplayName = newValue;
    }
    get userId() {
        return this._userId;
    }
    set userId(newValue) {
        this._userId = newValue;
    }




} 