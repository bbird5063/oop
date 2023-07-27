class Rectangle {
    private _width;
    private _height;

    constructor(w, h) {
        this._width = w;
        this._height = h;
    }

    calcArea() {
        return this._width * this._height;
    }

    public get width() {
        return this._width;
    }

    public set width(value) {
        if(value <= 0) {
            this._width = 1;    
        }
        else {
            this._width = value;
        }
    }
}

const rect = new Rectangle(5, 10);
/*const rect2 = new Rectangle(w:52, h:102);
const rect3 = new Rectangle(w:5, h:102);*/

rect._width = -2;

console.log(rect);
