import { ServeData } from "./ServeData";
import { Refuelable } from "./Interfaces/Refuelable";

export class ElectricStation implements Refuelable {
  refuel(carId: number): void {
    console.log(`Refueling ELECTRIC Car ${carId}`);
    ServeData.incrementElectricCars();
  }
}
