// Each node in a graph data structure must have the following properties:-
// key: The key of the node
// value: The value of the node

// Each edge in a grpah data structure must have the following properties:-
// a: The starting node of the edge
// b: The target node of the edge
// weight: An optional numeric weight value for the edge

// The main operations of a graph data structure are:-
// addNode: Inserts a new node with the specific key and value
// addEdge: Inserts a new edge between two given nodes, optionally setting its weight
// removeNode: Removes the node with the specified key
// removeEdge: Removes the edge between two given nodes
// findNode: Retrieves the node with the given key
// hasEdge: Checks if the graph has an edge between two given nodes
// setEdgeWeight: Sets the weight of a given edge
// getEdgeWeight: Gets the weight of a given edge
// adjacent: Finds all nodes for which an edge exists from a given node
// indegree: Calculates the total number of edges to a given node
// outdegree: Calculates the total number of edges from a given node

// ------------------------------------------------------------------ //

class Graph {
    constructor(directed = true) {
        this.directed = directed;
        this.nodes = [];
        this.edges = new Map();
    }

    addNode(key, value = key) {
        this.nodes.push({
            key,
            value
        });
    }

    addEdge(a, b, weight) {
        this.edges.set(JSON.stringify([a, b]), {
            a,
            b,
            weight
        });
        if (!this.directed)
            this.edges.set(JSON.stringify([b, a]), {
                a: b,
                b: a,
                weight
            });
    }

    removeNode(key) {
        this.nodes = this.nodes.filter(n => n.key !== key);
        [...this.edges.values()].forEach(({
            a,
            b
        }) => {
            if (a === key || b === key) this.edges.delete(JSON.stringify([a, b]));
        });
    }

    removeEdge(a, b) {
        this.edges.delete(JSON.stringify([a, b]));
        if (!this.directed) this.edges.delete(JSON.stringify([b, a]));
    }

    findNode(key) {
        return this.nodes.find(x => x.key === key);
    }

    hasEdge(a, b) {
        return this.edges.has(JSON.stringify([a, b]));
    }

    setEdgeWeight(a, b, weight) {
        this.edges.set(JSON.stringify([a, b]), {
            a,
            b,
            weight
        });
        if (!this.directed)
            this.edges.set(JSON.stringify([b, a]), {
                a: b,
                b: a,
                weight
            });
    }

    getEdgeWeight(a, b) {
        return this.edges.get(JSON.stringify([a, b])).weight;
    }

    adjacent(key) {
        return [...this.edges.values()].reduce((acc, {
            a,
            b
        }) => {
            if (a === key) acc.push(b);
            return acc;
        }, []);
    }

    indegree(key) {
        return [...this.edges.values()].reduce((acc, {
            a,
            b
        }) => {
            if (b === key) acc++;
            return acc;
        }, 0);
    }

    outdegree(key) {
        return [...this.edges.values()].reduce((acc, {
            a,
            b
        }) => {
            if (a === key) acc++;
            return acc;
        }, 0);
    }
}

const g = new Graph();

g.addNode('a');
g.addNode('b');
g.addNode('c');
g.addNode('d');
g.addEdge('a', 'c');
g.addEdge('b', 'c');
g.addEdge('c', 'b');
g.addEdge('d', 'a');

console.log(g.adjacent('c'));
console.log(g.indegree('c'));
console.log(g.outdegree('c'));
console.log(g.hasEdge('d', 'a'));
console.log(g.hasEdge('a', 'd'));

g.removeEdge('c', 'b');
g.removeNode('c');
g.setEdgeWeight('d', 'a', 5)

console.log(g.getEdgeWeight('d', 'a'));
