function allPairsShortestPaths(graph) {
    //Step 1 in the directions
    let dist = Array(graph.length,graph.length).fill(Infinity);

    for(let u = 0; u < dist.length; u++) {
        //If there is only one element set it to the only element in graph
        if(dist[u].length == 1) {
            dist[u][u] = graph[u][u];
        }
        //Step 2 in the directions
        else dist[u][u] = 0;

        for(let v = 0; v < dist.length; v++) {
            //Step 3 in the directions
            //Check if the edge exists
            if(graph != Infinity) {
                dist[u][v] = graph[u][v];
            }
        }
    }

    //Step 4.a in the directions
    for(let k = 0; k < dist.length; k++) {
        //Step 4.b
        for(let i = 0; i < dist.length; i++) {
            //Step 4.c
            for(let j = 0; j < dist.length; j++) {
                //Step 4.d
                if(dist[i][j] < (dist[i][k] + dist[k][j])) {
                    dist[i][j] = dist[i][k] + dist[k][j]
                }
            }
        }
    }
    return dist;
}
