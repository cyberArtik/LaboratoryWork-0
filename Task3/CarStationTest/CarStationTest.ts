import { CarStation } from "../CarStation";
import { ElectricStation } from "../ServingClasses/ElectricStation";
import { PeopleDinner } from "../ServingClasses/PeopleDinner";
import { CircularQueue } from "../QueueClasses/CircularQueue";
import { Car } from "../Car/Car";

class CarStationTest {
  private stationPeopleElectric: CarStation;
  private stationRobotsElectric: CarStation;
  private stationPeopleGas: CarStation;
  private simpleQueue: CircularQueue<Car>;

  constructor() {
    this.simpleQueue = new CircularQueue<Car>(10);
    this.stationPeopleElectric = new CarStation(new PeopleDinner(), new ElectricStation(), this.simpleQueue);
    this.stationRobotsElectric = new CarStation(new PeopleDinner(), new ElectricStation(), this.simpleQueue);
    this.stationPeopleGas = new CarStation(new PeopleDinner(), new ElectricStation(), this.simpleQueue);
  }

  addingCarsToStationQueueTest(): void {
    const car1 = new Car(1, "GAS", "PEOPLE", true, 33);
    const car2 = new Car(2, "GAS", "PEOPLE", false, 28);
    this.stationPeopleGas.addCar(car1);
    this.stationPeopleGas.addCar(car2);
    console.assert(this.simpleQueue.size() === 2, "Test failed: Queue size should be 2");
  }

  servingCarsFromStationQueueTest(): void {
    this.stationPeopleGas.serveCars();
    this.stationPeopleGas.serveCars();
    console.assert(this.simpleQueue.size() === 0, "Test failed: Queue size should be 0 after serving cars");
  }
}

const test = new CarStationTest();
test.addingCarsToStationQueueTest();
test.servingCarsFromStationQueueTest();
