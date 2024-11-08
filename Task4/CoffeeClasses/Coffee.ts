import { Intensity } from "../EnumCharacteristics/Intensity";

abstract class Coffee {
    protected coffeeIntensity: Intensity;
    protected coffeeName: string | undefined;

    constructor(intensity: Intensity) {
        this.coffeeIntensity = intensity;
    }

    protected makeCoffee(): this {
        console.log(`\nMaking ${this.coffeeName}`);
        console.log(`Intensity set to ${this.coffeeIntensity}`);
        return this;
    }

    public printCoffeeDetails(): void {
        console.log(`${this.coffeeName}`);
        console.log(`Coffee intensity: ${this.coffeeIntensity}`);
    }
}

export default Coffee;
