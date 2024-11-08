import promptSync from 'prompt-sync';
import { Intensity } from './EnumCharacteristics/Intensity';
import {SyrupType} from './EnumCharacteristics/SyrupType'

const prompt = promptSync();

class Validator {
    static filterInput(input: string): string[] {
        const inputArray = input.split(/[!\"#\$%&'()*+,-./:;?@\[\\\]^_`{|}~\s]+/);
        return inputArray.filter(s => s.length > 0);
    }

    static getIntensity(): Intensity {
        while (true) {
            const intensityInput = prompt("Set intensity (1. LIGHT, 2. NORMAL, 3. STRONG): ");
            const choice = parseInt(intensityInput);
            switch (choice) {
                case 1:
                    return Intensity.LIGHT;
                case 2:
                    return Intensity.NORMAL;
                case 3:
                    return Intensity.STRONG;
                default:
                    console.log("Invalid choice. Please try again.");
            }
        }
    }

    static getSyrup(): SyrupType {
        while (true) {
            const syrupInput = prompt("Set syrup type (1. MACADAMIA, 2. VANILLA, 3. COCONUT, 4. CARAMEL, 5. CHOCOLATE, 6. POPCORN): ");
            const choice = parseInt(syrupInput);
            switch (choice) {
                case 1:
                    return SyrupType.MACADAMIA;
                case 2:
                    return SyrupType.VANILLA;
                case 3:
                    return SyrupType.COCONUT;
                case 4:
                    return SyrupType.CARAMEL;
                case 5:
                    return SyrupType.CHOCOLATE;
                case 6:
                    return SyrupType.POPCORN;
                default:
                    console.log("Invalid choice. Please try again.");
            }
        }
    }

    static addExtra(type: string, mUnit: string): number {
        while (true) {
            const input = prompt(`Set amount of ${type} to be added, in ${mUnit}: `);
            const amount = parseInt(input);
            if (!isNaN(amount)) return amount;
            console.log("Invalid input. Please enter a number.");
        }
    }
}

export default Validator;
