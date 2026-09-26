/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    let adj=[];
    for(let i=0;i<words.length-1;i++){
        let w1=words[i];
        let w2=words[i+1];
        let n=w1.length>w2.length?w2.length:w1.length;
        let found=false;
        for(let j=0;j<n;j++){
            if(w1[j]!=w2[j]){
                adj.push([w1[j],w2[j]]);
                found=true;
                break;
            }
        }
        if(!found && w1.length>w2.length){
            return "";
        }
    }
    let obj={};
    for(let i=0;i<words.length;i++){

        for(let j=0;j<words[i].length;j++){

            let code=words[i][j].charCodeAt(0);

            if(obj[code]==undefined){
                obj[code]=1;
            }
        }
    }
    let count=0;
    for(let o in obj){
        obj[o]=count++;
    }
    for(let i=0;i<adj.length;i++){
        for(let j=0;j<2;j++){
            let code=adj[i][j].charCodeAt(0);
            adj[i][j]=obj[code];
        }
    }
    let graph=Array(count).fill(null).map(()=>[]);
    for(let i=0;i<adj.length;i++){
        let from=adj[i][0];
        let to=adj[i][1];
        if(!graph[from].includes(to)){
            graph[from].push(to);
        }
    }
    let visited=Array(count).fill(0);
    let result=[];
    function dfs(node){
        if(visited[node]==1){
            return false;
        }
        if(visited[node]==2){
            return true;
        }
        visited[node]=1;
        for(let i=0;i<graph[node].length;i++){
            let next=graph[node][i];
            if(!dfs(next)){
                return false;
            }
        }
        visited[node]=2;
        result.push(node);
        return true;
    }
    for(let i=0;i<count;i++){
        if(visited[i]==0){
            if(!dfs(i)){
                return "";
            }
        }
    }
    result.reverse();
    let answer=Array(count);
    for(let key in obj){
        answer[obj[key]]=String.fromCharCode(Number(key));
    }
    let finalAnswer="";
    for(let i=0;i<result.length;i++){
        finalAnswer+=answer[result[i]];
    }
    return finalAnswer;
};