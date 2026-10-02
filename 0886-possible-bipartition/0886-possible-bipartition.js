/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
    let adj=Array(n).fill(null).map(()=>[]);
    for(let i=0;i<dislikes.length;i++){
        adj[dislikes[i][0]-1].push(dislikes[i][1]-1);
        adj[dislikes[i][1]-1].push(dislikes[i][0]-1);
    }
    let visited=Array(adj.length).fill(-1);
    for(let i=0;i<adj.length;i++){
        if(visited[i]!=-1)continue;
        let q=[i];
        let z=0;
        while(z<q.length){
            let node=q[z];
            for(let j=0;j<adj[node].length;j++){
                let nextNode=adj[node][j];
                if(visited[nextNode]==-1){
                    visited[nextNode]=1-visited[node];
                    q.push(nextNode);
                }else if(visited[nextNode]==visited[node]){
                    return false;
                }
            }
            z++;
        }
    }
    console.log(adj,visited);
    return true;
};