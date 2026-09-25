/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    let arr=Array(graph.length).fill(null).map(()=>[]);
    let outdegree=Array(graph.length).fill(0);
    for(let i=0;i<graph.length;i++){
        outdegree[i]=graph[i].length;
        for(let j=0;j<graph[i].length;j++){
            arr[graph[i][j]].push(i);
        }
    }
    let q=[];
    for(let i=0;i<outdegree.length;i++){
        if(outdegree[i]==0){
            q.push(i);
        }
    }
    let z=0;
    let res=[];
    while(z<q.length){
        let node=q[z];
        res.push(node);
        for(let i=0;i<arr[node].length;i++){
            let nextNode=arr[node][i];
            outdegree[nextNode]--;
            if(outdegree[nextNode]==0){
                q.push(nextNode);
            }
        }
        z++;
    }
    res.sort((a,b)=>a-b);
    return res;
};