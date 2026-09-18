/**
 * // Definition for a _Node.
 * function _Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var inorderSuccessor = function(node) {
    let temp=node;
    while(temp.parent){
        temp=temp.parent;
    }
    let ans;
    function func(nod){
        if(!nod)return;
        if(nod.val>node.val){
            ans=nod;
            func(nod.left);
        }else if(nod.val<node.val){
            func(nod.right);
        }else{
            let temp=nod.right;
            while(temp){
                ans=temp;
                temp=temp.left;
            }
        }
    }
    func(temp);
    return ans;
};