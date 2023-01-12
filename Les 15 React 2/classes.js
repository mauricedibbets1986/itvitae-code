class Car {
    constructor(merk, kleur, jaar = 2023) {
        this.merk = merk;
        this.kleur = kleur;
        this.jaar = jaar;
    }
}

let myCar = new Car("Mercedes", "blauw");

console.log(myCar);
console.log(myCar.kleur);
console.log(myCar.jaar);