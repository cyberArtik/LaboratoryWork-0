import promptSync from 'prompt-sync';

import { Americano } from './CoffeeClasses/Americano';
import { Cappuccino } from './CoffeeClasses/Cappuccino';
import { PumpkinSpiceLatte } from './CoffeeClasses/PumpkinSpiceLatte';
import { SyrupCappuccino } from './CoffeeClasses/SyrupCappuccino';
import Coffee from './CoffeeClasses/Coffee';
import Validator from './Validator';

const prompt = promptSync(); 


class Barista {
    private baristaName: string;
    private coffeeOrders: Coffee[] = [];

    constructor(baristaName: string) {
        this.baristaName = baristaName;
    }

    public requestCoffee(): void {
        console.log(`Hi there, I am ${this.baristaName}, your personal barista!`);
        const input: string[] = [];
        console.log("What would you like to drink, today?");
        
        let requestDone = false;
        while (!requestDone) {
            const tempInput = prompt("Enter coffee type: ");
            if (tempInput) {
                input.push(...Validator.filterInput(tempInput));
                console.log("\nCurrent request:", input.join(", "));
                const addMore = prompt("Would you like anything else? (y/N): ");
                requestDone = !(addMore && (addMore.toLowerCase() === 'y' || addMore.toLowerCase() === 'yes'));
            }
        }

        this.makeOrder(input);
    }

    private makeOrder(drinks: string[]): void {
        for (const drink of drinks) {
            console.log(`\nCurrent drink: ${drink}`);
            let coffee: Coffee | null = null;

            switch (drink.toLowerCase()) {
                case 'cappuccino':
                    const intensity = Validator.getIntensity();
                    const mlOfMilk = Validator.addExtra("MILK", "ml");
                    coffee = new Cappuccino(intensity, mlOfMilk).makeCappuccino();
                    break;
                case 'americano':
                    const americanoIntensity = Validator.getIntensity();
                    const mlOfWater = Validator.addExtra("WATER", "ml");
                    coffee = new Americano(americanoIntensity, mlOfWater).makeAmericano();
                    break;
                case 'pumpkinspicelatte':
                    const pumpkinIntensity = Validator.getIntensity();
                    const milkAmount = Validator.addExtra("MILK", "ml");
                    const spiceAmount = Validator.addExtra("PUMPKIN SPICE", "mg");
                    coffee = new PumpkinSpiceLatte(pumpkinIntensity, milkAmount, spiceAmount).makePumpkinSpiceLatte();
                    break;
                case 'syrupcappuccino':
                    const syrupIntensity = Validator.getIntensity();
                    const syrupMilkAmount = Validator.addExtra("MILK", "ml");
                    const syrupType = Validator.getSyrup();
                    coffee = new SyrupCappuccino(syrupIntensity, syrupMilkAmount, syrupType).makeSyrupCappuccino();
                    break;
                default:
                    console.log(`Apologies, but we do not serve ${drink} yet.`);
            }

            if (coffee) this.coffeeOrders.push(coffee);
        }
    }

    public viewOrderDetails(): void {
        if (this.coffeeOrders.length === 0) {
            console.log("No coffee orders have been requested!");
            return;
        }

        const viewDetails = prompt("Would you like to view your order's details? (Y/n): ");
        if (viewDetails && (viewDetails.toLowerCase() === 'y' || viewDetails.toLowerCase() === 'yes')) {
            console.clear();
            this.coffeeOrders.forEach((order, index) => {
                console.log(`\nOrder Nr.${index + 1}:`);
                order.printCoffeeDetails();
            });
            console.log("\nHere you go.... Enjoy! :D");
        }
    }
}

export default Barista;
