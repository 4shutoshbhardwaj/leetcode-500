/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let arr=Array(edges.length+2).fill(null).map(()=>[]);
    for(let i=0;i<edges.length;i++){
        arr[edges[i][0]].push(edges[i][1]);
        arr[edges[i][1]].push(edges[i][0]);
    }
    for(let i=1;i<arr.length;i++){
        if(arr[i].length>1)return i;
    }
};