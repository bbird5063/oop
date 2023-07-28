var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }
    Object.defineProperty(Person.prototype, "FullName", {
        /* Создаем гетер "полное имя", а вызывать будем из объекта "Разработчик" */
        get: function () {
            return "\u0424\u0430\u043C\u0438\u043B\u0438\u044F: ".concat(this._lastName, ", \u0418\u043C\u044F: ").concat(this._firstName);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (val) {
            this._firstName = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (val) {
            this._lastName = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (val) {
            if (val < 0) {
                this._age = 0;
            }
            else {
                this._age = val;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
/*
В TS можно наследовать только от одного класса
(в C++ можно от нескольких).
Конструктора нет - он тоже наследуется и мы
при создании объекта должны передать аогументы
Конструктор добавили позже.
*/
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, age, inn, number, snils) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this._inn = inn;
        _this._number = number;
        _this._snils = snils;
        return _this;
    }
    return Employee;
}(Person));
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(firstName, lastName, age, inn, number, snils, level, language) {
        var _this = _super.call(this, firstName, lastName, age, inn, number, snils) || this;
        _this._level = level;
        _this._language = language;
        return _this;
    }
    return Developer;
}(Employee));
var man = new Person('Sergey', 'Drozdov', 56);
man.age = -1;
console.log(man);
console.log(man.lastName);
var employee1 = new Employee('Tolik', 'Ovchar', 59, '23539586', 'FG236512', '242427');
console.log(employee1);
console.log(employee1.lastName);
var ulbiTv = new Developer('Tolik', 'Ovchar', 59, '23539586', 'FG236512', '242427', 'SENIOR', 'PHP');
console.log(ulbiTv.FullName);
