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
 * @return {number}
 */
var maxDepth = function(root) {
    let max=0;
    function maxDepth(node,count){
        if(!node)return;
        max=Math.max(count,max);
        maxDepth(node.left,count+1);
        maxDepth(node.right,count+1);
    }
    maxDepth(root,1);
    return max;
};