/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let adj=Array(numCourses).fill(null).map(()=>[]);
    for(let i=0;i<prerequisites.length;i++){
        adj[prerequisites[i][0]].push(prerequisites[i][1]);
    }
    // console.log(adj);
    let visited=Array(numCourses).fill(false);
    let pathVisited=Array(numCourses).fill(false);
    function dfs1(node){
        visited[node]=true;
        pathVisited[node]=true;
        for(let i=0;i<adj[node].length;i++){
            if(!visited[adj[node][i]]&&!pathVisited[adj[node][i]]){
                if(dfs1(adj[node][i])){
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
            let t=dfs1(i);
            if(t){
                return [];
            }
        }
    }
    visited=Array(adj.length).fill(false);
    let st=[];
    function dfs(node){
        visited[node]=true;
        for(let i=0;i<adj[node].length;i++){
            if(!visited[adj[node][i]]){
                dfs(adj[node][i]);
            }
        }
        st.push(node);
    }
    for(let i=0;i<adj.length;i++){
        if(!visited[i]){
            dfs(i);
        }
    }
    return st;
};