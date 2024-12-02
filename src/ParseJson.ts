import { Car } from "./Car/Car";
import { LinkedListQueue } from "./QueueClasses/LinkedListQueue";
export class ParseJson {
  private static deserialize(jsonData: string): Car | null {
    try {
      const car = JSON.parse(jsonData);
      return car ? new Car(car.id, car.type, car.passengers, car.isDining, car.consumption) : null;
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return null;
    }
  }

  static toCar(sourceJson: LinkedListQueue<string>, carsForServing: LinkedListQueue<Car>): void {
    while (sourceJson.size() > 0) {
      const jsonData = sourceJson.dequeue();
      if (jsonData) {
        const car = this.deserialize(jsonData);
        if (car) {
          carsForServing.enqueue(car);
        }
      }
    }
  }
}
