import { Queue } from "./IQueue";

export class CircularQueue<T> implements Queue<T> {
    private queue: Array<T | null>;
    private front: number;
    private rear: number;
    private currentSize: number;
    private capacity: number;
  
    constructor(size: number) {
      this.queue = new Array(size).fill(null);
      this.front = 0;
      this.rear = -1;
      this.currentSize = 0;
      this.capacity = size;
    }
  
    enqueue(item: T): void {
      if (this.currentSize === this.capacity) {
        throw new Error("Queue is full.");
      }
      this.rear = (this.rear + 1) % this.capacity;
      this.queue[this.rear] = item;
      this.currentSize++;
    }
  
    dequeue(): T | null {
      if (this.currentSize === 0) {
        return null;
      }
      const item = this.queue[this.front];
      this.queue[this.front] = null;
      this.front = (this.front + 1) % this.capacity;
      this.currentSize--;
      return item;
    }
  
    peek(): T | null {
      return this.currentSize === 0 ? null : this.queue[this.front];
    }
  
    size(): number {
      return this.currentSize;
    }
  }
  