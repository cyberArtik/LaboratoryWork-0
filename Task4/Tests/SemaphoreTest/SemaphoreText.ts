import { Semaphore } from "../../Semaphore";
import { CarStation } from "../../CarStation";
import { ElectricStation } from "../../ServingClasses/ElectricStation";
import { GasStation } from "../../ServingClasses/GasStation";
import { PeopleDinner } from "../../ServingClasses/PeopleDinner";
import { RobotDinner } from "../../ServingClasses/RobotDinner";
import { LinkedListQueue } from "../../QueueClasses/LinkedListQueue";
import { ParseJson } from "../../ParseJson";
import { Car } from "../../Car/Car";
import { ServeData } from "../../ServingClasses/ServeData";

class SemaphoreTest {
  private stationGasPeople: CarStation;
  private stationGasRobots: CarStation;
  private stationElectricPeople: CarStation;
  private stationElectricRobots: CarStation;
  private jsonCar1: string = `
  {
    "id": 1,
    "type": "GAS",
    "passengers": "PEOPLE",
    "isDining": false,
    "consumption": 17
  }`;
  private jsonCar2: string = `
  {
    "id": 2,
    "type": "ELECTRIC",
    "passengers": "PEOPLE",
    "isDining": true,
    "consumption": 35
  }`;
  private jsonCar3: string = `
  {
    "id": 3,
    "type": "GAS",
    "passengers": "PEOPLE",
    "isDining": false,
    "consumption": 48
  }`;
  private jsonCar4: string = `
  {
    "id": 4,
    "type": "GAS",
    "passengers": "ROBOTS",
    "isDining": true,
    "consumption": 33
  }`;

  constructor() {
    this.stationGasPeople = new CarStation(new PeopleDinner(), new GasStation(), new LinkedListQueue<Car>());
    this.stationGasRobots = new CarStation(new RobotDinner(), new GasStation(), new LinkedListQueue<Car>());
    this.stationElectricPeople = new CarStation(new PeopleDinner(), new ElectricStation(), new LinkedListQueue<Car>());
    this.stationElectricRobots = new CarStation(new RobotDinner(), new ElectricStation(), new LinkedListQueue<Car>());
  }

  // Test: Parsing JSON to Car objects
  public parsingJsonToCarObjTest(): void {
    const carQueueTest = new LinkedListQueue<Car>();
    const jsonData = new LinkedListQueue<string>();
    jsonData.enqueue(this.jsonCar1);
    jsonData.enqueue(this.jsonCar2);
    jsonData.enqueue(this.jsonCar3);
    jsonData.enqueue(this.jsonCar4);
    
    ParseJson.toCar(jsonData, carQueueTest);

    const carQueueExpected = new LinkedListQueue<Car>();
    carQueueExpected.enqueue(new Car(1, "GAS", "PEOPLE", false, 17));
    carQueueExpected.enqueue(new Car(2, "ELECTRIC", "PEOPLE", true, 35));
    carQueueExpected.enqueue(new Car(3, "GAS", "PEOPLE", false, 48));
    carQueueExpected.enqueue(new Car(4, "GAS", "ROBOTS", true, 33));

    while (carQueueTest.size() > 0) {
      const dequeuedTest = carQueueTest.dequeue();
      const expectedCar = carQueueExpected.dequeue();
      if (dequeuedTest && expectedCar) {
        console.assert(dequeuedTest.id === expectedCar.id);
        console.assert(dequeuedTest.type === expectedCar.type);
        console.assert(dequeuedTest.passengers === expectedCar.passengers);
        console.assert(dequeuedTest.isDining === expectedCar.isDining);
        console.assert(dequeuedTest.consumption === expectedCar.consumption);
      }
    }
  }

  // Test: Semaphore serving cars
  public semaphoreServingCarsTest(): void {
    const carStations = [this.stationElectricPeople, this.stationElectricRobots, this.stationGasPeople, this.stationGasRobots];
    const semaphore = new Semaphore(carStations);

    const carQueueTest = new LinkedListQueue<Car>();
    const jsonData = new LinkedListQueue<string>();
    jsonData.enqueue(this.jsonCar1);
    jsonData.enqueue(this.jsonCar2);
    jsonData.enqueue(this.jsonCar3);
    jsonData.enqueue(this.jsonCar4);
    
    ParseJson.toCar(jsonData, carQueueTest);
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

    console.assert(ServeData.gasCars === expectedGasCars);
    console.assert(ServeData.electricCars === expectedElectricCars);
    console.assert(ServeData.amountRobots === expectedRobots);
    console.assert(ServeData.amountPeople === expectedPeople);
    console.assert(ServeData.amountDining === expectedDining);
    console.assert(ServeData.amountNotDining === expectedNotDining);
    console.assert(ServeData.gasConsumption === expectedGasConsumption);
    console.assert(ServeData.electricConsumption === expectedElectricConsumption);
  }
}

// Running tests
const test = new SemaphoreTest();
test.parsingJsonToCarObjTest();
test.semaphoreServingCarsTest();
