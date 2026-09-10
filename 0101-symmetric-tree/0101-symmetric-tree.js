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
var isSymmetric = function(root) {
    function func(left,right){
        if(!left||!right){
            return left==right;
        }
        if(left.val!=right.val)return false;
        return func(left.left,right.right)&&func(left.right,right.left);
    }
    return !root||func(root.left,root.right);
};