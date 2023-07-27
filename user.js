var User = /** @class */ (function () {
    function User(username, password) {
        this._username = username;
        this._password = password;
        /*this._id = generateRandomId();*/
    }
    Object.defineProperty(User.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (value) {
            this._username = value;
            ;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
/*
function generateRandomId() {
    throw new Error("Function not implemented.");
}
*/
/*const user = new User(username: 'Ulbi', password: 'Timur')*/
var user = new User('Ulbi', 'Timur');
user.username = -5;
console.log(user);
