import { ElectricStation } from "./ServingClasses/ElectricStation";
import { GasStation } from "./ServingClasses/GasStation";
import { PeopleDinner } from "./ServingClasses/PeopleDinner";
import { RobotDinner } from "./ServingClasses/RobotDinner";
import { LinkedListQueue } from "./QueueClasses/LinkedListQueue";
import { ServeData } from "./ServingClasses/ServeData";

import { CarStation } from "./CarStation";
import { Semaphore } from "./Semaphore";
import { ParseJson } from "./ParseJson";
import { Car } from "./Car/Car";


const addingCarsToRightStation = (carQueue: LinkedListQueue<Car>, semaphore: Semaphore): void => {
  const files = ["path/to/json1.json", "path/to/json2.json"]; 
  files.forEach((file) => {
    const jsonData = new LinkedListQueue<string>();
    jsonData.enqueue(file);
    ParseJson.toCar(jsonData, carQueue);

    semaphore.serveCars(carQueue);
  });
};

const servingTheCarsFromStations = (carStations: CarStation[]): void => {
  let areCarsEnqueued = true;
  while (areCarsEnqueued) {
    let emptyStations = 0;

    carStations.forEach((station) => {
      if (station.isEmpty()) {
        emptyStations++;
        return;
      }

      station.serveCars();
    });

    if (emptyStations === carStations.length) {
      areCarsEnqueued = false;
    }
  }

  ServeData.overview();
};

const main = (): void => {
  console.log("Time to deal with some cars...");

  const carStations: CarStation[] = [
    new CarStation(new PeopleDinner(), new GasStation(), new LinkedListQueue<Car>()),
    new CarStation(new RobotDinner(), new GasStation(), new LinkedListQueue<Car>()),
    new CarStation(new PeopleDinner(), new ElectricStation(), new LinkedListQueue<Car>()),
    new CarStation(new RobotDinner(), new ElectricStation(), new LinkedListQueue<Car>()),
  ];

  const semaphore = new Semaphore(carStations);
  const carQueue = new LinkedListQueue<Car>();

  setInterval(() => addingCarsToRightStation(carQueue, semaphore), 2000);
  setInterval(() => servingTheCarsFromStations(carStations), 9000);
};

main();
