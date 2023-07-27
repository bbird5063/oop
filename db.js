var database = /** @class */ (function () {
    function database(url, port, username, password) {
        this._url = url;
        this._port = port;
        this._username = username;
        this._password = password;
        this._tables = [];
    }
    /* Добавлять таблицы */
    database.prototype.createNewTable = function (table) {
        this._tables.push(table);
    };
    Object.defineProperty(database.prototype, "url", {
        get: function () {
            return this._url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(database.prototype, "port", {
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(database.prototype, "username", {
        get: function () {
            return this._username;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(database.prototype, "password", {
        get: function () {
            return this._password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(database.prototype, "tables", {
        get: function () {
            return this._tables;
        },
        enumerable: false,
        configurable: true
    });
    return database;
}());
var db = new database('url', '234', 'uname', '123456');
/*db.createNewTable('user');
db.createNewTable('userTel');
db.createNewTable('userAddress');
db.createNewTable('userEmail');*/
db.createNewTable({ name: 'user' });
db.createNewTable({ name: 'userTel' });
db.createNewTable({ name: 'userAddress' });
db.createNewTable({ name: 'userEmail' });
console.log(db);
