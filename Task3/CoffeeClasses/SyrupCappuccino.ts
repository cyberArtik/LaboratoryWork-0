import { Cappuccino } from "./Cappuccino";
import { Intensity } from "../EnumCharacteristics/Intensity";
import { SyrupType } from "../EnumCharacteristics/SyrupType";

export class SyrupCappuccino extends Cappuccino {
    private syrup: SyrupType;

    constructor(intensity: Intensity, mlOfMilk: number, syrup: SyrupType) {
        super(intensity, mlOfMilk);
        this.coffeeName = "Syrup Cappuccino";
        this.syrup = syrup;
    }

    public printCoffeeDetails(): void {
        super.printCoffeeDetails();
        console.log(`Syrup Cappuccino syrup type: ${this.syrup}`);
    }

    public makeSyrupCappuccino(): this {
        this.makeCappuccino();
        console.log(`Adding some ${this.syrup} syrup`);
        return this;
    }
}
