import { Queue } from "./IQueue";

export class SimpleQueue<T> implements Queue<T> {
    private queue: T[] = [];
  
    enqueue(item: T): void {
      this.queue.push(item);
    }
  
    dequeue(): T | null {
      return this.queue.length > 0 ? this.queue.shift() || null : null;
    }
  
    peek(): T | null {
      return this.queue.length > 0 ? this.queue[0] : null;
    }
  
    size(): number {
      return this.queue.length;
    }
  }
  