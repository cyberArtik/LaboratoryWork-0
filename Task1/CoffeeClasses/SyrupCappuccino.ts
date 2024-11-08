import { Cappuccino } from "./Cappuccino";
import { SyrupType } from "../EnumCharacteristics/SyrupType";
import { Intensity } from "../EnumCharacteristics/Intensity";

export class SyrupCappuccino extends Cappuccino {
    private syrup: SyrupType;

    public get Syrup(): SyrupType {
        return this.syrup;
    }

    constructor(intensity: Intensity, mlOfMilk: number, syrup: SyrupType) {
        super(intensity, mlOfMilk);
        this.coffeeName = "SyrupCappuccino";
        this.syrup = syrup;
    }
}