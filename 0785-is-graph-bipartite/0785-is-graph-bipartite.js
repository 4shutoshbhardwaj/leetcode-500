/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    let adj=Array(graph.length).fill(null).map(()=>[]);
     for(let i=0;i<graph.length;i++){
        for(let j=0;j<graph[i].length;j++){
            adj[i].push(graph[i][j]);
        }
    }
    let visited=Array(adj.length).fill(-1);
    for(let i=0;i<adj.length;i++){
        if(visited[i]!=-1)continue;
        let q=[i];
        visited[i]=0;
        let z=0;
        while(z<q.length){
            let currNode=q[z];
            for(let j=0;j<adj[currNode].length;j++){
                let nextNode=adj[currNode][j];
                if(visited[nextNode]==-1){
                    visited[nextNode]=1-visited[currNode];
                    q.push(nextNode);
                }else if(visited[currNode]==visited[nextNode]){
                    return false;
                }
            }
            z++;
        }
    }
    return true;
};