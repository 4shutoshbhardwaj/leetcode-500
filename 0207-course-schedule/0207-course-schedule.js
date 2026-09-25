/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let adj=Array(numCourses).fill(null).map(()=>[]);
    for(let i=0;i<prerequisites.length;i++){
        adj[prerequisites[i][0]].push(prerequisites[i][1]);
    }
    console.log(adj);
    let visited=Array(numCourses).fill(false);
    let pathVisited=Array(numCourses).fill(false);
    function dfs(node){
        visited[node]=true;
        pathVisited[node]=true;
        for(let i=0;i<adj[node].length;i++){
            if(!visited[adj[node][i]]&&!pathVisited[adj[node][i]]){
                if(dfs(adj[node][i])){
                    return true;
                }
            }else if(visited[adj[node][i]]&&pathVisited[adj[node][i]]){
                return true;
            }
        }
        pathVisited[node]=false;
    }
    for(let i=0;i<visited.length;i++){
        if(!visited[i]){
            let t=dfs(i);
            if(t){
                return false;
            }
        }
    }
    return true;
};