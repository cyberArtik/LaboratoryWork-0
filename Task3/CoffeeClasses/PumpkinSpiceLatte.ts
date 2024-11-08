import { Cappuccino } from "./Cappuccino";
import { Intensity } from "../EnumCharacteristics/Intensity";

export class PumpkinSpiceLatte extends Cappuccino {
    private mgOfPumpkinSpice: number;

    constructor(intensity: Intensity, mlOfMilk: number, mgOfPumpkinSpice: number) {
        super(intensity, mlOfMilk);
        this.coffeeName = "Pumpkin Spice Latte";
        this.mgOfPumpkinSpice = mgOfPumpkinSpice;
    }

    public printCoffeeDetails(): void {
        super.printCoffeeDetails();
        console.log(`Pumpkin Spice Latte pumpkin-spice: ${this.mgOfPumpkinSpice}`);
    }

    public makePumpkinSpiceLatte(): this {
        this.makeCappuccino();
        console.log(`Adding ${this.mgOfPumpkinSpice} mg of pumpkin spice`);
        return this;
    }
}
