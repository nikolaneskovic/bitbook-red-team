
class Users {
    constructor(name, avatarUrl, about) {
        this._name = name;
        this._avatarUrl = avatarUrl;
        this._about = about;
    }

    get name() {
        return this._name;
    }
    get avatarUrl() {
        return this._avatarUrl;
    }

    set name(newName) {
        this._name = newName;
    }
    set avatarUrl(newAvatarUrl) {
        this._avatarUrl = newAvatarUrl;
    }

    get about() {
        return this._about;
    }

    set about(value) {
        this._about = value;
    }
}

export default Users;




