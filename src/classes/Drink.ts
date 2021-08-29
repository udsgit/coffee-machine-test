export class Drink {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name.toUpperCase();
        this.price = price;
    }


}