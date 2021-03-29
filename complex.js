var Complex = /** @class */ (function () {
    function Complex(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    Complex.prototype.add = function (obj) {
        return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
    };
    Complex.prototype.substract = function (obj) {
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
    };
    Complex.prototype.modul = function () {
        return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
    };
    Complex.prototype.toString = function () {
        console.log('RE: ', this.real, ', ', "IM: ", this.imaginary);
    };
    return Complex;
}());
var a = new Complex(1, 2);
var b = new Complex(1, 2);
var add = a.add(b);
add.toString();
var substract = add.substract(a);
substract.toString();
var modul = substract.modul();
console.log(modul);
