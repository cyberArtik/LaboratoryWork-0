import { Intensity } from "./EnumCharacteristics/Intensity";
import { SyrupType } from "./EnumCharacteristics/SyrupType";
import { Cappuccino } from "./CoffeeClasses/Cappuccino";
import { Americano } from "./CoffeeClasses/Americano";
import { PumpkinSpiceLatte } from "./CoffeeClasses/PumpkinSpiceLatte";
import { SyrupCappuccino } from "./CoffeeClasses/SyrupCappuccino";

let cappuccino = new Cappuccino(Intensity.NORMAL, 50).makeCappuccino();
cappuccino.printCoffeeDetails();
console.log();

let americano = new Americano(Intensity.NORMAL, 40).makeAmericano();
americano.printCoffeeDetails();
console.log();

let pumpkinSpiceLatte = new PumpkinSpiceLatte(Intensity.LIGHT, 70, 30).makePumpkinSpiceLatte();
pumpkinSpiceLatte.printCoffeeDetails();
console.log();

let syrupCappuccino = new SyrupCappuccino(Intensity.LIGHT, 50, SyrupType.CHOCOLATE).makeSyrupCappuccino();
syrupCappuccino.printCoffeeDetails();
console.log();
