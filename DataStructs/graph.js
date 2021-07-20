const Stack = require("./stack");
const Queue = require("./queue");

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      el => el !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      el => el !== vertex1
    );
  }
  removeVertex(vertex) {
    for (let edge of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, edge);
    }
    delete this.adjacencyList[vertex];
  }
  DFSRecursive(start) {
    const nodes = [];
    const visited = {};
    const helper = vertex => {
      if (!vertex) return;
      nodes.push(vertex);
      visited[vertex] = true;
      for (let edge of this.adjacencyList[vertex]) {
        if (!visited[edge]) helper(edge);
      }
    };
    helper(start);
    console.log(nodes);
    return nodes;
  }
  DFSIterative(start) {
    const s = new Stack();
    const visited = {};
    const result = [];
    s.push(start);
    while (s.size > 0) {
      const vertex = s.pop().val;
      if (!visited[vertex]) {
        result.push(vertex);
        visited[vertex] = true;
        this.adjacencyList[vertex].forEach(edge => {
          s.push(edge);
        });
      }
    }
    return result;
  }
  BFS(start) {
    const q = new Queue();
    const result = [];
    const visited = {};
    q.enqueue(start);
    while (q.length) {
      const vertex = q.dequeue().val;

      if (!visited[vertex]) {
        visited[vertex] = true;
        result.push(vertex);
        this.adjacencyList[vertex].forEach(edge => {
          q.enqueue(edge);
        });
      }
    }
    console.log(result);
    return result;
  }
}
const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
// g.DFSRecursive("A");
g.DFSIterative("A");
g.BFS("A");
