// Kane Kriz
// UWYO COSC 3020
// Graph Representations Exercise, and Bonus
// 5 April 2025


// Primary function for the exercise:

function convertToAdjList(adjMatrix) 
 {
    var adjList = [];

    for (var i = 0; i < adjMatrix.length; i++) 
    {
        adjList[i] = []; //empty array for each encountered node
        
        for (var j = 0; j < adjMatrix[i].length; j++) 
        {
            if (adjMatrix[i][j] === 1) 
            {
                adjList[i].push(j); //addition of the connected node into the list, accomplishing proper functionality of the graph
            }
        }
    }

    return adjList;
}

//

// Bonus function for the exercise:

function convertToAdjMatrix(adjList) 
 {
 var adjMatrix = [];
  //
  //
  //
  return adjMatrix;
 }
