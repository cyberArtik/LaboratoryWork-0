import { Cappuccino, Intensity } from './Cappuccino';

export class PumpkinSpiceLatte extends Cappuccino {
    private mgOfPumpkinSpice: number;

    get MgOfPumpkinSpice(): number {
        return this.mgOfPumpkinSpice;
    }

    constructor(intensity: Intensity, mlOfMilk: number, mgOfPumpkinSpice: number) {
        super(intensity, mlOfMilk);
        this.coffeeName = "PumpkinSpiceLatte";
        this.mgOfPumpkinSpice = mgOfPumpkinSpice;
    }
}
