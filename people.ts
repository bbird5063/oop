class Person {
    private _firstName;
    private _lastName;
    private _age;

    constructor(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    /* Создаем гетер "полное имя", а вызывать будем из объекта "Разработчик" */
    public get FullName() {
        return `Фамилия: ${this._lastName}, Имя: ${this._firstName}`
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
    }
}

/* 
В TS можно наследовать только от одного класса 
(в C++ можно от нескольких).
Конструктора нет - он тоже наследуется и мы 
при создании объекта должны передать аогументы
Конструктор добавили позже.
*/
class Employee extends Person {
    private _inn;
    private _number; // номер паспорта
    private _snils; // Страховой номер индивидуального лицевого счёт

    constructor(firstName, lastName, age, inn, number, snils) {
        super(firstName, lastName, age); // сначала будет вызван родительский конструктор
        this._inn = inn;
        this._number = number;
        this._snils = snils;
    }
}

class Developer extends Employee {
    private _level;
    private _language;

    constructor(firstName, lastName, age, inn, number, snils, level, language) {
        super(firstName, lastName, age, inn, number, snils);
        this._level = level;
        this._language = language;
    }
}

const man = new Person('Sergey', 'Drozdov', 56);
man.age = -1;
console.log(man);
console.log(man.lastName);
const employee1 = new Employee('Tolik', 'Ovchar', 59, '23539586', 'FG236512', '242427');
console.log(employee1);
console.log(employee1.lastName);
const ulbiTv = new Developer('Tolik', 'Ovchar', 59, '23539586', 'FG236512', '242427', 'SENIOR', 'PHP');
console.log(ulbiTv.FullName);