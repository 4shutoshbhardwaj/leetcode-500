/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let arr=Array(n).fill(null).map(()=>[]);
    for(let i=0;i<edges.length;i++){
        arr[edges[i][0]].push(edges[i][1]);
        arr[edges[i][1]].push(edges[i][0]);
    }
    let visited=Array(n).fill(false);
    function func(node){
        if(node==destination)return true;
        visited[node]=true;
        for(let next of arr[node]){
            if(!visited[next]){
                if(func(next)){
                    return true;
                }
            }
        }
        return false;
    }
    return func(source);
};