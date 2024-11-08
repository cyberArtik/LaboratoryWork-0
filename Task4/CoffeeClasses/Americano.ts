import { Coffee } from "./Coffee";
import { Intensity } from "../EnumCharacteristics/Intensity";

export class Americano extends Coffee {
    private mlOfWater: number;

    constructor(intensity: Intensity, mlOfWater: number) {
        super(intensity);
        this.coffeeName = "Americano";
        this.mlOfWater = mlOfWater;
    }

    public printCoffeeDetails(): void {
        super.printCoffeeDetails();
        console.log(`Americano water: ${this.mlOfWater}`);
    }

    public makeAmericano(): this {
        this.makeCoffee();
        console.log(`Adding ${this.mlOfWater} mls of water`);
        return this;
    }
}
