import { Queue } from "./QueueClasses/Queue";
import {Dineable} from "./ServingClasses/Interfaces/Dineable"
import {Refuelable} from "./ServingClasses/Interfaces/Refuelable"
import { Car } from "./Car/Car";
import {ServeData} from './ServingClasses/ServeData'

export class CarStation {
  private diningService: Dineable;
  private refuelingService: Refuelable;
  private queue: Queue<Car>;

  constructor(diningService: Dineable, refuelingService: Refuelable, queue: Queue<Car>) {
    this.diningService = diningService;
    this.refuelingService = refuelingService;
    this.queue = queue;
  }

  // Add car to the station's queue
  addCar(car: Car): void {
    this.queue.enqueue(car);
  }

  // Serve cars from the station's queue
  serveCars(): void {
    while (this.queue.size() > 0) {
      const car = this.queue.dequeue();
      if (car) {
        // Serve dinner if needed
        if (car.isDining) {
          this.diningService.serveDinner(car.id);
        } else {
          ServeData.incrementNotDining();
        }

        // Increment the type of passengers (People or Robots)
        if (car.passengers === "PEOPLE") {
          ServeData.incrementPeopleAmount();
        } else {
          ServeData.incrementRobotsAmount();
        }

        // Refuel the car
        this.refuelingService.refuel(car.id);

        // Track the consumption based on car type
        if (car.type === "ELECTRIC") {
          ServeData.incrementElectricConsumption(car.consumption);
        } else {
          ServeData.incrementGasConsumption(car.consumption);
        }

        console.log(`Car ${car.id} has been served`);
      }
    }
  }
}
