import { Queue } from "./Queue";

export class SimpleQueue<T> implements Queue<T> {
  private queue: T[] = [];

  // Add an element to the end of the queue
  enqueue(item: T): void {
    this.queue.push(item);
  }

  // Remove and return the front element of the queue
  dequeue(): T | null {
    return this.queue.length > 0 ? this.queue.shift() || null : null;
  }

  // Peek at the front element without removing it
  peek(): T | null {
    return this.queue.length > 0 ? this.queue[0] : null;
  }

  // Get the current size of the queue
  size(): number {
    return this.queue.length;
  }
}
