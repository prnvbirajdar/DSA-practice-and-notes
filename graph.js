// Graph Class
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  
}

let myGraph = new Graph();

myGraph.addVortex("A");
myGraph.addVortex("B");
myGraph.addVortex("C");
myGraph.addVortex("D");

myGraph.addEdge("A", "B");
myGraph.addEdge("A", "C");
myGraph.addEdge("A", "D");
myGraph.addEdge("B", "C");
myGraph.addEdge("B", "D");
