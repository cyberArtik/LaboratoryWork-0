import { Coffee } from "./Coffee";
import { Intensity } from "../EnumCharacteristics/Intensity";

export class Cappuccino extends Coffee {
    private mlOfMilk: number;

    constructor(intensity: Intensity, mlOfMilk: number) {
        super(intensity);
        this.coffeeName = "Cappuccino";
        this.mlOfMilk = mlOfMilk;
    }

    public printCoffeeDetails(): void {
        super.printCoffeeDetails();
        console.log(`Cappuccino milk: ${this.mlOfMilk}`);
    }
}
