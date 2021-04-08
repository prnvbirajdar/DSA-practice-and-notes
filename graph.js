// Graph Class
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVortex(vortex) {
    if (!this.adjacencyList[vortex]) {
      this.adjacencyList[vortex] = [];
      return true;
    }
    return false;
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
