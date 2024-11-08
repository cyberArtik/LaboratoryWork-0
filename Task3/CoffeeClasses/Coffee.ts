import { Intensity } from "../EnumCharacteristics/Intensity";

export abstract class Coffee {
    protected coffeeIntensity: Intensity;
    protected coffeeName: string;

    constructor(intensity: Intensity) {
        this.coffeeIntensity = intensity;
        this.coffeeName = "Coffee";
    }

    public printCoffeeDetails(): void {
        console.log(`${this.coffeeName} intensity: ${this.coffeeIntensity}`);
    }

    protected makeCoffee(): this {
        console.log(`Making ${this.coffeeName}`);
        console.log(`Intensity set to ${this.coffeeIntensity}`);
        return this;
    }
}
