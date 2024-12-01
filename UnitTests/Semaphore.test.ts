import { CarStation } from "../src/CarStation";
import { PeopleDinner } from "../src/ServingClasses/PeopleDinner";
import { RobotDinner } from "../src/ServingClasses/RobotDinner";
import { GasStation } from "../src/ServingClasses/GasStation";
import { ElectricStation } from "../src/ServingClasses/ElectricStation";
import { LinkedListQueue } from "../src/QueueClasses/LinkedListQueue";
import { Semaphore } from "../src/Semaphore";
import { ParseJson } from "../src/ParseJson";
import { Car } from "../src/Car/Car";
import test, { beforeEach, describe } from "node:test";


describe("Semaphore Tests", () => {
  const stationGasPeople = new CarStation(new PeopleDinner(), new GasStation(), new LinkedListQueue<Car>());
  const stationGasRobots = new CarStation(new RobotDinner(), new GasStation(), new LinkedListQueue<Car>());
  const stationElectricPeople = new CarStation(new PeopleDinner(), new ElectricStation(), new LinkedListQueue<Car>());
  const stationElectricRobots = new CarStation(new RobotDinner(), new ElectricStation(), new LinkedListQueue<Car>());

  const jsonCar1 = `{"id": 1, "type": "GAS", "passengers": "PEOPLE", "isDining": false, "consumption": 17}`;
  const jsonCar2 = `{"id": 2, "type": "ELECTRIC", "passengers": "PEOPLE", "isDining": true, "consumption": 35}`;
  const jsonCar3 = `{"id": 3, "type": "GAS", "passengers": "PEOPLE", "isDining": false, "consumption": 48}`;
  const jsonCar4 = `{"id": 4, "type": "GAS", "passengers": "ROBOTS", "isDining": true, "consumption": 33}`;

  test("Parsing JSON to Car object", () => {
    const carQueueTest = new LinkedListQueue<Car>();
    const jsonData = [jsonCar1, jsonCar2, jsonCar3, jsonCar4];
    const expectedQueue = new LinkedListQueue<Car>();

    jsonData.forEach((data) => {
      ParseJson.toCar(new LinkedListQueue<string>().enqueue(data), carQueueTest);
    });

    expectedQueue.enqueue(new Car(1, "GAS", "PEOPLE", false, 17));
    expectedQueue.enqueue(new Car(2, "ELECTRIC", "PEOPLE", true, 35));
    expectedQueue.enqueue(new Car(3, "GAS", "PEOPLE", false, 48));
    expectedQueue.enqueue(new Car(4, "GAS", "ROBOTS", true, 33));

    let i = 0;
    while (carQueueTest.size() > 0) {
      const dequeuedTest = carQueueTest.dequeue();
      const expectedCar = expectedQueue.dequeue();
      expect(dequeuedTest).toEqual(expectedCar);
    }
  });

  test("Semaphore serving cars", () => {
    const carStations = [
      stationElectricPeople,
      stationElectricRobots,
      stationGasPeople,
      stationGasRobots,
    ];

    const semaphore = new Semaphore(carStations);
    const carQueueTest = new LinkedListQueue<Car>();
    const jsonData = [jsonCar1, jsonCar2, jsonCar3, jsonCar4];

    jsonData.forEach((data) => {
      ParseJson.toCar(new LinkedListQueue<string>().enqueue(data), carQueueTest);
    });

    semaphore.serveCars(carQueueTest);

    const expectedGasCars = 3;
    const expectedElectricCars = 1;
    const expectedRobots = 1;
    const expectedPeople = 3;
    const expectedDining = 2;
    const expectedNotDining = 2;
    const expectedElectricConsumption = 35;
    const expectedGasConsumption = 98;

    carStations.forEach((station) => {
      station.serveCars();
    });

    expect(ServeData.GasCars).toBe(expectedGasCars);
    expect(ServeData.ElectricCars).toBe(expectedElectricCars);
    expect(ServeData.AmountRobots).toBe(expectedRobots);
    expect(ServeData.AmountPeople).toBe(expectedPeople);
    expect(ServeData.AmountDining).toBe(expectedDining);
    expect(ServeData.AmountNotDining).toBe(expectedNotDining);
    expect(ServeData.GasConsumption).toBe(expectedGasConsumption);
    expect(ServeData.ElectricConsumption).toBe(expectedElectricConsumption);
  });
});
