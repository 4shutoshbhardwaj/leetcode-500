/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let visited=Array(rooms.length).fill(false);
    let q=[0];
    let z=0;
    visited[q[z]]=true;
    while(z<q.length){
        let node=q[z];
        for(let i=0;i<rooms[node].length;i++){
            let nextNode=rooms[node][i];
            if(!visited[nextNode]){
                visited[nextNode]=true;
                q.push(nextNode);
            }
        }
        z++;
    }
    for(let i=0;i<visited.length;i++){
        if(!visited[i]){
            return false;
        }
    }
    return true;
};