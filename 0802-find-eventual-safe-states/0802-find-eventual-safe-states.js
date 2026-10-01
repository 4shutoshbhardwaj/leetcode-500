/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    let visited=Array(graph.length).fill(false);
    let pathVisited=Array(graph.length).fill(false);
    let res=[];
    function dfs(node){
        visited[node]=true;
        pathVisited[node]=true;
        for(let i=0;i<graph[node].length;i++){
            let nextNode=graph[node][i];
            if(!visited[nextNode]&&!pathVisited[nextNode]){
                if(dfs(nextNode)){
                    return true;
                }
            }else if(visited[nextNode]&&pathVisited[nextNode]){
                return true;
            }
        }
        pathVisited[node]=false;
        res.push(node);
    }
    for(let i=0;i<graph.length;i++){
        if(!visited[i]){
            dfs(i);
        }
    }
    res.sort((a,b)=>a-b);
    return res;
};