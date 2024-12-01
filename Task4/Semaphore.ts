import { CarStation } from "./CarStation";
import { Car } from "./Car/Car";
import { GasStation } from "./ServingClasses/GasStation";
import { ElectricStation } from "./ServingClasses/ElectricStation";
import { PeopleDinner } from "./ServingClasses/PeopleDinner";
import { RobotDinner } from "./ServingClasses/RobotDinner";
import { Queue } from "./QueueClasses/Queue";
import { LinkedListQueue } from "./QueueClasses/LinkedListQueue";

export class Semaphore {
  private carStations: CarStation[];

  constructor(carStations: CarStation[]) {
    this.carStations = carStations;
  }

  // Get all car stations
  getCarStations(): CarStation[] {
    return this.carStations;
  }

  // Lead cars to the correct station based on their type and passengers
  private leadToRightStation(car: Car): void {
    for (const station of this.carStations) {
      if (car.type === "GAS" && car.passengers === "PEOPLE" && station.GetRefulingService() instanceof GasStation && station.GetDiningService() instanceof PeopleDinner) {
        station.addCar(car);
        break;
      } else if (car.type === "GAS" && car.passengers === "ROBOTS" && station.GetRefulingService() instanceof GasStation && station.GetDiningService() instanceof RobotDinner) {
        station.addCar(car);
        break;
      } else if (car.type === "ELECTRIC" && car.passengers === "ROBOTS" && station.GetRefulingService() instanceof ElectricStation && station.GetDiningService() instanceof RobotDinner) {
        station.addCar(car);
        break;
      } else if (car.type === "ELECTRIC" && car.passengers === "PEOPLE" && station.GetRefulingService() instanceof ElectricStation && station.GetDiningService() instanceof PeopleDinner) {
        station.addCar(car);
        break;
      }
    }
  }

  // Serve the cars by guiding them to the correct station
  public serveCars(carsForServing: LinkedListQueue<Car>): void {
    while (carsForServing.size() > 0) {
      this.leadToRightStation(carsForServing.dequeue() as Car);
    }
  }
}
