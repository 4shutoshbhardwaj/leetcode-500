/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    let arr=Array(n).fill(null).map(()=>[]);
    for(let i=0;i<edges.length;i++){
        arr[edges[i][0]].push(edges[i][1]);
        arr[edges[i][1]].push(edges[i][0]);
    }
    let visited=Array(n).fill(false);
    function func(node){
        visited[node]=true;
        for(let i=0;i<arr[node].length;i++){
            if(!visited[arr[node][i]]){
                visited[arr[node][i]]=true;
                func(arr[node][i]);
            }
        }
    }
    let count=0;
    for(let i=0;i<n;i++){
        if(!visited[i]){
            count++;
            func(i);
        }
    }
    return count;
};