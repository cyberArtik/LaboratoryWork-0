import { ElectricStation } from "../src/ServingClasses/ElectricStation";
import { GasStation } from "../src/ServingClasses/GasStation";
import { CircularQueue } from "../src/QueueClasses/CircularQueue";
import { LinkedListQueue } from "../src/QueueClasses/LinkedListQueue";
import { Car } from "../src/Car/Car";
import { CarStation } from "../src/CarStation";
import { PeopleDinner } from "../src/ServingClasses/PeopleDinner";
import { RobotDinner } from "../src/ServingClasses/RobotDinner";

import { describe, test, expect, beforeEach } from "@jest/globals";



describe("CarStation Tests", () => {
  let stationPeopleElectric: CarStation;
  let stationRobotsElectric: CarStation;
  let stationPeopleGas: CarStation;
  let simpleQueue: LinkedListQueue<Car>;

  beforeEach(() => {
    simpleQueue = new LinkedListQueue<Car>();
    stationPeopleElectric = new CarStation(new PeopleDinner(), new ElectricStation(), simpleQueue);
    stationRobotsElectric = new CarStation(new RobotDinner(), new ElectricStation(), new CircularQueue<Car>(10));
    stationPeopleGas = new CarStation(new PeopleDinner(), new GasStation(), simpleQueue);
  });

  test("Adding cars to the station queue", () => {
    const car1 = new Car(1, "GAS", "PEOPLE", true, 33);
    const car2 = new Car(2, "GAS", "PEOPLE", false, 28);

    stationPeopleGas.addCar(car1);
    stationPeopleGas.addCar(car2);

    expect(simpleQueue.size()).toBe(2);
  });

  test("Serving cars from the station queue", () => {
    stationPeopleGas.serveCars();

    expect(simpleQueue.size()).toBe(0);
  });
});


