import { Refuelable } from "./Interfaces/Refuelable";
import { ServeData } from "./ServerData";


export class ElectricStation implements Refuelable {
  refuel(carId: number): void {
    console.log(`Refueling ELECTRIC Car ${carId}`);
    ServeData.incrementElectricCars();
  }
}
