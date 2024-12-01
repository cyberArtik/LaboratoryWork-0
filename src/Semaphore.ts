import { Car } from "./Car/Car";
import { CarStation } from "./CarStation";
import { LinkedListQueue } from "./QueueClasses/LinkedListQueue";
import { ElectricStation } from "./ServingClasses/ElectricStation";
import { GasStation } from "./ServingClasses/GasStation";
import { PeopleDinner } from "./ServingClasses/PeopleDinner";
import { RobotDinner } from "./ServingClasses/RobotDinner";

export class Semaphore {
  private carStations: CarStation[];

  constructor(carStations: CarStation[]) {
    this.carStations = carStations;
  }

  private leadToRightStation(car: Car): void {
    for (const station of this.carStations) {
      if (
        car.type === "GAS" &&
        car.passengers === "PEOPLE" &&
        station.getRefuelingService() instanceof GasStation &&
        station.getDiningService() instanceof PeopleDinner
      ) {
        console.log(`Adding Car ${car.id}, to the GAS station for PEOPLE`);
        station.addCar(car);
        break;
      } else if (
        car.type === "GAS" &&
        car.passengers === "ROBOTS" &&
        station.getRefuelingService() instanceof GasStation &&
        station.getDiningService() instanceof RobotDinner
      ) {
        console.log(`Adding Car ${car.id}, to the GAS station for ROBOTS`);
        station.addCar(car);
        break;
      } else if (
        car.type === "ELECTRIC" &&
        car.passengers === "ROBOTS" &&
        station.getRefuelingService() instanceof ElectricStation &&
        station.getDiningService() instanceof RobotDinner
      ) {
        console.log(`Adding Car ${car.id}, to the ELECTRIC station for ROBOTS`);
        station.addCar(car);
        break;
      } else if (
        car.type === "ELECTRIC" &&
        car.passengers === "PEOPLE" &&
        station.getRefuelingService() instanceof ElectricStation &&
        station.getDiningService() instanceof PeopleDinner
      ) {
        console.log(`Adding Car ${car.id}, to the ELECTRIC station for PEOPLE`);
        station.addCar(car);
        break;
      }
    }
  }

  serveCars(carsForServing: LinkedListQueue<Car>): void {
    while (carsForServing.size() > 0) {
      const car = carsForServing.dequeue();
      if (car) {
        this.leadToRightStation(car);
      }
    }
  }
}
