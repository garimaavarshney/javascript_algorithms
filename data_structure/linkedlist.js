// Each element of a linked list data structure must have the following properties:-
// value: The value of the element
// next: A pointer to the next element in the linked list (null if there is none)

// The main properties of a linked list data structure are:-
// size: The number of elements in the linked list
// head: The first element in the linked list
// tail: The last element in the linked list

// The main operations of a linked list data structure are:-
// insertAt: Inserts an element at the specific index
// removeAt: Removes the element at the specific index
// getAt: Retrieves the element at the specific index
// clear: Empties the linked list
// reverse: Reverses the order of elements in the linked list

// ------------------------------------------------------------------ //

class LinkedList {
    constructor() {
        this.nodes = [];
    }

    get size() {
        return this.nodes.length;
    }

    get head() {
        return this.size ? this.nodes[0] : null;
    }

    get tail() {
        return this.size ? this.nodes[this.size - 1] : null;
    }

    insertAt(index, value) {
        const previousNode = this.nodes[index - 1] || null;
        const nextNode = this.nodes[index] || null;
        const node = {
            value,
            next: nextNode
        };

        if (previousNode) previousNode.next = node;
        this.nodes.splice(index, 0, node);
    }

    insertFirst(value) {
        this.insertAt(0, value);
    }

    insertLast(value) {
        this.insertAt(this.size, value);
    }

    getAt(index) {
        return this.nodes[index];
    }

    removeAt(index) {
        const previousNode = this.nodes[index - 1];
        const nextNode = this.nodes[index + 1] || null;

        if (previousNode) previousNode.next = nextNode;

        return this.nodes.splice(index, 1);
    }

    clear() {
        this.nodes = [];
    }

    reverse() {
        this.nodes = this.nodes.reduce(
            (acc, {
                value
            }) => [{
                value,
                next: acc[0] || null
            }, ...acc],
            []
        );
    }
}

const list = new LinkedList();

list.insertFirst(1);
list.insertFirst(2);
list.insertFirst(3);
list.insertLast(4);
list.insertAt(3, 5);
console.log(list.size);

console.log(list.getAt(1).value);
list.removeAt(1);
console.log(list.getAt(1).value);

console.log(list.head.value);
console.log(list.tail.value);
list.reverse();
console.log(list.head.value);
console.log(list.tail.value);

list.clear();
console.log(list.size);
