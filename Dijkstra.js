const PriorityQueue = require("./DataStructs/priorityQueue");
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  dijkstra(start, end) {
    const queue = new PriorityQueue();
    const distances = {};
    const previous = {};
    const graphKeys = Object.keys(this.adjacencyList);
    let startValue, currVertex, distanceToNode;

    graphKeys.forEach(key => {
      startValue = key === start ? 0 : Infinity;
      distances[key] = startValue;
      queue.enqueue({ node: key, value: this.adjacencyList[key] }, startValue);
      previous[key] = null;
    });

    while (queue.values.length) {
      currVertex = queue.dequeue().val;

      if (currVertex === end) break;
      currVertex.value.forEach(edge => {
        distanceToNode = distances[currVertex.node] + edge.weight;
        if (distanceToNode < distances[edge.node]) {
          distances[edge.node] = distanceToNode;
          previous[edge.node] = currVertex.node;
          queue.enqueue(
            { node: edge.node, value: this.adjacencyList[edge.node] },
            distanceToNode
          );
        }
      });
    }
    const res = { distance: null, path: [end] };
    let point = end;
    while (previous[point]) {
      res.path.push(previous[point]);
      point = previous[point];
    }
    res.path = res.path.reverse();
    res.distance = res.path.length;
    return res;
  }
}

const graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B", 4);
graph.addEdge("B", "E", 3);
graph.addEdge("A", "C", 2);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "F", 1);
graph.addEdge("F", "E", 1);

console.log(graph.dijkstra("A", "E"));
