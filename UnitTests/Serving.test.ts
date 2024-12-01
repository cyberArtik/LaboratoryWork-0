import { RobotDinner } from "../src/ServingClasses/RobotDinner";
import { PeopleDinner } from "../src/ServingClasses/PeopleDinner";
import { ElectricStation } from "../src/ServingClasses/ElectricStation";
import { GasStation } from "../src/ServingClasses/GasStation";
import { ServeData } from "../src/ServingClasses/ServeData";

describe("Serving Tests", () => {
  let robotDinner: RobotDinner;
  let peopleDinner: PeopleDinner;
  let electricStation: ElectricStation;
  let gasStation: GasStation;

  beforeEach(() => {
    robotDinner = new RobotsDiner();
    peopleDinner = new PeopleDiner();
    electricStation = new ElectricStation();
    gasStation = new GasStation();
  });

  test("Amount of entities dining", () => {
    robotDinner.serveDinner(1);
    robotDinner.serveDinner(2);
    robotDinner.serveDinner(3);
    robotDinner.serveDinner(4);
    peopleDinner.serveDinner(5);
    peopleDinner.serveDinner(6);

    expect(ServeData.AmountDining).toBe(6);
    ServeData.resetData();
  });

  test("Amount of entities not dining", () => {
    robotDinner.serveDinner(1);
    ServeData.incrementNotDining();
    ServeData.incrementNotDining();
    ServeData.incrementNotDining();
    peopleDinner.serveDinner(5);
    peopleDinner.serveDinner(6);

    expect(ServeData.AmountNotDining).toBe(3);
    ServeData.resetData();
  });

  test("Refueling electric cars", () => {
    electricStation.refuel(1);
    electricStation.refuel(2);
    electricStation.refuel(3);
    electricStation.refuel(4);

    expect(ServeData.ElectricCars).toBe(4);
  });

  test("Refueling gas cars", () => {
    gasStation.refuel(5);
    gasStation.refuel(6);
    gasStation.refuel(7);
    gasStation.refuel(8);

    expect(ServeData.GasCars).toBe(4);
  });

  test("Consumption of gas cars", () => {
    ServeData.incrementGasConsumption(10);
    ServeData.incrementGasConsumption(10);
    ServeData.incrementGasConsumption(10);

    expect(ServeData.GasConsumption).toBe(30);
  });

  test("Consumption of electric cars", () => {
    ServeData.incrementElectricConsumption(10);
    ServeData.incrementElectricConsumption(10);
    ServeData.incrementElectricConsumption(10);

    expect(ServeData.ElectricConsumption).toBe(30);
  });
});
