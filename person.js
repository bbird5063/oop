var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (n) {
            if (n < 0 || n > 110) {
                console.log("Недопустимый возраст!");
            }
            else {
                this._age = n;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var tom = new Person();
tom.name = "Tom";
tom.age = 36;
console.log(tom.age); // 36
tom.age = -1243; // Недопустимый возраст!   
console.log(tom.age); // 36 
