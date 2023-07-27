class User {
    private _username;
    private _password;
    private _id;

    constructor(username, password) {
        this._username = username;
        this._password = password;
        /*this._id = generateRandomId();*/
    }

    get username() {
        return this._username;
    }

    set username(value) {
        this._username = value; ;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    get id() {
        return this._id;
    }
}
/*
function generateRandomId() {
    throw new Error("Function not implemented.");
}
*/

/*const user = new User(username: 'Ulbi', password: 'Timur')*/
const user = new User('Ulbi', 'Timur')
user.username = -5;
console.log(user);