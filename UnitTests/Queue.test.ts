import { SimpleQueue } from "../src/QueueClasses/SimpleQueue";
import { LinkedListQueue } from "../src/QueueClasses/LinkedListQueue";
import { CircularQueue } from "../src/QueueClasses/CircularQueue";
import { Queue } from "../src/QueueClasses/Queue";

import { describe, test, expect, beforeEach } from "@jest/globals";


describe("Queue Tests", () => {
  const actualData = [1, 2, 3, 4, 5, 5, 4];

  const enqueueAllValues = (testQueueImplementation: Queue<number>) => {
    actualData.forEach((value) => testQueueImplementation.enqueue(value));
  };

  const queueImplementationsForTest = [
    new SimpleQueue<number>(),
    new LinkedListQueue<number>(),
    new CircularQueue<number>(10),
  ];

  queueImplementationsForTest.forEach((queueImplementation) => {
    test("Enqueue values", () => {
      enqueueAllValues(queueImplementation);
      expect(queueImplementation.size()).toBe(actualData.length);
    });

    test("Dequeue values", () => {
      enqueueAllValues(queueImplementation);

      const dequeuedTestData: number[] = [];
      while (queueImplementation.size() > 0) {
        const element = queueImplementation.dequeue();
        if (element !== null) dequeuedTestData.push(element);
      }

      expect(dequeuedTestData).toEqual(actualData);
    });

    test("Peek value", () => {
      enqueueAllValues(queueImplementation);
      const firstValue = queueImplementation.peek();
      expect(firstValue).toBe(actualData[0]);
    });
  });
});

