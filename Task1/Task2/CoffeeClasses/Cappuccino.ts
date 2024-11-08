import { Coffee } from './Coffee';
import { Intensity } from '../EnumCharacteristics/Intensity';

export class Cappuccino extends Coffee {
    private mlOfMilk: number;

    get MlOfMilk(): number {
        return this.mlOfMilk;
    }

    constructor(intensity: Intensity, mlOfMilk: number) {
        super(intensity);
        this.coffeeName = "Cappuccino";
        this.mlOfMilk = mlOfMilk;
    }
}

export { Intensity };

