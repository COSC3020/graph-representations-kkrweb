// Kane Kriz
// UWYO COSC 3020
// Graph Representations Exercise, and Bonus
// 6 April 2025


// Primary function for the exercise:

function convertToAdjList(adjMatrix) 
 {
    var adjList = [];

    for(var i = 0; i < adjMatrix.length; i++) 
    {
        adjList[i] = []; //empty array for each encountered node
        
        for(var j = 0; j < adjMatrix[i].length; j++) 
        {
            if(adjMatrix[i][j] == 1) 
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
    
    for(var i = 0; i < adjList.length; i++) 
    {
        adjMatrix[i] = [];
        
        for(var j = 0; j < adjList.length; j++) 
        {
            adjMatrix[i][j] = 0;
        }
    }
    
    for(var i = 0; i < adjList.length; i++) 
    {
        for(var j = 0; j < adjList[i].length; j++) 
        {
            adjMatrix[i][adjList[i][j]] = 1; //gross?
        }
    }
    
    return adjMatrix;
}

//
