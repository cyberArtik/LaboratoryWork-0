import { Queue } from "./QueueClasses/Queue";
import { Dineable } from "./ServingClasses/Interfaces/Dineable";
import { Refuelable } from "./ServingClasses/Interfaces/Refuelable";
import { Car } from "./Car/Car";
import { ServeData } from "./ServingClasses/ServeData";




export class CarStation {
  private diningService: Dineable;
  private refuelingService: Refuelable;
  private queue: Queue<Car>;

  constructor(diningService: Dineable, refuelingService: Refuelable, queue: Queue<Car>) {
    this.diningService = diningService;
    this.refuelingService = refuelingService;
    this.queue = queue;
  }

  serveCars(): void {
    while (this.queue.size() > 0) {
      console.log();
      const dequeuedCar = this.queue.dequeue();

      if (dequeuedCar) {
        // Serve at the dining station
        if (dequeuedCar.isDining) {
          this.diningService.serveDinner(dequeuedCar.id);
        } else {
          ServeData.incrementNotDining();
        }

        // Count passengers
        if (dequeuedCar.passengers === "PEOPLE") {
          ServeData.incrementPeopleAmount();
        } else {
          ServeData.incrementRobotsAmount();
        }

        // Refuel the car
        this.refuelingService.refuel(dequeuedCar.id);

        if (dequeuedCar.type === "ELECTRIC") {
          ServeData.incrementElectricConsumption(dequeuedCar.consumption);
        } else {
          ServeData.incrementGasConsumption(dequeuedCar.consumption);
        }

        console.log(`Car ${dequeuedCar.id} has been served`);
      }
    }
  }

  addCar(car: Car): void {
    this.queue.enqueue(car);
  }

  isEmpty(): boolean {
    return this.queue.size() === 0;
  }

  getDiningService(): Dineable {
    return this.diningService;
  }

  getRefuelingService(): Refuelable {
    return this.refuelingService;
  }
}
