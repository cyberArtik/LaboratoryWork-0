import { Refuelable } from "./Interfaces/Refuelable";
import { ServeData } from "./ServeData";

export class GasStation implements Refuelable {
  refuel(carId: number): void {
    console.log(`Refueling GAS Car ${carId}`);
    ServeData.incrementGasCars();
  }
}
