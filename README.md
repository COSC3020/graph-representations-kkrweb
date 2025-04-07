# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.


//


Name: Kane Kriz

Start Date: 23 March 2025

Last Edited: 7 April 2025

Feedback Request 1 Date: X


//


* for convertToAdjList(adjMatrix) function

Response: WIP

The runtime complexity of the implemented conversion can be determined as follows:

First, we can consider the step by step functionality of the implementation and associated necessary work step by step. 

The algorithm processes each vertex exactly once in the outer loop.
The associated work with this process is thus O(V), with V being the number of vertices input.

For each vertex processed in the outer loop, the inner loop examines all possible connections to other vertices.
This adds another O(V) operations per vertex.

Within the inner loop, two important tasks are performed per iteration.

These tasks are a constant time check of the matrix cell searching for edge presence.
If an edge is located, a constant time push operation to add the neighbor in is performed.
This structure results in V * V = V^2 total operations in the worst case.

This is logical considering V vertices * V potential neighbors = V^2 total cell examinations.

The conversion's overall runtime depends on the analysis of the adjacency matrix structure. 
Since every possible edge must be checked and verified to exist or not, the work required for the conversion scales with V^2.

When considering whether the complexity depends on vertices, edges, or both, the analysis reveals the vertex count as the primary determining factor, due to the comparison of work associated with vertex count to edge count.

While the number of edges affects how many push operations may occur, the dominant factor is the V^2 matrix examination.
This is reasonable as the push operations were already specified to require constant work.

The O(V^2) complexity holds in all cases regardless of matrix as the adjacency matrix representation forces us to consider every possible vertex pair that can occur.
This makes the implementation largely dominated by work performed upon vertices rather than one potentially dependent on edge count.


//


* for convertToAdjMatrix(adjList) function

Response (Bonus): WIP

The runtime complexity of the implemented conversion can be determined as follows:

First, we can consider the step by step functionality of the implementation and associated necessary work step by step. 
The nested initialization loops create a matrix of zeros in O(V^2) time.
This initialization process examines and sets every possible cell in the matrix exactly once.

For each vertex in the adjacency list, the algorithm then processes its neighbors to mark the corresponding matrix entries.
This is performed with the line `adjMatrix[i][adjList[i][j]] = 1`.
The outer loop processes each vertex exactly once, contributing linear O(V) work.
For each vertex, the inner loop processes its neighbors.
The total neighbor processing work across all vertices is thus O(E), where E represents the number of edges.

Within the neighbor processing loop, the algorithm performs a matrix update operation for each present edge, performed in constant time. 
Each matrix update via `adjMatrix[i][adjList[i][j]] = 1` is an O(1) operation per edge.
The complete processing therefore combines the previously mentioned O(V^2) initialization with the O(E) edge processing.

The conversion's runtime depends on........


//


Plagiarism Acknowledgement: I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

Citations:
