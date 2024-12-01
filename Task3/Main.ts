import { CircularQueue } from "./QueueClasses/CircularQueue";
import { Car } from "./Car/Car";
import { ElectricStation } from "./ServingClasses/ElectricStation";
import { PeopleDinner } from "./ServingClasses/PeopleDinner";

import { CarStation } from "./CarStation";

const main = () => {
  const diningService = new PeopleDinner();
  const refuelingService = new ElectricStation();
  const queue = new CircularQueue<Car>(5);

  const carStation = new CarStation(diningService, refuelingService, queue);

  carStation.addCar(new Car(1, "ELECTRIC", "PEOPLE", true, 20));
  carStation.addCar(new Car(2, "ELECTRIC", "ROBOTS", false, 15));

  carStation.serveCars();
};

main();
