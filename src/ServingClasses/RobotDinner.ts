import { Dineable } from "./Interfaces/Dineable";
import { ServeData } from "./ServeData";

export class RobotDinner implements Dineable {
  serveDinner(carId: number): void {
    console.log(`Serving dinner to ROBOTS from car ${carId}`);
    ServeData.incrementDining();
  }
}
