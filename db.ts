class database {
    private _url;
    private _port;
    private _username;
    private _password;
    private _tables;

    constructor(url, port, username, password) {
        this._url = url;
        this._port = port;
        this._username = username;
        this._password = password;
        this._tables = [];
    }

    /* Добавлять таблицы */
    public createNewTable(table) {
        this._tables.push(table);
    }

    get url() {
        return this._url;
    }

    get port() {
        return this._port;
    }

    get username() {
        return this._username;
    }

    get password() {
        return this._password;
    }

    get tables() {
        return this._tables;
    }
}

const db = new database('url', '234', 'uname', '123456');
/*db.createNewTable('user');
db.createNewTable('userTel');
db.createNewTable('userAddress');
db.createNewTable('userEmail');
или
*/

db.createNewTable({name: 'user'});
db.createNewTable({name: 'userTel'});
db.createNewTable({name: 'userAddress'});
db.createNewTable({name: 'userEmail'});

console.log(db);
