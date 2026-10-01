/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    let adj={};
    for(let i=0;i<words.length;i++){
        for(let j=0;j<words[i].length;j++){
            if(adj[words[i][j]]==undefined){
                adj[words[i][j]]=[];
            }
        }
    }
    for(let i=0;i<words.length-1;i++){
        let n=Math.min(words[i].length,words[i+1].length);
        let flag=false;
        for(let j=0;j<n;j++){
            if(words[i][j]!=words[i+1][j]){
                adj[words[i][j]].push(words[i+1][j]);
                flag=!flag;
                break;
            }
        }
        if(!flag&&words[i].length>words[i+1].length)return "";
    }
    let visited={},pathVisited={};
    for(let o in adj){
        console.log(o);
        visited[o]=0;
        pathVisited[o]=0;
    }
    function detectCycle(node){
        visited[node]=1;
        pathVisited[node]=1;
        for(let i=0;i<adj[node].length;i++){
            let nextNode=adj[node][i];
            if(visited[nextNode]==0&&pathVisited[nextNode]==0){
                if(detectCycle(nextNode)){
                    return true;
                }
            }else if(visited[nextNode]==1&&pathVisited[nextNode]==1){
                return true;
            }
        }
        pathVisited[node]=0;
        return false;
    }
    for(let o in adj){
        if(visited[o]==0){
            let t=detectCycle(o);
            if(t)return "";
        }
    }
    let ans=[];
    function dfs(node){
        visited[node]=1;
        for(let i=0;i<adj[node].length;i++){
            let nextNode=adj[node][i];
            if(visited[nextNode]==0){
                dfs(nextNode);
            }
        }
        ans.push(node);
    }
    for(let o in adj){
        visited[o]=0;
    }
    for(let o in adj){
        if(visited[o]==0){
            dfs(o);
        }
    }
    let s="";
    for(let i=ans.length-1;i>=0;i--){
        s+=ans[i];
    }
    return s;
};