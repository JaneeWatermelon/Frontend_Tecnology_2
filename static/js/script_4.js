class Figure {
    #x;
    #y;
    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }
    square() {
        return undefined;
    }
    show_center_coords() {
        console.log(`X: ${this.#x}; Y: ${this.#y};`);
    }
}

class Circle extends Figure {
    #r;
    constructor(x, y, radius) {
        super(x, y);
        this.#r = radius;
    }
    square() {
        return Math.PI * this.#r**2;
    }
}
class Rectangle extends Figure {
    #h;
    #w;
    constructor(x, y, height, width) {
        super(x, y);
        this.#h = height;
        this.#w = width;
    }
    square() {
        return this.#h * this.#w;
    }
}

$("#4").on("click", function() {
    let circle = new Circle(1, 2, 5);
    console.log(circle.square());
    circle.show_center_coords();
    let rectangle = new Rectangle(0, 0, 10, 20);
    console.log(rectangle.square());
    rectangle.show_center_coords();
});