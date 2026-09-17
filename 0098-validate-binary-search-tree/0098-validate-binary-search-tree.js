/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    function func(node,l,r){
        if(!node)return true;
        if(node.val<=l||node.val>=r){
            return false;
        }
        return func(node.left,l,node.val)&&func(node.right,node.val,r);
    }
    return func(root,-Infinity,Infinity);
};