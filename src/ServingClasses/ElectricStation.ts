import { Refuelable } from "./Interfaces/Refuelable";
import { ServeData } from "./ServeData";

export class ElectricStation implements Refuelable {
  refuel(carId: number): void {
    console.log(`Refueling ELECTRIC Car ${carId}`);
    ServeData.incrementElectricCars();
  }
}
