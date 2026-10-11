/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let obj={};
    for(let i=0;i<edges.length;i++){
        if(obj[edges[i][0]]==undefined){
            obj[edges[i][0]]=1
        }else{
            return edges[i][0];
        }
        if(obj[edges[i][1]]==undefined){
            obj[edges[i][1]]=1
        }else{
            return edges[i][1];
        }
    }
    // console.log(obj);
};