/**
 * @param {number} n
 * @param {number[][]} relations
 * @return {number}
 */
var minimumSemesters = function(n, relations) {
    let indegree=Array(n).fill(0);
    let adj=Array(n).fill(null).map(()=>[]);
    for(let i=0;i<relations.length;i++){
        let u=relations[i][0];
        let v=relations[i][1];
        adj[u-1].push(v-1);
        indegree[v-1]++;
    }
    let q=[];
    for(let i=0;i<indegree.length;i++){
        if(indegree[i]==0){
            q.push(i);
        }
    }
    let z=0;
    let semester=0;
    let count=0;
    while(z<q.length){
        let size=q.length-z;
        semester++;
        for(let i=0;i<size;i++){
            let node=q[z];
            z++;
            count++;
            for(let i=0;i<adj[node].length;i++){
                let nextNode=adj[node][i];
                indegree[nextNode]--;
                if(indegree[nextNode]==0){
                    q.push(nextNode);
                }
            }
        }
    }
    if(count!=n)return-1;
    // console.log(semester);
    return semester==0?-1:semester;
};