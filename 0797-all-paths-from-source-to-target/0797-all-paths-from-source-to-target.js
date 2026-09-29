/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let res=[];
    function dfs(node,arr,prev){
        arr.push(node);
        for(let i=0;i<graph[node].length;i++){
            let nextNode=graph[node][i];
            if(prev!=nextNode){
                dfs(nextNode,arr,node);
            }
        }
        if(node==graph.length-1){
            res.push([...arr]);
        }
        arr.pop();
    }
    dfs(0,[],-1);
    return res;
};