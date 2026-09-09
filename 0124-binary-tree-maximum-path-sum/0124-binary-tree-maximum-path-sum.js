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
var maxPathSum = function(root) {
    let max=-Infinity;
    function maxSum(node){
        if(!node)return 0;
        let l=Math.max(0,maxSum(node.left));
        let r=Math.max(0,maxSum(node.right));
        max=Math.max(max,l+r+node.val);
        return Math.max(l,r)+node.val;
    }
    maxSum(root);
    return max;
};