// The main operations of a queue data structure are:-
// enqueue: Adds an element to the end of the queue
// dequeue: Removes an element from the start of the queue
// peek: Retrieves the element at the start of the queue, without removing it
// isEmpty: Checks if the queue is empty

// ------------------------------------------------------------------ //

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue(item) {
        return this.items.shift();
    }

    peek(item) {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const queue = new Queue();

console.log(queue.isEmpty());
queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');
queue.enqueue('D');
queue.enqueue('E');
console.log(queue.isEmpty());

console.log(queue.peek());

queue.dequeue();
queue.dequeue();
queue.dequeue();
