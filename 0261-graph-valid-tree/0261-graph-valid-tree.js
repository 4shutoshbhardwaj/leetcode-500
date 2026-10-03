/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    let adj=Array(n).fill(null).map(()=>[]);
    for(let i=0;i<edges.length;i++){
        adj[edges[i][0]].push(edges[i][1]);
        adj[edges[i][1]].push(edges[i][0]);
    }
    let visited=Array(adj.length).fill(false);
    function dfs(node,parent){
        visited[node]=true;
        for(let i=0;i<adj[node].length;i++){
            let nextNode=adj[node][i];
            if(nextNode==parent){
                continue;
            }
            if(visited[nextNode]){
                return true;
            }
            if(dfs(nextNode,node)){
                return true;
            }
        }
    }
    if(dfs(0,-1)){
        return false;
    }
    for(let i=0;i<adj.length;i++){
        if(!visited[i]){
            return false;
        }
    }
    return true;
};