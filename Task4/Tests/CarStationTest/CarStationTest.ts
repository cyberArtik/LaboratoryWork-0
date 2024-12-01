import { SimpleQueue } from "../../QueueClasses/SimpleQueue";
import { CircularQueue } from "../../QueueClasses/CircularQueue";
import { CarStation } from "../../CarStation";
import { ElectricStation } from "../../ServingClasses/ElectricStation";
import { GasStation } from "../../ServingClasses/GasStation";
import { PeopleDinner } from "../../ServingClasses/PeopleDinner";
import { RobotDinner } from "../../ServingClasses/RobotDinner";
import { Car } from "../../Car/Car";



export class CarStationTest {
  private stationPeopleElectric: CarStation;
  private stationRobotsElectric: CarStation;
  private stationPeopleGas: CarStation;
  private simpleQueue: SimpleQueue<Car>;

  constructor() {
    this.simpleQueue = new SimpleQueue<Car>();
    this.stationPeopleElectric = new CarStation(new PeopleDinner(), new ElectricStation(), this.simpleQueue);
    this.stationRobotsElectric = new CarStation(new RobotDinner(), new ElectricStation(), new CircularQueue<Car>(10));
    this.stationPeopleGas = new CarStation(new PeopleDinner(), new GasStation(), this.simpleQueue);
  }

  // Test: Adding cars to the queue
  public addingCarsToStationQueueTest(): void {
    const car1 = new Car(1, "GAS", "PEOPLE", true, 33);
    const car2 = new Car(2, "GAS", "PEOPLE", false, 28);
    this.stationPeopleGas.addCar(car1);
    this.stationPeopleGas.addCar(car2);
    console.assert(this.simpleQueue.size() === 2);
  }

  // Test: Serving cars from the queue
  public servingCarsFromStationQueueTest(): void {
    this.stationPeopleGas.serveCars();
    this.stationPeopleGas.serveCars();
    console.assert(this.simpleQueue.size() === 0);
  }
}

// Running tests
const test = new CarStationTest();
test.addingCarsToStationQueueTest();
test.servingCarsFromStationQueueTest();
