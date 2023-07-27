class database {
    private _firstName;
    private _lastName;
    private _age;

    constructor(firstName, port, username, password) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(val) {
        this._firstName = val;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(val) {
        this._lastName = val;
    }

    get age() {
        return this._age;
    }

    set age(val) {
        if(val < 0) {
            this._age = 0;
        }
        else {
            this._age = val;
        }

        this._lastName = age;
    }


}