import { Dineable } from "./Interfaces/Dineable";
import { ServeData } from "./ServerData";

export class RobotDinner implements Dineable {
  serveDinner(carId: number): void {
    console.log(`Serving dinner to ROBOTS from car ${carId}`);
    ServeData.incrementDining();
    ServeData.incrementRobotsAmount();
  }
}
