import { CarType } from "./CarType";
import { PassengersType } from "./PassengersType";

export class Car {
  id: number;
  type: CarType;
  passengers: PassengersType;
  isDining: boolean;
  consumption: number;

  constructor(
    id: number,
    type: string,
    passengers: string,
    isDining: boolean,
    consumption: number
  ) {
    this.id = id;
    this.type = type === "ELECTRIC" ? CarType.ELECTRIC : CarType.GAS;
    this.passengers =
      passengers === "ROBOTS" ? PassengersType.ROBOTS : PassengersType.PEOPLE;
    this.isDining = isDining;
    this.consumption = consumption;
  }
}
