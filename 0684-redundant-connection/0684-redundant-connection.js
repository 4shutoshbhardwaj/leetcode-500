/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    let adj=Array(edges.length).fill(null).map(()=>[]);
    let ans=[];
    let visited=Array(adj.length).fill(false);
    for(let i=0;i<adj.length;i++){
        visited=Array(adj.length).fill(false);
        adj[edges[i][0]-1].push(edges[i][1]-1);
        adj[edges[i][1]-1].push(edges[i][0]-1);
        let t=dfs(edges[i][1]-1,-1);
        if(t)ans.push([edges[i][0],edges[i][1]])
    }
    function dfs(node,parent){
        visited[node]=true;
        for(let i=0;i<adj[node].length;i++){
            let nextNode=adj[node][i];
            if(parent==nextNode)continue;
            if(visited[nextNode]){
                return true;
            }
            if(dfs(nextNode,node))return true;
        }
        return false;
    }
    return [ans[0][0],ans[0][1]];
};