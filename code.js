function allPairsShortestPaths(graph) {
    //Step 1 in the directions
    var dist = [];
    for (let i = 0; i < graph.length; i++) {
        dist[i] = [];
        for (let j = 0; j < graph.length; j++) {
            dist[i][j] = Infinity;
        }
    }

    for(let u = 0; u < graph.length; u++) {
        //Step 2 in the directions
        dist[u][u] = 0;

        for(let v = 0; v < graph[u].length; v++) {
            //Step 3 in the directions
            //Check if the edge exists
            if(graph != Infinity) {
                dist[u][graph[u][v][0]] = graph[u][v][1];
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
                if(dist[i][j] > (dist[i][k] + dist[k][j])) {
                    dist[i][j] = dist[i][k] + dist[k][j]
                }
            }
        }
    }
    return dist;
}
