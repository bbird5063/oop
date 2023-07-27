var Rectangle = /** @class */ (function () {
    function Rectangle(w, h) {
        this._width = w;
        this._height = h;
    }
    Rectangle.prototype.calcArea = function () {
        return this._width * this._height;
    };
    Object.defineProperty(Rectangle.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            if (value <= 0) {
                this._width = 1;
            }
            else {
                this._width = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Rectangle;
}());
var rect = new Rectangle(5, 10);
/*const rect2 = new Rectangle(w:52, h:102);
const rect3 = new Rectangle(w:5, h:102);*/
rect.width = -2;
console.log(rect);
