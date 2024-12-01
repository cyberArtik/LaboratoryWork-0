import { Dineable } from "./Interfaces/Dineable";
import { ServeData } from "./ServerData";

export class PeopleDinner implements Dineable {
  serveDinner(carId: number): void {
    console.log(`Serving dinner to PEOPLE from car ${carId}`);
    ServeData.incrementDining();
    ServeData.incrementPeopleAmount();
  }
}
