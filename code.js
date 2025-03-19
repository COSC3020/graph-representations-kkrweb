// Kane Kriz
// UWYO COSC 3020
// 19 March 2025


//


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

