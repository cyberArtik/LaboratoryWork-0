export interface Queue<T> {
    enqueue(item: T): void;
    dequeue(): T | null;
    peek(): T | null;
    size(): number;
  }
  