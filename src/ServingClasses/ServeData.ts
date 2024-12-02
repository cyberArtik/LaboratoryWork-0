export class ServeData {
  private static gasCars: number = 0;
  private static electricCars: number = 0;
  private static gasConsumption: number = 0;
  private static electricConsumption: number = 0;
  private static amountDining: number = 0;
  private static amountNotDining: number = 0;
  private static amountRobots: number = 0;
  private static amountPeople: number = 0;

  static get GasCars(): number {
    return this.gasCars;
  }

  static get ElectricCars(): number {
    return this.electricCars;
  }

  static get GasConsumption(): number {
    return this.gasConsumption;
  }

  static get ElectricConsumption(): number {
    return this.electricConsumption;
  }

  static get AmountDining(): number {
    return this.amountDining;
  }

  static get AmountNotDining(): number {
    return this.amountNotDining;
  }

  static get AmountRobots(): number {
    return this.amountRobots;
  }

  static get AmountPeople(): number {
    return this.amountPeople;
  }

  static incrementGasCars(): void {
    this.gasCars++;
  }

  static incrementElectricCars(): void {
    this.electricCars++;
  }

  static incrementGasConsumption(consumption: number): void {
    this.gasConsumption += consumption;
  }

  static incrementElectricConsumption(consumption: number): void {
    this.electricConsumption += consumption;
  }

  static incrementDining(): void {
    this.amountDining++;
  }

  static incrementNotDining(): void {
    this.amountNotDining++;
  }

  static incrementRobotsAmount(): void {
    this.amountRobots++;
  }

  static incrementPeopleAmount(): void {
    this.amountPeople++;
  }

  static resetData(): void {
    this.gasCars = 0;
    this.electricCars = 0;
    this.gasConsumption = 0;
    this.electricConsumption = 0;
    this.amountDining = 0;
    this.amountNotDining = 0;
    this.amountRobots = 0;
    this.amountPeople = 0;
  }

  static overview(): void {
    console.log("\nIn total we have served:");
    console.log(`\tELECTRIC cars - ${this.electricCars}, with a total consumption of ${this.electricConsumption}`);
    console.log(`\tGAS cars - ${this.gasCars}, with a total consumption of ${this.gasConsumption}`);
    console.log(`\tROBOTS - ${this.amountRobots}`);
    console.log(`\tPEOPLE - ${this.amountPeople}`);
    console.log(`\tEntities that dined - ${this.amountDining}`);
    console.log(`\tEntities that did NOT dine - ${this.amountNotDining}\n`);
  }
}
