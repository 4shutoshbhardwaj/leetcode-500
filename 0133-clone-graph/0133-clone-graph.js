/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if(node==null)return null;
    let obj={};
    let q=[node];
    let z=0;
    obj[node.val]=new _Node(node.val);
    while(z<q.length){
        let curr=q[z];
        let val=curr.val;
        for(let i=0;i<curr.neighbors.length;i++){
            let next=curr.neighbors[i];
            if(obj[next.val]==undefined){
                obj[next.val]=new _Node(next.val);
                q.push(next);
            }
            obj[val].neighbors.push(obj[next.val]);
        }
        z++;
    }
    return obj[node.val];
};