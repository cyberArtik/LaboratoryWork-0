import { Intensity } from "../EnumCharacteristics/Intensity";

export class Coffee {
    private coffeeIntensity: Intensity;
    protected coffeeName: string;

    constructor(intensity: Intensity) {
        this.coffeeName = "Coffee";
        this.coffeeIntensity = intensity;
    }

    public printCoffeeDetails(): void {
        console.log(`${this.coffeeName} intensity: ${Intensity[this.coffeeIntensity]}`);
    }
}
