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
}
const g = new Graph();
g.addVertex("Tokyo");
g.addVertex("Dallas");
g.addVertex("Miami");
g.addEdge("Tokyo", "Miami");
console.log(g);
g.addEdge("Dallas", "Tokyo");
console.log(g);
g.removeVertex("Dallas");
console.log(g.adjacencyList);
