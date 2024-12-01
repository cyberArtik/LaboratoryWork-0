import { Queue } from "./QueueClasses/Queue";
import { Dineable } from "./ServingClasses/Interfaces/Dineable";
import { Car } from "./Car/Car";
import { Refuelable } from "./ServingClasses/Interfaces/Refuelable";

export class CarStation {
  private diningService: Dineable;
  private refuelingService: Refuelable;
  private queue: Queue<Car>;

  constructor(diningService: Dineable, refuelingService: Refuelable, queue: Queue<Car>) {
    this.diningService = diningService;
    this.refuelingService = refuelingService;
    this.queue = queue;
  }

  addCar(car: Car): void {
    this.queue.enqueue(car);
  }

  serveCars(): void {
    while (this.queue.size() > 0) {
      const car = this.queue.dequeue();
      if (car) {
        if (car.isDining) {
          this.diningService.serveDinner(car.id);
        }
        this.refuelingService.refuel(car.id);
      }
    }
  }
}
