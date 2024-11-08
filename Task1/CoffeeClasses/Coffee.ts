import { Intensity } from '../EnumCharacteristics/Intensity';

export class Coffee {
    private coffeeIntensity: Intensity;
    protected coffeeName: string;

    get CoffeeIntensity(): Intensity {
        return this.coffeeIntensity;
    }

    get CoffeeName(): string {
        return this.coffeeName;
    }

    constructor(intensity: Intensity) {
        this.coffeeName = "Coffee";
        this.coffeeIntensity = intensity;
    }
}
