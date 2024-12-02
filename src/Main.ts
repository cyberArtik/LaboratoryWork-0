import * as fs from "fs";
import * as path from "path";

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
  const directoryPath = path.join(__dirname, "..", "JSON", "queue");

  const files = fs.readdirSync(directoryPath).filter((file) => file.endsWith(".json"));

  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const dataQueue = new LinkedListQueue<string>();
    dataQueue.enqueue(jsonData);

    ParseJson.toCar(dataQueue, carQueue);

    fs.unlinkSync(filePath);

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
