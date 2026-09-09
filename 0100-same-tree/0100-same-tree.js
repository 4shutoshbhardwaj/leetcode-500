/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let result=true;
    function identical(p,q){
        if((p&&!q)||(q&&!p)){
            result=false;
            return;
        }else if(!q&&!p)return;
        if(q.val!=p.val){
            result=false;
            return;
        }
        identical(p.left,q.left);
        identical(p.right,q.right);
    }
    identical(p,q);
    return result;
};