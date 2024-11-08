import { Coffee } from './Coffee';
import { Intensity } from '../EnumCharacteristics/Intensity';

export class Americano extends Coffee {
    private mlOfWater: number;

    get MlOfWater(): number {
        return this.mlOfWater;
    }

    constructor(intensity: Intensity, mlOfWater: number) {
        super(intensity);
        this.coffeeName = "Americano";
        this.mlOfWater = mlOfWater;
    }
}
