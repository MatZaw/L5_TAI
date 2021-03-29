class Complex{
    private real: number;
    private imaginary: number;

    constructor(real: number, imaginary: number){
        this.real = real;
        this.imaginary = imaginary;
    }

    add(obj: Complex): Complex{
        return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
    }

    substract(obj: Complex): Complex{
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
    }
    modul(): number{
        return Math.sqrt(this.real*this.real + this.imaginary*this.imaginary);
    }
    toString(){
        console.log('RE: ', this.real, ', ', "IM: ", this.imaginary);
    }
}
let a = new Complex(1,2);
let b = new Complex(1,2);

let add = a.add(b);
add.toString();

let substract = add.substract(a);
substract.toString();

let modul = substract.modul();
console.log(modul);