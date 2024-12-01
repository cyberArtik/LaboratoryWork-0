import { ServeData } from "./ServerData";
import { Refuelable } from "./Interfaces/Refuelable";

export class GasStation implements Refuelable {
  refuel(carId: number): void {
    console.log(`Refueling GAS Car ${carId}`);
    ServeData.incrementGasCars();
  }
}
