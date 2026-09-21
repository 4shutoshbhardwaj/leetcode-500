/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let arr=[];
    for(let i=0;i<isConnected.length;i++){
        arr[i]=[];
        for(let j=0;j<isConnected[i].length;j++){
            if(isConnected[i][j]==1){
                arr[i].push(j);
            }
        }
    }
    // console.log(arr);
    let visited=Array(arr.length).fill(false);
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
    for(let i=0;i<arr.length;i++){
        if(!visited[i]){
            count++;
            func(i);
        }
    }
    return count;
};