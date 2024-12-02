import { SimpleQueue } from "../src/QueueClasses/SimpleQueue";
import { LinkedListQueue } from "../src/QueueClasses/LinkedListQueue";
import { CircularQueue } from "../src/QueueClasses/CircularQueue";
import { Queue } from "../src/QueueClasses/Queue";

describe("Queue Custom Tests", () => {
  const testData = [1, 2, 3, 4, 5];

  // Helper function to enqueue data into a queue
  const enqueueAllValues = (queue: Queue<number>): void => {
    testData.forEach((value) => queue.enqueue(value));
  };

  it("should enqueue values correctly", () => {
    const simpleQueue = new SimpleQueue<number>();
    enqueueAllValues(simpleQueue);
    expect(simpleQueue.size()).toBe(testData.length);
  });

  it("should enqueue values correctly in LinkedListQueue", () => {
    const linkedListQueue = new LinkedListQueue<number>();
    enqueueAllValues(linkedListQueue);
    expect(linkedListQueue.size()).toBe(testData.length);
  });

  it("should enqueue values correctly in CircularQueue", () => {
    const circularQueue = new CircularQueue<number>(5);
    enqueueAllValues(circularQueue);
    expect(circularQueue.size()).toBe(testData.length);
  });

  it("should dequeue values in the correct order", () => {
    const simpleQueue = new SimpleQueue<number>();
    enqueueAllValues(simpleQueue);

    const dequeuedData: number[] = [];
    while (simpleQueue.size() > 0) {
      const value = simpleQueue.dequeue();
      if (value !== null) dequeuedData.push(value);
    }

    expect(dequeuedData).toEqual(testData); 
  });

  it("should dequeue values in the correct order in LinkedListQueue", () => {
    const linkedListQueue = new LinkedListQueue<number>();
    enqueueAllValues(linkedListQueue);

    const dequeuedData: number[] = [];
    while (linkedListQueue.size() > 0) {
      const value = linkedListQueue.dequeue();
      if (value !== null) dequeuedData.push(value);
    }

    expect(dequeuedData).toEqual(testData);
  });

  it("should dequeue values in the correct order in CircularQueue", () => {
    const circularQueue = new CircularQueue<number>(5);
    enqueueAllValues(circularQueue);

    const dequeuedData: number[] = [];
    while (circularQueue.size() > 0) {
      const value = circularQueue.dequeue();
      if (value !== null) dequeuedData.push(value);
    }

    expect(dequeuedData).toEqual(testData);
  });

  it("should peek the front element correctly", () => {
    const simpleQueue = new SimpleQueue<number>();
    enqueueAllValues(simpleQueue);
    expect(simpleQueue.peek()).toBe(testData[0]);
  });

  it("should peek the front element correctly in LinkedListQueue", () => {
    const linkedListQueue = new LinkedListQueue<number>();
    enqueueAllValues(linkedListQueue);
    expect(linkedListQueue.peek()).toBe(testData[0]);
  });

  it("should peek the front element correctly in CircularQueue", () => {
    const circularQueue = new CircularQueue<number>(5);
    enqueueAllValues(circularQueue);
    expect(circularQueue.peek()).toBe(testData[0]);
  });

  // size function
  it("should return the correct size of the queue", () => {
    const simpleQueue = new SimpleQueue<number>();
    enqueueAllValues(simpleQueue);
    expect(simpleQueue.size()).toBe(testData.length); 
  });

  it("should return the correct size in LinkedListQueue", () => {
    const linkedListQueue = new LinkedListQueue<number>();
    enqueueAllValues(linkedListQueue);
    expect(linkedListQueue.size()).toBe(testData.length);
  });

  it("should return the correct size in CircularQueue", () => {
    const circularQueue = new CircularQueue<number>(5);
    enqueueAllValues(circularQueue);
    expect(circularQueue.size()).toBe(testData.length);
  });

  it("should return null for dequeue when the queue is empty", () => {
    const emptyQueue = new SimpleQueue<number>();
    expect(emptyQueue.dequeue()).toBeNull(); 
  });

  it("should return null for peek when the queue is empty", () => {
    const emptyQueue = new SimpleQueue<number>();
    expect(emptyQueue.peek()).toBeNull(); 
  });

  it("should return null for dequeue when the LinkedListQueue is empty", () => {
    const emptyQueue = new LinkedListQueue<number>();
    expect(emptyQueue.dequeue()).toBeNull();
  });

  it("should return null for peek when the LinkedListQueue is empty", () => {
    const emptyQueue = new LinkedListQueue<number>();
    expect(emptyQueue.peek()).toBeNull();
  });

  it("should return null for dequeue when the CircularQueue is empty", () => {
    const emptyQueue = new CircularQueue<number>(5);
    expect(emptyQueue.dequeue()).toBeNull();
  });

  it("should return null for peek when the CircularQueue is empty", () => {
    const emptyQueue = new CircularQueue<number>(5);
    expect(emptyQueue.peek()).toBeNull();
  });

  it("should throw an error when CircularQueue is full", () => {
    const circularQueue = new CircularQueue<number>(3); 
    circularQueue.enqueue(1);
    circularQueue.enqueue(2);
    circularQueue.enqueue(3);
    expect(() => circularQueue.enqueue(4)).toThrowError("Queue is full.");
  });

  it("should wrap around and allow enqueue after dequeue in CircularQueue", () => {
    const circularQueue = new CircularQueue<number>(3);
    circularQueue.enqueue(1);
    circularQueue.enqueue(2);
    circularQueue.enqueue(3);
    circularQueue.dequeue(); 
    circularQueue.enqueue(4); 
    expect(circularQueue.peek()).toBe(2);
  });
});
