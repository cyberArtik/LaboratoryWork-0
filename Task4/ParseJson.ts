import { Car} from './Car/Car'
import { LinkedListQueue } from './QueueClasses/LinkedListQueue';

export class ParseJson {
  // Deserialize a single JSON string into a Car object
  private static deserialize(jsonData: string): Car | null {
    try {
      const car = JSON.parse(jsonData);
      return car ? new Car(car.id, car.type, car.passengers, car.isDining, car.consumption) : null;
    } catch (e) {
      console.error("Error parsing JSON:", e);
      return null;
    }
  }

  // Convert a queue of JSON strings into a queue of Car objects
  public static toCar(sourceJson: LinkedListQueue<string>, carsForServing: LinkedListQueue<Car>): void {
    while (sourceJson.size() > 0) {
      const carJson = sourceJson.dequeue();
      if (carJson) {
        const car = ParseJson.deserialize(carJson);
        if (car) {
          carsForServing.enqueue(car);
        }
      }
    }
  }
}
