import { Cappuccino } from "./Cappuccino";
import { Intensity } from "../EnumCharacteristics/Intensity";
import { SyrupType } from "../EnumCharacteristics/SyrupType";

export class SyrupCappuccino extends Cappuccino {
    private syrup: SyrupType;

    constructor(intensity: Intensity, mlOfMilk: number, syrup: SyrupType) {
        super(intensity, mlOfMilk);
        this.coffeeName = "SyrupCappuccino";
        this.syrup = syrup;
    }

    public printCoffeeDetails(): void {
        super.printCoffeeDetails();
        console.log(`Syrup Cappuccino syrup type: ${SyrupType[this.syrup]}`);
    }
}
