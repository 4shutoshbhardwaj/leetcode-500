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
    let visited=Array(arr.length).fill(false);
    function func(node){
        let q=[node];
        visited[node]=true;
        let i=0;
        while(i<q.length){
            let curr=q[i];
            console.log(arr,curr);
            for(let j=0;j<arr[curr].length;j++){
                let nextNode=arr[curr][j];
                if(!visited[nextNode]){
                    visited[nextNode]=true;
                    q.push(nextNode);
                }
            }
            i++;
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