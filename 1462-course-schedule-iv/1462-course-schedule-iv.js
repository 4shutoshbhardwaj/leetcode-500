/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function(numCourses, prerequisites, queries) {
    let adj=Array(numCourses).fill(null).map(()=>[]);
    for(let i=0;i<prerequisites.length;i++){
        adj[prerequisites[i][0]].push(prerequisites[i][1]);
    }
    let res=[];
    for(let i=0;i<queries.length;i++){
        let visited=Array(adj.length).fill(false);
        let q=[queries[i][0]];
        let z=0;
        let t=true;
        while(z<q.length){
            let node=q[z];
            visited[node]=true;
            for(let j=0;j<adj[node].length;j++){
                let nextNode=adj[node][j];
                if(nextNode==queries[i][1]){
                    res.push(true);
                    t=false;
                }
                if(!visited[nextNode]){
                    q.push(nextNode);
                }
            }
            z++;
        }
        if(t)res.push(false);
    }
    // console.log(res,adj);
    return res;
};