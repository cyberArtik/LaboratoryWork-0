import { ServeData } from "./ServeData";
import { Dineable } from "./Interfaces/Dineable";

export class RobotDinner implements Dineable {
  serveDinner(carId: number): void {
    console.log(`Serving dinner to ROBOTS from car ${carId}`);
    ServeData.incrementDining();
    ServeData.incrementRobotsAmount();
  }
}
