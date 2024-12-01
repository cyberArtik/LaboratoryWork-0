export class ServeData {
    private static gasCars: number = 0;
    private static electricCars: number = 0;
    private static gasConsumption: number = 0;
    private static electricConsumption: number = 0;
    private static amountDining: number = 0;
    private static amountNotDining: number = 0;
    private static amountRobots: number = 0;
    private static amountPeople: number = 0;
  
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
  
    static getStatistics(): Record<string, number> {
      return {
        gasCars: this.gasCars,
        electricCars: this.electricCars,
        gasConsumption: this.gasConsumption,
        electricConsumption: this.electricConsumption,
        amountDining: this.amountDining,
        amountNotDining: this.amountNotDining,
        amountRobots: this.amountRobots,
        amountPeople: this.amountPeople,
      };
    }
  }
  