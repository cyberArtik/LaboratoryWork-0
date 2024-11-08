// Main.ts
import { Coffee } from "./CoffeeClasses/Coffee";
import { Cappuccino } from "./CoffeeClasses/Cappuccino";
import { Americano } from "./CoffeeClasses/Americano";
import { PumpkinSpiceLatte } from "./CoffeeClasses/PumpkinSpiceLatte";
import { SyrupCappuccino } from "./CoffeeClasses/SyrupCappuccino";
import { Intensity } from "./EnumCharacteristics/Intensity";
import { SyrupType } from "./EnumCharacteristics/SyrupType";

function main() {
    let coffee = new Coffee(Intensity.STRONG);
    coffee.printCoffeeDetails();

    let cappuccino = new Cappuccino(Intensity.NORMAL, 50);
    cappuccino.printCoffeeDetails();

    let americano = new Americano(Intensity.NORMAL, 40);
    americano.printCoffeeDetails();

    let pumpkinSpiceLatte = new PumpkinSpiceLatte(Intensity.LIGHT, 70, 30);
    pumpkinSpiceLatte.printCoffeeDetails();

    let syrupCappuccino = new SyrupCappuccino(Intensity.LIGHT, 50, SyrupType.CHOCOLATE);
    syrupCappuccino.printCoffeeDetails();
}

main();
