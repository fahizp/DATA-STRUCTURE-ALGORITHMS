class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1,v2){
   this.adjacencyList[v1].push(v2)
   this.adjacencyList[v2].push(v1)
  }
  removeEdge(v1,v2){
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v=>v !== v2)
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v=>v !== v1)
  }
  removeVertex(vertex){
   while (this.adjacencyList[vertex].length) {
      const adjacenctVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex,adjacenctVertex)
   }
   delete this.adjacencyList[vertex]
  }
}

g = new Graph();
g.addVertex("fahiz");
g.addVertex("safwan");
g.addVertex("asp");
g.addVertex("ajay");
g.addVertex("akshay");
// g.adjacencyList["fahiz"].push("this 20");
g.addEdge("fahiz","safwan")
g.addEdge("asp","safwan")
g.addEdge("asp","fahiz")

g.removeEdge("asp","safwan")
g.removeVertex("ajay")

console.log(g);
