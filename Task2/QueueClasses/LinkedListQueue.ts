import { Queue } from "./IQueue";

class Node<T> {
    public data: T;
    public next: Node<T> | null = null;
  
    constructor(data: T) {
      this.data = data;
    }
  }
  
  export class LinkedListQueue<T> implements Queue<T> {
    private front: Node<T> | null = null;
    private rear: Node<T> | null = null;
    private currentSize: number = 0;
  
    enqueue(item: T): void {
      const newNode = new Node(item);
      if (this.rear) {
        this.rear.next = newNode;
      }
      this.rear = newNode;
      if (!this.front) {
        this.front = newNode;
      }
      this.currentSize++;
    }
  
    dequeue(): T | null {
      if (!this.front) {
        return null;
      }
      const item = this.front.data;
      this.front = this.front.next;
      if (!this.front) {
        this.rear = null;
      }
      this.currentSize--;
      return item;
    }
  
    peek(): T | null {
      return this.front ? this.front.data : null;
    }
  
    size(): number {
      return this.currentSize;
    }
  }
  